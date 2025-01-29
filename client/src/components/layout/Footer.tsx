import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:0424454654" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>0424 454 654</span>
              </a>
              <a href="mailto:info@titanautogate.com.au" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>info@titanautogate.com.au</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Servicing Greater Sydney Area</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Gate Installation</li>
              <li>Gate Repairs</li>
              <li>Maintenance</li>
              <li>24/7 Emergency Service</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 7am - 6pm</li>
              <li>Saturday: 8am - 4pm</li>
              <li>Sunday: Emergency Only</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Titan AutoGate Repairs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
