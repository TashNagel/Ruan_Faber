import { motion } from "framer-motion";
import ruanProfile from "@/assets/ruan-profile.jpg";

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
              <img 
                src={ruanProfile} 
                alt="Ruan Faber - South African Swimmer"
                className="w-full h-full object-cover object-top"
              />
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
                I first discovered my love for the water at age 6, and pretty quickly swimming 
                became the place where I feel most like myself. Now, at 17, the pool is still 
                my second home, but the "fun hobby" has turned into a focused mission: train hard, 
                race smart, and keep getting better every season.
              </p>
              <p>
                I'm based in Rustenburg in South Africa's North West, and I'm proud to represent 
                my school and province as I work toward bigger goals. I've had some big moments 
                already, including being selected for the South African Schools Swimming Team (2025) 
                and earning opportunities to compete at high-level galas and championships.
              </p>
              <p>
                What I love most about swimming is that there's always something to chase—a faster 
                split, a cleaner turn, a stronger finish. The sport has taught me discipline, 
                confidence, and how to stay calm under pressure, especially on race day. I'm excited 
                to keep building, keep learning, and see how far I can take this journey, one session 
                and one race at a time.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-secondary rounded-lg border border-border">
                <span className="text-xs text-muted-foreground block">Specialty</span>
                <span className="text-foreground font-medium">Freestyle & Breaststroke</span>
              </div>
              <div className="px-4 py-2 bg-secondary rounded-lg border border-border">
                <span className="text-xs text-muted-foreground block">Training Base</span>
                <span className="text-foreground font-medium">Rustenburg, North West</span>
              </div>
              <div className="px-4 py-2 bg-secondary rounded-lg border border-border">
                <span className="text-xs text-muted-foreground block">Team</span>
                <span className="text-foreground font-medium">Swim Star Aquatics Rtb</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
