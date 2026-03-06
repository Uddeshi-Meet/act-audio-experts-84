import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike R.",
    text: "James did an amazing job on my remote start and radio install. The sound is crystal clear and the remote start is a game changer in winter. Highly recommend ACT Audio!",
    service: "Remote Start & Radio",
  },
  {
    name: "Sarah L.",
    text: "Got my windows tinted and a backup camera installed. Steve was super professional and explained everything. The tint looks clean and keeps my car so much cooler.",
    service: "Window Tint & Backup Camera",
  },
  {
    name: "Tom D.",
    text: "Best car audio shop in Connecticut, hands down. They designed a custom system around my music taste. Bass hits hard but vocals are still clean. Factory look, upgraded performance.",
    service: "Custom Car Audio",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading uppercase tracking-[0.3em] text-secondary text-sm mb-3">What Customers Say</p>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-gradient-brand">Testimonials</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-surface rounded-lg p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
              <div>
                <p className="text-foreground font-semibold">{t.name}</p>
                <p className="text-primary text-sm">{t.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
