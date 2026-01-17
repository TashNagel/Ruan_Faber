import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Facebook } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="py-24 bg-background relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-6 relative">
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
        <span className="text-primary text-sm tracking-widest uppercase font-medium">
          Let's Connect
        </span>
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mt-4">
          GET IN TOUCH
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          For sponsorships, media inquiries, or speaking engagements,
          feel free to reach out through any of the channels below.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <motion.a href="mailto:management@ruanfaber.co.za" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="group bg-card-gradient border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-xl mb-2">Email</h3>
          <p className="text-muted-foreground text-sm">management@ruanfaber.co.za</p>
        </motion.a>

        <motion.a href="https://www.instagram.com/ruan_faber_swimmer" target="_blank" rel="noopener noreferrer" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="group bg-card-gradient border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
            <Instagram className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-xl mb-2">Instagram</h3>
          <p className="text-muted-foreground text-sm">@ruan_faber_swimmer</p>
        </motion.a>

        <motion.a href="https://www.facebook.com/RuanFaberSwimmer/" target="_blank" rel="noopener noreferrer" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="group bg-card-gradient border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
            <Facebook className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-xl mb-2">Facebook</h3>
          <p className="text-muted-foreground text-sm">RuanFaberSwimmer</p>
        </motion.a>
      </div>

      {/* Location */}
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Based in North West Province, Rustenburg  </span>
        </div>
      </motion.div>
    </div>
  </section>;
};
export default ContactSection;