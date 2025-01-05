const OrangeSliceIcon = ({ className = "", size = 120 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g>
      {/* Orange circle background */}
      <circle cx="60" cy="60" r="55" fill="#F97316" />
      
      {/* Inner orange flesh */}
      <circle cx="60" cy="60" r="50" fill="#FEC6A1" />
      
      {/* White segments */}
      <path
        d="M60 60 L60 10 A50 50 0 0 1 103.3 35 Z"
        fill="white"
        fillOpacity="0.95"
      />
      <path
        d="M60 60 L103.3 35 A50 50 0 0 1 103.3 85 Z"
        fill="white"
        fillOpacity="0.95"
      />
      <path
        d="M60 60 L103.3 85 A50 50 0 0 1 60 110 Z"
        fill="white"
        fillOpacity="0.95"
      />
      <path
        d="M60 60 L60 110 A50 50 0 0 1 16.7 85 Z"
        fill="white"
        fillOpacity="0.95"
      />
      <path
        d="M60 60 L16.7 85 A50 50 0 0 1 16.7 35 Z"
        fill="white"
        fillOpacity="0.95"
      />
      <path
        d="M60 60 L16.7 35 A50 50 0 0 1 60 10 Z"
        fill="white"
        fillOpacity="0.95"
      />
      
      {/* Leaves */}
      <path
        d="M65 5 C70 0 85 0 90 5 C95 10 90 20 85 25 L65 5Z"
        fill="#22C55E"
      />
      <path
        d="M75 0 C80 -5 95 -5 100 0 C105 5 100 15 95 20 L75 0Z"
        fill="#16A34A"
      />
    </g>
  </svg>
);

export default OrangeSliceIcon;