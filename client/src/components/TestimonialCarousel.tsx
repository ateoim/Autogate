import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    author: "Marcus Julius",
    role: "Local Guide",
    rating: 5,
    date: "a month ago",
    text: "Nothing but positive to say about Mo, from he's very professional and determined approached, to his prompt communication and punctuality. Mo helped sourcing and programming new remotes and spent hours as we had a very old system where other companies had failed."
  },
  {
    author: "Thomas Anderson",
    role: "Customer",
    rating: 5,
    date: "2 months ago",
    text: "Excellent service from start to finish. Had an issue with my automatic gate and they were quick to respond and fix the problem. Very professional and knowledgeable about gate systems."
  },
  {
    author: "Emma Thompson",
    role: "Business Owner",
    rating: 5,
    date: "3 months ago",
    text: "Great service! They helped us with our commercial property gate installation. Very professional team and excellent communication throughout the process."
  }
];

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative max-w-5xl mx-auto px-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex-[0_0_100%] min-w-0 px-4 md:px-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} • {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}