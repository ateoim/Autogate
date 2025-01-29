import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    author: "Marcus Julius",
    role: "Local Guide",
    rating: 5,
    date: "a month ago",
    photo: "/reviews/marcus-julius.jpg",
    reviewCount: "67 reviews",
    photoCount: "184 photos",
    text: "Nothing but positive to say about Mo, from he's very professional and determined approached, to his prompt communication and punctuality. Mo helped sourcing and programming new remotes and spent hours as we had a very old system where other companies had failed.",
    response: {
      text: "Thanks for your kind words Marcus. Helping customers is our top priority",
      date: "a month ago"
    }
  },
  // Add more testimonials here...
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
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.photo} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <span>{testimonial.role}</span>
                      <span>•</span>
                      <span>{testimonial.reviewCount}</span>
                      <span>•</span>
                      <span>{testimonial.photoCount}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="ml-2 text-gray-500 text-sm">{testimonial.date}</span>
                </div>

                <blockquote className="text-lg text-gray-700 mb-6">
                  "{testimonial.text}"
                </blockquote>

                {testimonial.response && (
                  <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-1">Response from the owner</p>
                    <p className="text-sm text-gray-600">{testimonial.response.text}</p>
                    <p className="text-xs text-gray-500 mt-2">{testimonial.response.date}</p>
                  </div>
                )}
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