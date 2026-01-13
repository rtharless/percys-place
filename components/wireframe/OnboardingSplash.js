export default function OnboardingSplash({ children }) {
  return (
    <div className="relative -mx-4 -mt-10 h-[780px] overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7F9FC] to-[#FFF4EC]" />

      <div className="relative h-full px-5 pb-8 pt-10">
        {children}
      </div>
    </div>
  );
}
