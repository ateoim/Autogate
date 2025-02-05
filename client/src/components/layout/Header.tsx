import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle scroll behavior for home page sections
    if (href.startsWith('/#') && location === '/') {
      e.preventDefault();
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img 
                src="/titanlogo.png" 
                alt="Titan AutoGate Repairs" 
                className="h-12 w-auto"
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur supports-[backdrop-filter]:bg-white/95 border-b md:hidden shadow-lg">
              <nav className="container mx-auto px-4 py-6 flex flex-col space-y-5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-base font-medium text-gray-900 hover:text-primary transition-colors py-1"
                  >
                    {item.label}
                  </a>
                ))}
                <a 
                  href="tel:0424454654" 
                  className="flex items-center gap-2 text-primary font-semibold mt-4 py-2 border-t border-gray-100"
                >
                  <Phone className="h-5 w-5" />
                  0424 454 654
                </a>
              </nav>
            </div>
          )}

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:0424454654" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold">0424 454 654</span>
            </a>
            <Button 
              asChild 
              className="bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <Link href="/contact">
                24/7 Emergency Service
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}