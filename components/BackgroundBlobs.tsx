export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute w-[600px] h-[600px] rounded-full -top-52 -left-52 opacity-[0.18] blur-[120px] animate-blob-float"
        style={{ background: "#3b82f6", animationDelay: "0s" }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full top-1/2 -right-36 opacity-[0.18] blur-[120px] animate-blob-float"
        style={{ background: "#8b5cf6", animationDelay: "2s" }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bottom-24 left-1/4 opacity-[0.15] blur-[120px] animate-blob-float"
        style={{ background: "#ec4899", animationDelay: "4s" }}
      />
    </div>
  );
}
