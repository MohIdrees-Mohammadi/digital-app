import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const services = [
    "Digital Marketing",
    "Branding",
    "Social Media",
    "Video Editing",
    "Graphic Design",
    "SEO Services",
  ];

  const company = [
    "About Us",
    "Our Team",
    "Careers",
    "Contact",
    "Blog",
    "Case Studies",
  ];

  const legal = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Disclaimer",
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent" />
              <span className="text-2xl font-bold text-foreground">DigitalPro</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Transforming ideas into digital success with 46 comprehensive services designed to elevate your brand and drive business growth.
            </p>
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card-glass hover:bg-primary/10 border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © 2025 DigitalPro. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Mail className="w-4 h-4" />
              <span>contact@digitalpro.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
