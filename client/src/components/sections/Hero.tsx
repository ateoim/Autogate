import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/90 to-blue-600/90 text-white min-h-[80vh]">
      <div className="absolute inset-0 bg-black/40" />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/gate-image.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
          zIndex: 0
        }}
      />
      <div className="relative container mx-auto px-4 py-24 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Melbourne's Premier Gate Automation Specialists
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Expert installation, repairs, and maintenance of automatic gates across Greater Melbourne. 
            With over 15 years of experience, we provide 24/7 emergency services for all gate automation systems.
          </p>
          <ul className="mb-8 space-y-2">
            <li className="flex items-center gap-2">
              ✓ Same Day Service Available
            </li>
            <li className="flex items-center gap-2">
              ✓ Licensed & Insured Professionals
            </li>
            <li className="flex items-center gap-2">
              ✓ All Brands & Gate Types Serviced
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <a href="tel:0424454654">Call Now: 0424 454 654</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 hover:bg-white/20">
              <a href="#services" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                View Our Services
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}