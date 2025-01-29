import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/90 to-blue-600/90 text-white">
      <div className="absolute inset-0 bg-black/40" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1651525670104-db1d3b13c3d9")',
          backgroundBlendMode: 'overlay'
        }}
      />
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Keep Gates Moving
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Sydney's trusted experts in automatic gate repairs and installations. Available 24/7 for emergency repairs.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href="tel:0424454654">Call Now</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10">
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
