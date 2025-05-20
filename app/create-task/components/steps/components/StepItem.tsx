interface StepItemProps {
  children: React.ReactNode;
  color: string;
}

export function StepItem({ children, color }: StepItemProps) {
  return (
    <div className="flex flex-col items-center align-center gap-3">
      <div className={`${color === "emerald" ? "bg-emerald-700" : "bg-gray-400"} w-2 h-2 rounded-full`}></div>
      <div>{children}</div>
    </div>
  );
}
