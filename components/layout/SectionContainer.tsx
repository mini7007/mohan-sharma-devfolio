import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionContainer({ children, className }: SectionContainerProps) {
  return (
    <div className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
