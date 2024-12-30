import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

export const SalesforceIcon: LucideIcon = forwardRef((props, ref) => (
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
    <path d="M6 16.5a4 4 0 0 1 .47-1.78 3.76 3.76 0 0 1 2-1.47 3.12 3.12 0 0 1 .46-2.05 4 4 0 0 1 1.06-1.28A3.49 3.49 0 0 1 12 9c.93 0 1.88.36 2.57 1.08a3.49 3.49 0 0 1 1.06 2.42 3.92 3.92 0 0 1 2.28 1.65A3.59 3.59 0 0 1 18.5 16.5" />
    <path d="M6 16.5a3.5 3.5 0 0 0 7 0h5.5a3.5 3.5 0 0 0-3.5-3.5c-.97 0-1.84.4-2.47 1.03A3.49 3.49 0 0 0 9.5 13a3.5 3.5 0 0 0-3.5 3.5Z" />
  </svg>
));

SalesforceIcon.displayName = "SalesforceIcon";