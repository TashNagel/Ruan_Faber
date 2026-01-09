import { motion } from "framer-motion";
import heroImage from "@/assets/hero-swimmer.png";
import { calculateCareerStats } from "@/data/competitionData";

const HeroSection = () => {
  const careerStats = calculateCareerStats();
  
  // Find best 50 Free time (short course)
  const best50FreeSC = "25.85";
  
  // Highest FINA score from records
  const highestFina = "513.6";
  
  // Years active
  const yearsActive = "5+";

  const highlightStats = [
    { value: careerStats.stats.first.toString(), label: "GOLD MEDALS" },
    { value: highestFina, label: "FINA POINTS" },
    { value: best50FreeSC, suffix: "s", label: "50M FREE PR" },
    { value: yearsActive, label: "YEARS COMPETING" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Hero Area */}
      <div className="relative flex-grow flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="Professional swimmer in action" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/50" />
        </div>

        {/* Animated wave overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
          <svg viewBox="0 0 1440 120" className="w-full h-full animate-wave" preserveAspectRatio="none">
            <path fill="hsl(var(--primary))" d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }}>
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-widest uppercase bg-primary/10 border border-primary/30 rounded-full text-primary">
              National-Level Swimmer
            </span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }} className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wide mb-6 glow-text">
            <span className="text-foreground">RUAN</span>{" "}
            <span className="text-gradient">FABER</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4,
          ease: "easeOut"
        }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Dedicated to pushing the limits of human performance in the water.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6,
          ease: "easeOut"
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#achievements" className="px-8 py-4 font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 glow-aqua">
              View Achievements
            </a>
            <a href="#contact" className="px-8 py-4 font-semibold border border-primary/50 text-foreground rounded-lg hover:bg-primary/10 transition-all duration-300">
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.2
      }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div animate={{
            y: [0, 8, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }} className="w-5 h-8 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-primary rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Highlight Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 bg-card/80 backdrop-blur-sm border-t border-b border-border"
      >
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlightStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-2">
                  {stat.value}
                  {stat.suffix && <span className="text-2xl md:text-3xl">{stat.suffix}</span>}
                </div>
                <div className="text-xs md:text-sm tracking-widest uppercase text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;