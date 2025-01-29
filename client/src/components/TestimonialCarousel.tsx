import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    author: "Rob M",
    role: "Reviewer",
    rating: 5,
    date: "8 hours ago",
    photo: "/reviews/rob-m.jpg",
    reviewCount: "11 reviews",
    photoCount: "1 photo",
    text: "Fantastic service from Titan AutoGate Repair! They were very quick to respond to my enquiry on their website and I would recommend them to friends."
  },
  {
    author: "Darren Power",
    role: "Reviewer",
    rating: 5,
    date: "3 weeks ago",
    photo: "/reviews/darren-power.jpg",
    reviewCount: "10 reviews",
    photoCount: "2 photos",
    text: "Highly recommend the service. Does Emergency call out to. Would use again."
  },
  {
    author: "Vivian Wong",
    role: "Local Guide",
    rating: 5,
    date: "a month ago",
    photo: "/reviews/vivian-wong.jpg",
    reviewCount: "14 reviews",
    photoCount: "5 photos",
    text: "Appreciate Mo coming out on the weekend on short notice. Excellent communications throughout as well to ensure he has the right parts of the job. It was quick and efficient. Thanks Mo!"
  },
  {
    author: "Marcus Julius",
    role: "Local Guide",
    rating: 5,
    date: "a month ago",
    photo: "/reviews/marcus-julius.jpg",
    reviewCount: "67 reviews",
    photoCount: "184 photos",
    text: "Nothing but positive to say about Mo, from he's very professional and determined approached, to his prompt communication and punctuality. Mo helped sourcing and programming new remotes and spent hours as we had a very old system where other companies had failed."
  },
  {
    author: "K",
    role: "Reviewer",
    rating: 5,
    date: "a month ago",
    photo: "/reviews/k.jpg",
    reviewCount: "3 reviews",
    photoCount: "",
    text: "I would highly recommend as the job was completed quick and efficient. Happy with the outcome and to have a working gate again. Thank you again for being so prompt, especially just before the end of year."
  },
  {
    author: "Tracey Gaffney",
    role: "Reviewer",
    rating: 5,
    date: "a month ago",
    photo: "/reviews/tracey-gaffney.jpg",
    reviewCount: "2 reviews",
    photoCount: "",
    text: "Attended on a Sunday with no extra charge the day after we made our enquiry. Prompt and efficient. Would highly recommend"
  },
  {
    author: "Bron Einhorn",
    role: "Reviewer",
    rating: 5,
    date: "2 months ago",
    photo: "/reviews/bron-einhorn.jpg",
    reviewCount: "8 reviews",
    photoCount: "",
    text: "I highly rate Mo for his professionalism and service. My job wasn't straightforward (broken keypad) but he fixed it faster than I expected with great professionalism and service. Will definitely use him again and highly recommend him."
  },
  {
    author: "Deena Kako",
    role: "Reviewer",
    rating: 5,
    date: "2 months ago",
    photo: "/reviews/deena-kako.jpg",
    reviewCount: "5 reviews",
    photoCount: "18 photos",
    text: "I originally came across Titan from a quick google search it fix my gate months ago. Mo not only replied straight away, he was out to see us and fixed the gate within 48hrs."
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
                      {testimonial.reviewCount && (
                        <>
                          <span>•</span>
                          <span>{testimonial.reviewCount}</span>
                        </>
                      )}
                      {testimonial.photoCount && (
                        <>
                          <span>•</span>
                          <span>{testimonial.photoCount}</span>
                        </>
                      )}
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

                <blockquote className="text-lg text-gray-700">
                  "{testimonial.text}"
                </blockquote>
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