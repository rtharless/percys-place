export function PercysLogoMark({ size = 40, className = "" }) {
  return (
    <img
      src="/brand/Percys%20Logo%20v1.png"
      width={size}
      height={size}
      alt="Percy’s Place"
      className={className}
      style={{ display: "block" }}
    />
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
