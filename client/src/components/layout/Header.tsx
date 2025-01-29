import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <img src="/logo.svg" alt="Titan AutoGate Repairs" className="h-12" />
          <div className="flex flex-col">
            <span className="font-bold text-lg text-primary">Titan</span>
            <span className="text-sm">AutoGate Repairs</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:0424454654" className="hidden md:flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">0424 454 654</span>
          </a>
          <Button asChild>
            <a href="tel:0424454654">
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
