import { motion } from "framer-motion";

const stats = [
  { value: "40", label: "Gold Medals", suffix: "+" },
  { value: "11", label: "Years Swimming", suffix: "" },
  { value: "27.08", label: "50m Freestyle PR", suffix: "s" },
  { value: "2025", label: "SA Schools Team", suffix: "" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-card-gradient border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-5xl md:text-6xl lg:text-7xl text-gradient mb-2">
                {stat.value}
                <span className="text-3xl md:text-4xl">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
