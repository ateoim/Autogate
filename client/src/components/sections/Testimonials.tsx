import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our gate automation services.
          </p>
        </motion.div>
        <TestimonialCarousel />
      </div>
    </section>
  );
}
