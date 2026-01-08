import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card-gradient">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary to-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center">
                    <span className="font-display text-5xl text-primary">AW</span>
                  </div>
                  <p className="text-muted-foreground">Professional Portrait</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl blur-xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-widest uppercase font-medium">
              About Me
            </span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 mb-6">
              BORN TO SWIM
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I discovered my passion for swimming at age 6 when I first touched the water. 
                From that moment, I knew the pool would become my second home. What started as 
                a childhood hobby quickly evolved into a lifelong dedication to excellence.
              </p>
              <p>
                Over the past 15 years, I've represented my country on the world's biggest 
                stages, breaking records and pushing the boundaries of what's possible in 
                competitive swimming. My journey has been marked by countless early morning 
                training sessions, unwavering discipline, and an insatiable hunger for improvement.
              </p>
              <p>
                Beyond the medals and records, swimming has taught me invaluable lessons about 
                perseverance, mental strength, and the power of setting ambitious goals. Today, 
                I'm committed to inspiring the next generation of swimmers while continuing to 
                compete at the highest level.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-secondary rounded-lg border border-border">
                <span className="text-xs text-muted-foreground block">Specialty</span>
                <span className="text-foreground font-medium">Freestyle & Butterfly</span>
              </div>
              <div className="px-4 py-2 bg-secondary rounded-lg border border-border">
                <span className="text-xs text-muted-foreground block">Training Base</span>
                <span className="text-foreground font-medium">Los Angeles, CA</span>
              </div>
              <div className="px-4 py-2 bg-secondary rounded-lg border border-border">
                <span className="text-xs text-muted-foreground block">Coach</span>
                <span className="text-foreground font-medium">David Morrison</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
