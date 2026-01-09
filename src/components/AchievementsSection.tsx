import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "NWS Champion",
    event: "400 IM",
    year: "2025",
    location: "NWS Championships, Potchefstroom",
    time: "5:36.16",
  },
  {
    icon: Trophy,
    title: "Provincial Champion",
    event: "100 Back",
    year: "2025",
    location: "SA Level 3 Regional Age Group, NTS",
    time: "1:06.54",
  },
  {
    icon: Medal,
    title: "NW Short Course Champion",
    event: "50 Fly",
    year: "2025",
    location: "NW Short Course Championships, Phokeng",
    time: "27.52",
  },
  {
    icon: Star,
    title: "SA Schools Finalist",
    event: "50 Fly",
    year: "2025",
    location: "SA Schools Championship, Bloemfontein",
    time: "27.58",
  },
  {
    icon: Trophy,
    title: "NWS Champion",
    event: "100 Back & 200 Back",
    year: "2024",
    location: "NWS Championships, Potchefstroom",
    time: "1:08.12 / 2:32.44",
  },
  {
    icon: Award,
    title: "Provincial Medalist",
    event: "50 Back",
    year: "2024",
    location: "NWS Championships, Potchefstroom",
    time: "30.87",
  },
  {
    icon: Medal,
    title: "Age Group Champion",
    event: "100 Fly",
    year: "2024",
    location: "NWS Championships, Potchefstroom",
    time: "1:07.34",
  },
  {
    icon: Star,
    title: "Multi-Event Finalist",
    event: "50 Free, 100 Free, 200 IM",
    year: "2024",
    location: "NWS Championships",
    time: "Multiple PBs",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-widest uppercase font-medium">
            Career Highlights
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mt-4">
            ACHIEVEMENTS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title + achievement.event}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card-gradient border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
              
              <div className="relative flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <achievement.icon className="w-7 h-7 text-primary" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl text-foreground">
                      {achievement.title}
                    </h3>
                    <span className="text-primary font-mono text-lg font-semibold">
                      {achievement.time}
                    </span>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-3">
                    {achievement.event}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {achievement.year}
                    </span>
                    <span>{achievement.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
