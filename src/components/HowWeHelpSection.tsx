import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const HowWeHelpSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Understanding Your Goals",
      description: "We start by diving deep into your business objectives, target audience, and unique challenges to create a tailored strategy.",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Creating Digital Strategy",
      description: "Our experts develop a comprehensive roadmap combining the right services and tactics to achieve your specific goals.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Designing & Executing Solutions",
      description: "We bring your vision to life with creative excellence, technical expertise, and seamless execution across all platforms.",
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Delivering Measurable Results",
      description: "Track real impact with data-driven insights, continuous optimization, and transparent reporting on your success metrics.",
    },
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            How We Help You{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Achieve Your Goals
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven methodology that transforms your vision into digital success
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent hidden lg:block" />
              )}

              <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
                {/* Icon and Number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent p-0.5">
                      <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3 lg:pt-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
