import { motion } from "framer-motion";
import { Award, Wrench, Shield } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "MECP Certified",
    desc: "One of only three shops in New England with certified technicians. Your vehicle is in expert hands.",
  },
  {
    icon: Wrench,
    title: "25+ Years Experience",
    desc: "Operating since 2000, we've perfected the art of custom installs with a factory-like finish.",
  },
  {
    icon: Shield,
    title: "Done-Right Guarantee",
    desc: "Clean integration, functionality first. We design every install around your vehicle and your goals.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading uppercase tracking-[0.3em] text-secondary text-sm mb-3">Trust & Quality</p>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-gradient-brand">Why ACT Audio</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto mb-6">
                <r.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl uppercase text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
