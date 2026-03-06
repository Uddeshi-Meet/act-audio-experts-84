import { motion } from "framer-motion";
import { Music, Sun, Shield, Car, Smartphone, Key, Ship, Bike, CreditCard } from "lucide-react";

const services = [
  { icon: Music, title: "Car Audio", desc: "Stereo upgrades, subs, speakers, sound dampening & custom design.", color: "primary" },
  { icon: Sun, title: "Window Tinting", desc: "Heat reduction up to 70%, UV protection SPF 285, privacy & style.", color: "secondary" },
  { icon: Shield, title: "Paint Protection Film", desc: "Clear scratch & chip protection that self-heals. Preserve resale value.", color: "primary" },
  { icon: Car, title: "Remote Start & Security", desc: "Warm in winter, cool in summer. Smartphone control + security.", color: "secondary" },
  { icon: Smartphone, title: "CarPlay / Android Auto", desc: "Upgrade your factory system with Apple CarPlay or Android Auto.", color: "primary" },
  { icon: Shield, title: "Windshield Skin", desc: "Impact-resistant, hydrophobic, self-healing windshield protection.", color: "secondary" },
  { icon: Key, title: "Duplicate Keys", desc: "Key duplication, remote & transponder programming for all makes.", color: "primary" },
  { icon: Ship, title: "Marine Audio", desc: "Marine-grade, UV/corrosion resistant audio systems for boats.", color: "secondary" },
  { icon: Bike, title: "Motorcycle Audio", desc: "Speaker upgrades & LED/RGB lighting integrated into factory systems.", color: "primary" },
  { icon: Car, title: "Vehicle Safety", desc: "Backup cameras, 360 views, blind spot monitors & anti-collision.", color: "secondary" },
  { icon: Shield, title: "Detailing & Ceramic", desc: "Professional detailing and ceramic coating for lasting protection.", color: "primary" },
  { icon: CreditCard, title: "Financing Available", desc: "No credit needed, interest-free options. Applying won't hurt your score.", color: "secondary" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading uppercase tracking-[0.3em] text-secondary text-sm mb-3">What We Do</p>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-gradient-brand">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-surface rounded-lg p-6 hover:border-primary/50 transition-all group"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${service.color === "primary" ? "bg-primary/15 text-primary" : "bg-secondary/15 text-secondary"}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl uppercase text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
