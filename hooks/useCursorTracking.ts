import { useState, useEffect, useRef, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface MascotPhysics {
  position: MousePosition;
  velocity: MousePosition;
  acceleration: MousePosition;
}

/**
 * useCursorTracking - Smooth physics-based cursor following
 * Applies acceleration, friction, and smooth easing for natural motion
 */
export const useCursorTracking = () => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [mascotPos, setMascotPos] = useState<MascotPhysics>({
    position: { x: 0, y: 0 },
    velocity: { x: 0, y: 0 },
    acceleration: { x: 0, y: 0 },
  });

  const physicsRef = useRef(mascotPos);
  const animationFrameRef = useRef<number>();

  const mass = 0.2; // Lower = more responsive
  const friction = 0.92; // Friction coefficient
  const maxVelocity = 15; // Maximum speed

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: -1000, y: -1000 });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  useEffect(() => {
    const update = () => {
      const current = physicsRef.current;
      const dx = mousePos.x - current.position.x;
      const dy = mousePos.y - current.position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Calculate acceleration toward cursor
      if (distance > 1) {
        current.acceleration.x = (dx / distance) * (1 - mass);
        current.acceleration.y = (dy / distance) * (1 - mass);
      } else {
        current.acceleration.x = 0;
        current.acceleration.y = 0;
      }

      // Apply acceleration to velocity
      current.velocity.x += current.acceleration.x;
      current.velocity.y += current.acceleration.y;

      // Limit velocity
      const speed = Math.sqrt(
        current.velocity.x ** 2 + current.velocity.y ** 2
      );
      if (speed > maxVelocity) {
        current.velocity.x = (current.velocity.x / speed) * maxVelocity;
        current.velocity.y = (current.velocity.y / speed) * maxVelocity;
      }

      // Apply friction
      current.velocity.x *= friction;
      current.velocity.y *= friction;

      // Update position
      current.position.x += current.velocity.x;
      current.position.y += current.velocity.y;

      // Natural stopping
      if (Math.abs(current.velocity.x) < 0.1) current.velocity.x = 0;
      if (Math.abs(current.velocity.y) < 0.1) current.velocity.y = 0;

      physicsRef.current = current;
      setMascotPos({ ...current });

      animationFrameRef.current = requestAnimationFrame(update);
    };

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos, mass, friction, maxVelocity]);

  return {
    mascotPosition: mascotPos.position,
    mascotVelocity: mascotPos.velocity,
  };
};
