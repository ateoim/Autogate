import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "wouter";

export function Header() {
  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Titan AutoGate Repairs - Professional Gate Automation Services in Sydney" className="h-12" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">Titan</span>
              <span className="text-sm">AutoGate Repairs</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:0424454654" className="hidden md:flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold">0424 454 654</span>
            </a>
            <Button asChild className="bg-primary text-white hover:bg-primary/90">
              <a href="tel:0424454654">
                24/7 Emergency Service
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}