import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import actLogo from "@/assets/act-audio-logo.png";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <img src={actLogo} alt="ACT Audio Logo" className="h-10" />
        <div className="hidden md:flex items-center gap-6 font-heading uppercase tracking-wider text-sm">
          {["services", "why-us", "stats", "testimonials", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {s === "why-us" ? "Why Us" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
        <a href="tel:860-870-7676">
          <Button variant="hero" size="sm" className="gap-2">
            <Phone className="w-4 h-4" /> Call Now
          </Button>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
