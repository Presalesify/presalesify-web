import { forwardRef } from "react";
import { LucideProps } from "lucide-react";

export const TeamsIcon = forwardRef<SVGSVGElement, LucideProps>(
  ({ color = "currentColor", size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M13 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M10 16.5V14a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2H9" />
    </svg>
  )
);

TeamsIcon.displayName = "TeamsIcon";