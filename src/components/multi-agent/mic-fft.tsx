"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function MicFFT({
  fft,
  className,
}: {
  fft: number[];
  className?: string;
}) {
  return (
    <div className="relative w-full h-8">
      <motion.svg
        viewBox="0 0 192 32"
        width="192"
        height="32"
        className={cn("absolute inset-0 w-full h-full", className)}
      >
        {Array.from({ length: 24 }).map((_, index) => {
          const value = (fft[index] ?? 0) / 4;
          const h = Math.min(Math.max(32 * value, 2), 32);
          const yOffset = 16 - h * 0.5;

          return (
            <motion.rect
              key={`mic-fft-${index}`}
              height={h}
              width={2}
              x={2 + (index * 192 - 4) / 24}
              y={yOffset}
              rx={4}
              fill="currentColor"
            />
          );
        })}
      </motion.svg>
    </div>
  );
} 