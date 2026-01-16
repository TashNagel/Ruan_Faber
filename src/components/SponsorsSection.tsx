import { motion } from "framer-motion";
import tnLogo from "../assets/tnWEBSTUDIO logo.png";


const sponsors = [
  { name: "tnWEBSTUDIO", logo: tnLogo, placeholder: false },
  { name: "Sponsor 2", placeholder: true },
  { name: "Sponsor 3", placeholder: true },

];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            Proudly Supported By
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Our Sponsors
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              {sponsor.placeholder ? (
                <div className="w-56 h-28 md:w-80 md:h-36 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center text-muted-foreground text-sm font-medium hover:border-primary/30 transition-colors">
                  <span className="opacity-50">Your Logo Here</span>
                </div>
              ) : (
                <div className="w-56 h-28 md:w-80 md:h-36 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center p-4 hover:border-primary/30 transition-colors">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          Interested in sponsoring? <a href="#contact" className="text-primary hover:underline">Get in touch</a>
        </motion.p>
      </div>
    </section>
  );
};

export default SponsorsSection;
