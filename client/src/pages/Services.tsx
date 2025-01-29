import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Settings, SlidersHorizontal, Radio, Shield, Clock, Users, MapPin } from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      title: "Automatic Sliding Gate Solutions",
      description: "Comprehensive sliding gate services including motor installation, rail system optimization, and smart automation integration.",
      icon: SlidersHorizontal,
      features: [
        "Motor installation and replacement",
        "Track and rail system repairs",
        "Remote control programming",
        "Smart device integration",
        "Safety sensor installation"
      ]
    },
    {
      title: "Swing Gate Automation",
      description: "Expert services for residential and commercial swing gates, from mechanical repairs to complete automation systems.",
      icon: Settings,
      features: [
        "Hydraulic system maintenance",
        "Underground motor installation",
        "Cantilever system repairs",
        "Access control integration",
        "Safety compliance upgrades"
      ]
    },
    {
      title: "Access Control Systems",
      description: "Advanced access control solutions including remote systems, keypads, and mobile integration.",
      icon: Radio,
      features: [
        "Remote control programming",
        "Keypad installation",
        "Mobile phone access setup",
        "Intercom integration",
        "Security system synchronization"
      ]
    }
  ];

  const highlights = [
    {
      title: "Quality Warranty",
      description: "Comprehensive warranty coverage on new installations and motor replacements.",
      icon: Shield
    },
    {
      title: "Professional Team",
      description: "Certified technicians with extensive experience in gate automation systems.",
      icon: Users
    },
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock emergency service for urgent gate repairs and maintenance.",
      icon: Clock
    }
  ];

  const serviceAreas = [
    "Brunswick", "Coburg", "Pascoe Vale", "Glenroy", "Preston",
    "Reservoir", "Thornbury", "Northcote", "Fitzroy North", "Carlton North",
    "Essendon", "Moonee Ponds", "Ascot Vale", "Brunswick West", "Fawkner",
    "Footscray", "Sunshine", "St Albans", "Williamstown", "Altona",
    "Yarraville", "Newport", "Spotswood", "Seddon", "Maidstone",
    "West Footscray", "Sunshine West", "Sunshine North", "Laverton", "Braybrook",
    "Docklands", "Southbank", "North Melbourne", "West Melbourne", "Kensington"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Melbourne's leading provider of automatic gate solutions, offering comprehensive installation, repair, and maintenance services for both residential and commercial properties.
          </p>

          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {mainServices.map((service, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center p-6">
                <highlight.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </Card>
            ))}
          </div>

          {/* Service Areas */}
          <section className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Service Areas in Melbourne</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-gray-600">
                  {area}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
