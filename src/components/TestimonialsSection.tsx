import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Their digital marketing strategy transformed our business. We saw a 300% increase in qualified leads within just 3 months. Absolutely exceptional service!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, Creative Studio",
      content: "The branding work they delivered exceeded all expectations. They truly understood our vision and created an identity that resonates with our audience.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "Professional, creative, and results-driven. Their social media management has taken our engagement to new heights. Highly recommended!",
      rating: 5,
    },
    {
      name: "David Kumar",
      role: "Owner, E-commerce Plus",
      content: "From website design to video production, every service has been top-notch. They're not just vendors, they're true partners in our success.",
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 lg:p-8 rounded-2xl bg-card/50 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
