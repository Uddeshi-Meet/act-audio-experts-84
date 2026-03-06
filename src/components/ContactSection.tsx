import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24" style={{ background: "var(--card-gradient)" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading uppercase tracking-[0.3em] text-secondary text-sm mb-3">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-gradient-brand">Contact Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl uppercase text-foreground mb-2">Call Us</h3>
            <a href="tel:860-870-7676" className="text-primary hover:underline text-lg">860-870-7676</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl uppercase text-foreground mb-2">Visit Us</h3>
            <p className="text-muted-foreground">458 Talcottville Rd<br />Vernon, CT 06066</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl uppercase text-foreground mb-2">Hours</h3>
            <p className="text-muted-foreground">Mon–Fri: 9am–6pm<br />Sat: By Appointment</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="tel:860-870-7676">
            <Button variant="hero" size="lg" className="gap-2 px-12">
              <Phone className="w-5 h-5" /> Schedule Your Install
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
