import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Gallery() {
  const galleryItems = [
    {
      title: "BFT Sliding Gate",
      description: "Modern sliding gate installation with BFT automation",
      image: "/sliding-gate-1.jpg"
    },
    {
      title: "BFT Swing Gate System",
      description: "Dual swing gate with BFT underground motors",
      image: "/swing-gate-1.jpg"
    },
    // Add more gallery items here
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12">Our Work Gallery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-4">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </AspectRatio>
                  <h3 className="font-semibold mt-4 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
