import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

export const ApolloIcon: LucideIcon = forwardRef((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    ref={ref}
    {...props}
  >
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
    <path d="m8 14 4-8 4 8" />
    <path d="M9.5 11.5h5" />
  </svg>
));

ApolloIcon.displayName = "ApolloIcon";