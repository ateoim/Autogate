import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Settings, Wrench, Shield, Clock } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Installation",
      description: "Professional installation of automatic gates for residential and commercial properties"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Repairs",
      description: "Fast and reliable repairs for all types of automatic gates and gate motors"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Maintenance",
      description: "Regular maintenance to keep your gates operating smoothly and prevent breakdowns"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency repair service when you need it most"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-4 text-primary">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}