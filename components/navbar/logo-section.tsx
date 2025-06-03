import { Car } from "lucide-react";

export function LogoSection() {
  return (
    <div className="flex items-center gap-2">
      <Car className="h-8 w-8" />
      <h1 className="text-xl font-bold">AutoDiag Pro</h1>
    </div>
  );
}