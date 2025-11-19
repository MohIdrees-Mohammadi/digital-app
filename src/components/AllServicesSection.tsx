import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  TrendingUp, Palette, Share2, Pen, Video, Youtube, Radio, Megaphone,
  Search, Globe, Mail, FileText, Code, Smartphone, ShoppingCart, Camera,
  Mic, Music, BookOpen, Award, Users, Briefcase, BarChart, Target,
  Zap, Lock, Cloud, Database, Headphones, MessageSquare, Gift, Heart,
  Star, Sparkles, Box, Package, Truck, MapPin, Calendar, Clock,
  Settings, Wrench, Shield, CheckCircle, Layers
} from "lucide-react";

const AllServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allServices = [
    { name: "Digital Marketing", icon: TrendingUp },
    { name: "Branding", icon: Palette },
    { name: "Social Media Management", icon: Share2 },
    { name: "Graphic Designing", icon: Pen },
    { name: "Video Editing", icon: Video },
    { name: "YouTube Services", icon: Youtube },
    { name: "Equipment for Large Programs", icon: Radio },
    { name: "Advertisement Generation", icon: Megaphone },
    { name: "SEO Optimization", icon: Search },
    { name: "Website Development", icon: Globe },
    { name: "Email Marketing", icon: Mail },
    { name: "Content Writing", icon: FileText },
    { name: "Web Design", icon: Code },
    { name: "Mobile App Development", icon: Smartphone },
    { name: "E-commerce Solutions", icon: ShoppingCart },
    { name: "Photography", icon: Camera },
    { name: "Podcast Production", icon: Mic },
    { name: "Audio Production", icon: Music },
    { name: "Copywriting", icon: BookOpen },
    { name: "Brand Strategy", icon: Award },
    { name: "Influencer Marketing", icon: Users },
    { name: "Business Consulting", icon: Briefcase },
    { name: "Analytics & Reporting", icon: BarChart },
    { name: "Performance Marketing", icon: Target },
    { name: "Growth Hacking", icon: Zap },
    { name: "Cybersecurity", icon: Lock },
    { name: "Cloud Services", icon: Cloud },
    { name: "Database Management", icon: Database },
    { name: "Customer Support", icon: Headphones },
    { name: "Live Chat Integration", icon: MessageSquare },
    { name: "Promotional Campaigns", icon: Gift },
    { name: "Community Management", icon: Heart },
    { name: "Reputation Management", icon: Star },
    { name: "Product Launches", icon: Sparkles },
    { name: "3D Modeling", icon: Box },
    { name: "Packaging Design", icon: Package },
    { name: "Logistics Support", icon: Truck },
    { name: "Location Scouting", icon: MapPin },
    { name: "Event Planning", icon: Calendar },
    { name: "Time Management Tools", icon: Clock },
    { name: "Automation Services", icon: Settings },
    { name: "Technical Support", icon: Wrench },
    { name: "Maintenance Services", icon: Wrench },
    { name: "Security Audits", icon: Shield },
    { name: "Quality Assurance", icon: CheckCircle },
    { name: "UI/UX Design", icon: Layers },
  ];

  // Split services into 3 rows for varied scrolling
  const row1 = allServices.slice(0, 16);
  const row2 = allServices.slice(16, 32);
  const row3 = allServices.slice(32, 46);

  const ScrollingRow = ({ services, direction = "left" }: { services: typeof allServices, direction?: "left" | "right" }) => {
    // Duplicate services for seamless loop
    const duplicatedServices = [...services, ...services];
    
    return (
      <div className="relative overflow-hidden py-4">
        <motion.div
          className="flex gap-4"
          animate={{
            x: direction === "left" ? [0, -50 + "%"] : ["-50%", 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedServices.map((service, index) => (
            <div
              key={`${service.name}-${index}`}
              className="flex-shrink-0 group"
            >
              <div className="relative w-[280px] p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {service.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 px-4"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 backdrop-blur-sm">
            Complete Service Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            46 Services,{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Infinite Possibilities
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to succeed in the digital world, flowing seamlessly
          </p>
        </motion.div>

        {/* Infinite Scrolling Rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <ScrollingRow services={row1} direction="left" />
          <ScrollingRow services={row2} direction="right" />
          <ScrollingRow services={row3} direction="left" />
        </motion.div>

        {/* Gradient Overlays for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default AllServicesSection;
