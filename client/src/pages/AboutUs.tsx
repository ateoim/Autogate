import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <img 
              src="/titanlogo.png" 
              alt="Titan AutoGate Repairs" 
              className="h-16 w-auto mx-auto mb-6"
            />
            <h1 className="text-4xl font-bold mb-8">About Titan AutoGate Repairs</h1>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-6">
              With over 15 years of experience in the industry, Titan AutoGate Repairs has established itself as Melbourne's leading automatic gate specialist, providing top-tier installation, repair, and maintenance services for both residential and commercial properties.
            </p>
            <p className="mb-6">
              Our team of certified technicians specializes in all types of automatic gates, including BFT sliding and swing gates. We pride ourselves on delivering reliable, efficient, and professional service to ensure your gate systems operate smoothly and securely.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-6">Why Choose Us?</h2>
            <ul className="list-disc pl-6 mb-8">
              <li>24/7 Emergency Service Available</li>
              <li>Fully Licensed and Insured</li>
              <li>Experienced BFT Gate Specialists</li>
              <li>Competitive Pricing</li>
              <li>Comprehensive Warranty on All Work</li>
              <li>Fast Response Times</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}