"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function BackgroundBeamsWithCollision({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-full w-full overflow-hidden relative flex items-center justify-center",
        className
      )}
    >
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="absolute w-full h-full text-slate-50/[0.05] stroke-[0.5px] [mask-image:radial-gradient(600px_600px_at_center,white,transparent)]"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {paths.map((path, index) => (
            <path key={index} d={path} />
          ))}
        </svg>
      </div>

      {children}
    </div>
  );
}

const paths = [
  "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
  "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
  "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
  "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
  "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
];
