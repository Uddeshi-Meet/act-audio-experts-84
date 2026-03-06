import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" style={{ background: "var(--hero-gradient)" }}>
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-primary"
            style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading uppercase tracking-[0.3em] text-secondary mb-4 text-sm md:text-base">
            Vernon, CT — Since 2000
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-none mb-6">
            <span className="text-foreground">Custom Audio.</span>
            <br />
            <span className="text-gradient-brand">Done Right.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Car audio, window tinting, paint protection, remote start & vehicle safety — installed by certified technicians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:860-870-7676">
              <Button variant="hero" size="lg" className="gap-2 px-10">
                <Phone className="w-5 h-5" /> 860-870-7676
              </Button>
            </a>
            <Button
              variant="heroOutline"
              size="lg"
              className="px-10"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
