import { motion } from "framer-motion";
import { Trophy, Medal, Clock, TrendingUp } from "lucide-react";

const competitionResults = [
  { event: "50 L Free", round: "Finals", time: "26.26", pb: false, place: "2nd" },
  { event: "50 L Free", round: "Prelims", time: "26.40", pb: false, place: "2nd" },
  { event: "100 L Free", round: "Finals", time: "59.26", pb: false, place: "4th" },
  { event: "100 L Free", round: "Prelims", time: "58.55", pb: true, place: "3rd" },
  { event: "200 L Free", round: "Finals", time: "2:18.57", pb: false, place: "7th" },
  { event: "200 L Free", round: "Prelims", time: "2:14.39", pb: false, place: "5th" },
  { event: "400 L Free", round: "Timed Finals", time: "4:58.01", pb: true, place: "6th" },
  { event: "50 L Back", round: "Finals", time: "30.85", pb: false, place: "2nd" },
  { event: "50 L Back", round: "Prelims", time: "30.08", pb: true, place: "1st" },
  { event: "100 L Back", round: "Finals", time: "1:08.00", pb: false, place: "3rd" },
  { event: "100 L Back", round: "Prelims", time: "1:07.60", pb: false, place: "3rd" },
  { event: "200 L Back", round: "Finals", time: "2:36.36", pb: false, place: "3rd" },
  { event: "200 L Back", round: "Prelims", time: "2:35.79", pb: false, place: "2nd" },
  { event: "50 L Breast", round: "Finals", time: "35.87", pb: false, place: "5th" },
  { event: "50 L Breast", round: "Prelims", time: "34.17", pb: true, place: "3rd" },
  { event: "100 L Breast", round: "Timed Finals", time: "1:22.28", pb: false, place: "7th" },
  { event: "200 L Breast", round: "Prelims", time: "3:09.24", pb: true, place: "3rd" },
  { event: "50 L Fly", round: "Timed Finals", time: "27.84", pb: false, place: "2nd" },
  { event: "100 L Fly", round: "Finals", time: "1:05.56", pb: false, place: "3rd" },
  { event: "100 L Fly", round: "Prelims", time: "1:04.86", pb: false, place: "3rd" },
  { event: "200 L IM", round: "Timed Finals", time: "2:34.40", pb: false, place: "4th" },
  { event: "400 L IM", round: "Timed Finals", time: "5:36.16", pb: false, place: "1st" },
];

const teams = [
  { name: "Swim Star Aquatics Rtb", location: "Rustenburg, NW" },
  { name: "Northwest Schools", location: "NW, RSA" },
  { name: "North West University Swim Club", location: "Noordburg, NW" },
];

const specialties = [
  { name: "Free", value: 90 },
  { name: "Back", value: 85 },
  { name: "Breast", value: 60 },
  { name: "Fly", value: 75 },
  { name: "IM", value: 80 },
];

const SpecialtyChart = () => {
  const centerX = 100;
  const centerY = 100;
  const radius = 70;
  const numPoints = specialties.length;
  
  const getPoint = (index: number, value: number) => {
    const angle = (index * 2 * Math.PI) / numPoints - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
    };
  };

  const getLabelPoint = (index: number) => {
    const angle = (index * 2 * Math.PI) / numPoints - Math.PI / 2;
    const r = radius + 20;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
    };
  };

  const points = specialties.map((s, i) => getPoint(i, s.value));
  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-[200px] mx-auto">
      {/* Grid circles */}
      {[20, 40, 60, 80, 100].map((percent) => (
        <circle
          key={percent}
          cx={centerX}
          cy={centerY}
          r={(percent / 100) * radius}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          opacity="0.5"
        />
      ))}
      
      {/* Grid lines */}
      {specialties.map((_, i) => {
        const point = getPoint(i, 100);
        return (
          <line
            key={i}
            x1={centerX}
            y1={centerY}
            x2={point.x}
            y2={point.y}
            stroke="hsl(var(--border))"
            strokeWidth="1"
            opacity="0.5"
          />
        );
      })}
      
      {/* Data polygon */}
      <motion.path
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        d={pathData}
        fill="hsl(var(--primary) / 0.3)"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
      />
      
      {/* Data points */}
      {points.map((point, i) => (
        <circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="4"
          fill="hsl(var(--primary))"
        />
      ))}
      
      {/* Labels */}
      {specialties.map((s, i) => {
        const labelPoint = getLabelPoint(i);
        return (
          <text
            key={s.name}
            x={labelPoint.x}
            y={labelPoint.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-foreground text-xs font-medium"
          >
            {s.name}
          </text>
        );
      })}
    </svg>
  );
};

const ResultsSection = () => {
  const topResults = competitionResults.filter(r => 
    r.place === "1st" || r.place === "2nd" || r.pb
  ).slice(0, 8);

  return (
    <section id="results" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-widest uppercase font-medium">
            Season 2025-2026
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mt-4">
            COMPETITION RESULTS
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Rankings & Specialty */}
          <div className="space-y-8">
            {/* Current Ranking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card-gradient border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl">Rankings</h3>
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                  <span className="font-display text-xl text-primary">1</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Swim Star Aquatics Rtb</p>
                  <p className="text-sm text-muted-foreground">Season 2025-2026</p>
                </div>
              </div>
            </motion.div>

            {/* Specialty Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card-gradient border border-border rounded-xl p-6"
            >
              <h3 className="font-display text-xl mb-6 text-center">Specialty</h3>
              <SpecialtyChart />
              <div className="flex justify-center gap-8 mt-4 text-sm text-muted-foreground">
                <span>Sprint</span>
                <span>Distance</span>
              </div>
            </motion.div>

            {/* Teams */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card-gradient border border-border rounded-xl p-6"
            >
              <h3 className="font-display text-xl mb-4">Teams</h3>
              <div className="space-y-4">
                {teams.map((team, index) => (
                  <div key={team.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-xs font-medium text-muted-foreground">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-primary text-sm">{team.name}</p>
                      <p className="text-xs text-muted-foreground">{team.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Latest Results Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-card-gradient border border-border rounded-xl overflow-hidden"
          >
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-6 rounded overflow-hidden flex flex-col">
                    <div className="h-1/3 bg-[hsl(0,65%,45%)]" />
                    <div className="h-1/3 bg-white flex items-center justify-center">
                      <div className="w-3 h-2 bg-[hsl(120,50%,30%)] flex items-center justify-center">
                        <div className="w-1 h-1 bg-[hsl(50,85%,50%)]" />
                      </div>
                    </div>
                    <div className="h-1/3 bg-[hsl(220,70%,35%)]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">NWS Championships</h3>
                    <p className="text-sm text-muted-foreground">Dec 6-9, 2025</p>
                  </div>
                </div>
                <Medal className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Event</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Time</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Imp</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Place</th>
                  </tr>
                </thead>
                <tbody>
                  {competitionResults.map((result, index) => (
                    <motion.tr
                      key={`${result.event}-${result.round}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                    >
                      <td className="py-3 px-4">
                        <span className="font-medium text-foreground">{result.event}</span>
                        <span className="text-muted-foreground ml-2">{result.round}</span>
                      </td>
                      <td className="text-right py-3 px-4">
                        <span className="text-primary font-mono">{result.time}</span>
                      </td>
                      <td className="text-center py-3 px-4">
                        {result.pb && (
                          <span className="inline-flex items-center justify-center w-8 h-6 text-xs font-bold bg-primary/20 text-primary rounded">
                            PB
                          </span>
                        )}
                      </td>
                      <td className="text-right py-3 px-4">
                        <span className={`font-medium ${
                          result.place === "1st" ? "text-yellow-400" :
                          result.place === "2nd" ? "text-gray-300" :
                          result.place === "3rd" ? "text-amber-600" :
                          "text-muted-foreground"
                        }`}>
                          {result.place}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-card-gradient border border-border rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="font-display text-3xl text-yellow-400">2</span>
            </div>
            <p className="text-sm text-muted-foreground">1st Place</p>
          </div>
          <div className="bg-card-gradient border border-border rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Medal className="w-5 h-5 text-gray-300" />
              <span className="font-display text-3xl text-gray-300">5</span>
            </div>
            <p className="text-sm text-muted-foreground">2nd Place</p>
          </div>
          <div className="bg-card-gradient border border-border rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Medal className="w-5 h-5 text-amber-600" />
              <span className="font-display text-3xl text-amber-600">8</span>
            </div>
            <p className="text-sm text-muted-foreground">3rd Place</p>
          </div>
          <div className="bg-card-gradient border border-border rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-display text-3xl text-primary">6</span>
            </div>
            <p className="text-sm text-muted-foreground">Personal Bests</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
