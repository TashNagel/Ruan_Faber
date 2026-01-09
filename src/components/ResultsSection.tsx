import { motion } from "framer-motion";
import { Trophy, Medal, Clock, TrendingUp, Calendar, MapPin, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import saFlag from "@/assets/sa-flag.png";
import { 
  allCompetitions, 
  finaProgressionData, 
  teams, 
  upcomingEvents, 
  calculateCareerStats 
} from "@/data/competitionData";

// Convert allCompetitions to championship format for the dropdown
const championships = allCompetitions.slice(0, 8).map(comp => ({
  id: comp.id,
  name: comp.name,
  date: comp.date,
  location: comp.location,
  flag: "za",
  results: comp.results.map(r => {
    const parts = r.event.split(' ');
    const roundTypes = ['Prelims', 'Finals', 'Timed'];
    let event = r.event;
    let round = 'Timed Finals';
    
    for (const rt of roundTypes) {
      if (r.event.includes(rt)) {
        if (r.event.includes('Timed Finals')) {
          event = r.event.replace(' Timed Finals', '');
          round = 'Timed Finals';
        } else if (r.event.includes('Finals')) {
          event = r.event.replace(' Finals', '');
          round = 'Finals';
        } else if (r.event.includes('Prelims')) {
          event = r.event.replace(' Prelims', '');
          round = 'Prelims';
        }
        break;
      }
    }
    
    return {
      event,
      round,
      time: r.time,
      pb: r.pb || false,
      place: r.place
    };
  }).filter(r => !r.event.includes('Extracted') && !r.event.includes('-R') && r.time !== 'DQ' && r.time !== 'NS' && r.time !== 'DNF' && r.time !== 'NT')
}));

interface SpecialtyData {
  name: string;
  value: number;
}

const SpecialtyChart = ({ specialties }: { specialties: SpecialtyData[] }) => {
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
      
      {points.map((point, i) => (
        <circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="4"
          fill="hsl(var(--primary))"
        />
      ))}
      
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

const ProgressionChart = () => {
  const data = finaProgressionData;
  const maxPoints = Math.max(...data.map(d => d.points));
  const minPoints = Math.min(...data.map(d => d.points));
  const range = maxPoints - minPoints || 1;
  
  const width = 280;
  const height = 120;
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  
  const points = data.map((d, i) => ({
    x: padding.left + (i / (data.length - 1)) * chartWidth,
    y: padding.top + ((maxPoints - d.points) / range) * chartHeight * 0.8 + chartHeight * 0.1,
    ...d
  }));
  
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  
  // Y-axis labels
  const yLabels = [maxPoints, Math.round((maxPoints + minPoints) / 2), minPoints];
  
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
      {/* Y-axis labels */}
      {yLabels.map((label, i) => (
        <text
          key={i}
          x={padding.left - 5}
          y={padding.top + (i / 2) * chartHeight}
          textAnchor="end"
          dominantBaseline="middle"
          className="fill-muted-foreground text-[9px]"
        >
          {label}
        </text>
      ))}
      
      {/* Grid lines */}
      {[0, 1, 2].map((i) => (
        <line
          key={i}
          x1={padding.left}
          y1={padding.top + (i / 2) * chartHeight}
          x2={width - padding.right}
          y2={padding.top + (i / 2) * chartHeight}
          stroke="hsl(var(--border))"
          strokeWidth="1"
          opacity="0.3"
        />
      ))}
      
      {/* Area fill */}
      <motion.path
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        d={`${linePath} L ${points[points.length - 1].x} ${height - padding.bottom} L ${points[0].x} ${height - padding.bottom} Z`}
        fill="url(#progressGradient)"
      />
      
      {/* Line */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        d={linePath}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
      />
      
      {/* Points */}
      {points.map((point, i) => (
        <g key={i}>
          <circle
            cx={point.x}
            cy={point.y}
            r="4"
            fill="hsl(var(--primary))"
          />
          <text
            x={point.x}
            y={height - 8}
            textAnchor="middle"
            className="fill-muted-foreground text-[10px]"
          >
            {point.year}
          </text>
        </g>
      ))}
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Sprint vs Distance indicator component
const SprintDistanceBar = ({ sprintPercent }: { sprintPercent: number }) => {
  return (
    <div className="flex items-center gap-4 mt-4">
      <span className="text-sm text-muted-foreground w-12">Sprint</span>
      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${sprintPercent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full bg-primary rounded-full"
        />
      </div>
      <span className="text-sm text-muted-foreground w-16 text-right">Distance</span>
    </div>
  );
};

const FlagIcon = ({ country }: { country: string }) => {
  if (country === "za") {
    return (
      <img 
        src={saFlag} 
        alt="South Africa" 
        className="w-8 h-6 rounded object-cover shadow-sm"
      />
    );
  }
  return null;
};

const ResultsSection = () => {
  const [selectedChampionship, setSelectedChampionship] = useState(championships[0].id);
  const [selectedEvent, setSelectedEvent] = useState<string>("all");
  
  const currentChampionship = championships.find(c => c.id === selectedChampionship) || championships[0];
  
  // Get unique events from current championship
  const uniqueEvents = useMemo(() => {
    const events = new Set(currentChampionship.results.map(r => r.event));
    return Array.from(events);
  }, [currentChampionship]);
  
  // Filter results by selected event
  const filteredResults = useMemo(() => {
    if (selectedEvent === "all") return currentChampionship.results;
    return currentChampionship.results.filter(r => r.event === selectedEvent);
  }, [currentChampionship, selectedEvent]);
  
  // Use the shared calculation function for accurate stats from ALL competitions
  const careerData = useMemo(() => calculateCareerStats(), []);
  
  const { specialties, sprintPercent } = careerData;
  const rankings = careerData.rankings;
  const stats = careerData.stats;

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
            Career Results 2021-2026
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mt-4">
            COMPETITION RESULTS
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Rankings, Specialty & Progression */}
          <div className="space-y-8">
            {/* Current Ranking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card-gradient border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-xl">Rankings</h3>
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-secondary/50 rounded-lg p-3 text-center">
                  <span className="font-display text-2xl text-primary">{rankings.totalEvents}</span>
                  <p className="text-xs text-muted-foreground mt-1">Total Swims</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-3 text-center">
                  <span className="font-display text-2xl text-primary">{rankings.finalsAppearances}</span>
                  <p className="text-xs text-muted-foreground mt-1">Finals</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-3 text-center">
                  <span className="font-display text-2xl text-primary">{rankings.topThreeFinishes}</span>
                  <p className="text-xs text-muted-foreground mt-1">Top 3 Finishes</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-3 text-center">
                  <span className="font-display text-2xl text-primary">{rankings.winRate}%</span>
                  <p className="text-xs text-muted-foreground mt-1">Podium Rate</p>
                </div>
              </div>
              
              {/* Best Events */}
              {rankings.bestEvents.length > 0 && (
                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Top Events</p>
                  <div className="flex flex-wrap gap-2">
                    {rankings.bestEvents.map((event, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary"
                      >
                        <Trophy className="w-3 h-3" />
                        {event}
                      </span>
                    ))}
                  </div>
                </div>
              )}
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
              <SpecialtyChart specialties={specialties} />
              <SprintDistanceBar sprintPercent={sprintPercent} />
            </motion.div>

            {/* Progression Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-card-gradient border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl">Progression</h3>
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <ProgressionChart />
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

          {/* Right Column - Results Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-card-gradient border border-border rounded-xl overflow-hidden"
          >
            <div className="p-6 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FlagIcon country={currentChampionship.flag} />
                  <div>
                    <h3 className="font-display text-xl">{currentChampionship.name}</h3>
                    <p className="text-sm text-muted-foreground">{currentChampionship.date} • {currentChampionship.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Meet</span>
                  <Select value={selectedChampionship} onValueChange={(val) => {
                    setSelectedChampionship(val);
                    setSelectedEvent("all");
                  }}>
                    <SelectTrigger className="w-[220px] bg-secondary border-border">
                      <SelectValue placeholder="Select Meet" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {championships.map(champ => (
                        <SelectItem key={champ.id} value={champ.id}>{champ.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
              <table className="w-full">
                <thead className="sticky top-0 bg-card">
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Event</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Time</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Imp</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Place</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults.map((result, index) => (
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
              <span className="font-display text-3xl text-yellow-400">{stats.first}</span>
            </div>
            <p className="text-sm text-muted-foreground">1st Place</p>
          </div>
          <div className="bg-card-gradient border border-border rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Medal className="w-5 h-5 text-gray-300" />
              <span className="font-display text-3xl text-gray-300">{stats.second}</span>
            </div>
            <p className="text-sm text-muted-foreground">2nd Place</p>
          </div>
          <div className="bg-card-gradient border border-border rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Medal className="w-5 h-5 text-amber-600" />
              <span className="font-display text-3xl text-amber-600">{stats.third}</span>
            </div>
            <p className="text-sm text-muted-foreground">3rd Place</p>
          </div>
          <div className="bg-card-gradient border border-border rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-display text-3xl text-primary">{stats.pbs}</span>
            </div>
            <p className="text-sm text-muted-foreground">Personal Bests</p>
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-primary" />
            <h3 className="font-display text-2xl">Upcoming Events</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card-gradient border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
              >
                <h4 className="font-medium text-foreground mb-2">{event.name}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Clock className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* See All Results Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            to="/results"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            See All Results
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
