"use client";
import { expressionColors, isExpressionColor } from "@/utils/expressionColors";
import { expressionLabels } from "@/utils/expressionLabels";
import { motion } from "motion/react";
import { CSSProperties } from "react";

export default function Expressions({
  values,
}: {
  values: Record<string, number>;
}) {
  const top3 = Object.entries(values)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <div className="text-xs p-3 w-full grid grid-cols-1 md:grid-cols-3 gap-3">
      {top3.map(([key, value]) => (
        <div key={key} className="w-full overflow-hidden">
          <div className="flex items-center justify-between gap-1 pb-1">
            <div className="font-medium truncate tracking-tight">
              {expressionLabels[key] || key}
            </div>
            <div className="tabular-nums opacity-50 tracking-tight">{value.toFixed(2)}</div>
          </div>
          <div
            className="relative h-1"
            style={
              {
                "--bg": isExpressionColor(key)
                  ? expressionColors[key]
                  : "var(--bg)",
              } as CSSProperties
            }
          >
            <div className="absolute top-0 left-0 size-full rounded-full opacity-10 bg-[var(--bg)]" />
            <motion.div
              className="absolute top-0 left-0 h-full bg-[var(--bg)] rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min(Math.max(value, 0), 1) * 100}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
} 