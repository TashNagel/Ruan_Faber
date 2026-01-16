import { motion } from "framer-motion";

const sponsors = [
  { name: "Sponsor 1", placeholder: true },
  { name: "Sponsor 2", placeholder: true },
  { name: "Sponsor 3", placeholder: true },
  { name: "Sponsor 4", placeholder: true },
  { name: "Sponsor 5", placeholder: true },
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

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
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
                <div className="w-32 h-16 md:w-40 md:h-20 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center text-muted-foreground text-sm font-medium hover:border-primary/30 transition-colors">
                  <span className="opacity-50">Your Logo Here</span>
                </div>
              ) : (
                <img
                  src={sponsor.name}
                  alt={sponsor.name}
                  className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
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
