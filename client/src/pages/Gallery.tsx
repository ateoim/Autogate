import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GateCarousel } from "@/components/GateCarousel";

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Our Work Gallery</h1>
            <p className="text-lg text-gray-600 mb-12">
              Explore our portfolio of custom gate installations and automation projects. 
              We specialize in BFT sliding and swing gates for both residential and commercial properties.
            </p>
            <GateCarousel />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}