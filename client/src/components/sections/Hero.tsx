import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-primary">
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("/automatic-gate.jpg")`,
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-2xl text-white">
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