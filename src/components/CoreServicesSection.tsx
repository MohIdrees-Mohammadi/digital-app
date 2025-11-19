import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  TrendingUp, 
  Palette, 
  Share2, 
  Pen, 
  Video, 
  Youtube, 
  Radio, 
  Megaphone 
} from "lucide-react";

const CoreServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic campaigns that boost visibility, drive traffic, and convert leads into loyal customers",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Create a memorable identity that resonates with your audience and stands out in the market",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Engage your audience with compelling content and grow your community across all platforms",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Pen,
      title: "Graphic Designing",
      description: "Stunning visuals that communicate your message and captivate your target audience",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video production that tells your story and keeps viewers engaged",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Youtube,
      title: "YouTube Services",
      description: "Complete YouTube channel management, optimization, and growth strategies",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Radio,
      title: "Equipment for Large Programs",
      description: "Professional equipment support for events, conferences, and large-scale productions",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: Megaphone,
      title: "Advertisement Generation",
      description: "Data-driven ad campaigns that maximize ROI and reach your ideal customers",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="core-services" ref={ref} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card/30 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Core Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Powerful Solutions for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Need
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our most popular services, designed to drive growth and deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
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

export default CoreServicesSection;
