export function PercysLogoMark({ size = 40, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Percy’s Place"
    >
      <defs>
        <linearGradient id="pp_bg" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DC2626" stopOpacity="0.96" />
          <stop offset="1" stopColor="#0B1220" stopOpacity="0.96" />
        </linearGradient>
      </defs>

      <circle cx="32" cy="32" r="30" fill="url(#pp_bg)" />
      <circle cx="32" cy="32" r="30" stroke="rgba(255,255,255,0.65)" strokeWidth="2" />

      <path
        d="M8 34c8-7 16-10 24-8 8 2 16-1 24-10v14c-8 7-16 10-24 8S16 39 8 48V34Z"
        fill="#FFFFFF"
        fillOpacity="0.95"
      />

      <path
        d="M8 40c8-7 16-10 24-8 8 2 16-1 24-10"
        stroke="rgba(29,78,216,0.65)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <g>
        <text
          x="32"
          y="25"
          textAnchor="middle"
          fontSize="12"
          fontWeight="800"
          fontStyle="italic"
          fontFamily="ui-sans-serif, system-ui"
          fill="#FFFFFF"
        >
          PERCY
        </text>
        <text
          x="32"
          y="54"
          textAnchor="middle"
          fontSize="9"
          fontWeight="700"
          fontFamily="ui-sans-serif, system-ui"
          letterSpacing="1.6"
          fill="#FFFFFF"
          opacity="0.9"
        >
          PLACE
        </text>
      </g>
    </svg>
  );
}

export default function PercysLogo({ variant = "lockup", size = 40 }) {
  if (variant === "mark") {
    return <PercysLogoMark size={size} />;
  }

  return (
    <div className="flex items-center gap-3">
      <PercysLogoMark size={size} />
      <div className="leading-tight">
        <div className="text-base font-semibold tracking-tight text-slate-900">
          Percy&apos;s Place
        </div>
        <div className="text-xs font-medium text-slate-500">
          Roadside charging • local treats
        </div>
      </div>
    </div>
  );
}
