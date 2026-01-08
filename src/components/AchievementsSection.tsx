import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Olympic Gold",
    event: "100m Freestyle",
    year: "2024",
    location: "Paris Olympics",
    time: "45.82s",
  },
  {
    icon: Medal,
    title: "World Champion",
    event: "200m Freestyle",
    year: "2023",
    location: "World Championships",
    time: "1:42.15",
  },
  {
    icon: Star,
    title: "World Record",
    event: "4x100m Relay",
    year: "2024",
    location: "Paris Olympics",
    time: "2:58.33",
  },
  {
    icon: Award,
    title: "National Champion",
    event: "50m Freestyle",
    year: "2023",
    location: "National Championships",
    time: "20.91s",
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
