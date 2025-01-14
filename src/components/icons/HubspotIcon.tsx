import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

export const HubspotIcon: LucideIcon = forwardRef((props, ref) => (
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
    <path d="M7 12h4m2 0h4" />
    <path d="M12 7v10" />
    <circle cx="12" cy="12" r="3" />
  </svg>
));

HubspotIcon.displayName = "HubspotIcon";