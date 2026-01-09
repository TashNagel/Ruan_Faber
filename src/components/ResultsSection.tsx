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

// Championship data - synced with all results data
const championships = [
  {
    id: "nws-2025",
    name: "NWS Championships",
    date: "Dec 6-9, 2025",
    location: "Potchefstroom, NW",
    flag: "za",
    results: [
      { event: "50 Free", round: "Prelims", time: "26.40", pb: false, place: "2nd" },
      { event: "50 Free", round: "Finals", time: "26.26", pb: false, place: "2nd" },
      { event: "100 Free", round: "Prelims", time: "58.55", pb: true, place: "3rd" },
      { event: "100 Free", round: "Finals", time: "59.26", pb: false, place: "4th" },
      { event: "200 Free", round: "Prelims", time: "2:14.39", pb: false, place: "5th" },
      { event: "200 Free", round: "Finals", time: "2:18.57", pb: false, place: "7th" },
      { event: "400 Free", round: "Timed Finals", time: "4:58.01", pb: true, place: "6th" },
      { event: "50 Back", round: "Prelims", time: "30.08", pb: true, place: "1st" },
      { event: "50 Back", round: "Finals", time: "30.85", pb: false, place: "2nd" },
      { event: "100 Back", round: "Prelims", time: "1:07.60", pb: false, place: "3rd" },
      { event: "100 Back", round: "Finals", time: "1:08.00", pb: false, place: "3rd" },
      { event: "200 Back", round: "Prelims", time: "2:35.79", pb: false, place: "3rd" },
      { event: "200 Back", round: "Finals", time: "2:36.36", pb: false, place: "3rd" },
      { event: "50 Breast", round: "Prelims", time: "34.17", pb: true, place: "3rd" },
      { event: "50 Breast", round: "Finals", time: "35.87", pb: false, place: "5th" },
      { event: "100 Breast", round: "Timed Finals", time: "1:22.28", pb: false, place: "7th" },
      { event: "200 Breast", round: "Prelims", time: "3:09.24", pb: true, place: "3rd" },
      { event: "50 Fly", round: "Timed Finals", time: "27.84", pb: false, place: "2nd" },
      { event: "100 Fly", round: "Prelims", time: "1:04.86", pb: false, place: "3rd" },
      { event: "100 Fly", round: "Finals", time: "1:05.56", pb: false, place: "3rd" },
      { event: "200 IM", round: "Timed Finals", time: "2:34.40", pb: false, place: "4th" },
      { event: "400 IM", round: "Timed Finals", time: "5:36.16", pb: false, place: "1st" },
    ]
  },
  {
    id: "nw-short-course-2025",
    name: "NW Short Course Championships",
    date: "Oct 4-6, 2025",
    location: "Phokeng, NW",
    flag: "za",
    results: [
      { event: "50 Free", round: "Prelims", time: "25.85", pb: true, place: "2nd" },
      { event: "50 Free", round: "Finals", time: "26.01", pb: true, place: "2nd" },
      { event: "100 Free", round: "Prelims", time: "57.82", pb: true, place: "3rd" },
      { event: "100 Free", round: "Finals", time: "58.19", pb: true, place: "3rd" },
      { event: "200 Free", round: "Timed Finals", time: "2:13.53", pb: false, place: "3rd" },
      { event: "50 Back", round: "Prelims", time: "29.89", pb: true, place: "2nd" },
      { event: "50 Back", round: "Finals", time: "30.44", pb: true, place: "3rd" },
      { event: "100 Back", round: "Prelims", time: "1:05.10", pb: true, place: "2nd" },
      { event: "100 Back", round: "Finals", time: "1:06.93", pb: true, place: "3rd" },
      { event: "200 Back", round: "Timed Finals", time: "2:33.14", pb: false, place: "3rd" },
      { event: "50 Breast", round: "Prelims", time: "33.13", pb: true, place: "1st" },
      { event: "50 Breast", round: "Finals", time: "33.29", pb: true, place: "1st" },
      { event: "100 Breast", round: "Prelims", time: "1:14.71", pb: true, place: "2nd" },
      { event: "100 Breast", round: "Finals", time: "1:16.57", pb: true, place: "3rd" },
      { event: "50 Fly", round: "Prelims", time: "27.75", pb: true, place: "1st" },
      { event: "50 Fly", round: "Finals", time: "27.52", pb: true, place: "1st" },
      { event: "100 Fly", round: "Prelims", time: "1:01.45", pb: true, place: "1st" },
      { event: "100 Fly", round: "Finals", time: "1:03.04", pb: true, place: "3rd" },
      { event: "100 IM", round: "Prelims", time: "1:06.45", pb: true, place: "1st" },
      { event: "100 IM", round: "Finals", time: "1:04.44", pb: true, place: "3rd" },
      { event: "200 IM", round: "Timed Finals", time: "2:29.48", pb: true, place: "3rd" },
    ]
  },
  {
    id: "sa-schools-2025",
    name: "SA Schools Championship",
    date: "Apr 5-7, 2025",
    location: "Bloemfontein, FS",
    flag: "za",
    results: [
      { event: "50 Back", round: "Prelims", time: "30.60", pb: false, place: "9th" },
      { event: "50 Back", round: "Finals", time: "30.58", pb: false, place: "8th" },
      { event: "100 Back", round: "Prelims", time: "1:06.59", pb: false, place: "5th" },
      { event: "100 Back", round: "Finals", time: "1:08.36", pb: false, place: "9th" },
      { event: "50 Fly", round: "Prelims", time: "27.73", pb: true, place: "3rd" },
      { event: "50 Fly", round: "Finals", time: "27.58", pb: true, place: "4th" },
      { event: "100 Fly", round: "Prelims", time: "1:05.50", pb: true, place: "6th" },
      { event: "100 Fly", round: "Finals", time: "1:04.69", pb: true, place: "5th" },
    ]
  },
  {
    id: "sa-level-3-regional-2025",
    name: "SA Level 3 Regional Age Group",
    date: "Mar 20-23, 2025",
    location: "NTS, GP",
    flag: "za",
    results: [
      { event: "50 Free", round: "Prelims", time: "26.23", pb: true, place: "2nd" },
      { event: "50 Free", round: "Finals", time: "26.09", pb: true, place: "3rd" },
      { event: "100 Free", round: "Prelims", time: "58.97", pb: true, place: "8th" },
      { event: "100 Free", round: "Finals", time: "59.16", pb: true, place: "8th" },
      { event: "200 Free", round: "Prelims", time: "2:16.09", pb: false, place: "9th" },
      { event: "200 Free", round: "Finals", time: "2:14.36", pb: true, place: "7th" },
      { event: "50 Back", round: "Prelims", time: "30.34", pb: true, place: "2nd" },
      { event: "50 Back", round: "Finals", time: "30.86", pb: true, place: "2nd" },
      { event: "100 Back", round: "Prelims", time: "1:06.87", pb: true, place: "2nd" },
      { event: "100 Back", round: "Finals", time: "1:06.54", pb: true, place: "1st" },
      { event: "200 Back", round: "Prelims", time: "2:37.51", pb: false, place: "8th" },
      { event: "50 Breast", round: "Prelims", time: "34.79", pb: true, place: "9th" },
      { event: "50 Breast", round: "Finals", time: "34.61", pb: true, place: "9th" },
      { event: "50 Fly", round: "Prelims", time: "28.19", pb: true, place: "4th" },
      { event: "50 Fly", round: "Finals", time: "28.40", pb: true, place: "4th" },
      { event: "100 Fly", round: "Prelims", time: "1:05.73", pb: false, place: "5th" },
      { event: "100 Fly", round: "Finals", time: "1:06.31", pb: false, place: "4th" },
    ]
  },
  {
    id: "cga-summer-gala-2025",
    name: "CGA Summer Gala #4 Level",
    date: "Jan 25, 2025",
    location: "RSA",
    flag: "za",
    results: [
      { event: "200 Free", round: "Timed Finals", time: "2:16.66", pb: false, place: "2nd" },
      { event: "100 Breast", round: "Timed Finals", time: "1:19.91", pb: true, place: "5th" },
      { event: "50 Fly", round: "Timed Finals", time: "28.75", pb: false, place: "1st" },
      { event: "100 Fly", round: "Timed Finals", time: "1:05.51", pb: true, place: "1st" },
    ]
  },
  {
    id: "nws-championships-2024",
    name: "NWS Championships 2024",
    date: "Dec 7-10, 2024",
    location: "Potchefstroom, NW",
    flag: "za",
    results: [
      { event: "50 Free", round: "Prelims", time: "27.28", pb: true, place: "2nd" },
      { event: "50 Free", round: "Finals", time: "27.38", pb: true, place: "2nd" },
      { event: "100 Free", round: "Prelims", time: "1:00.71", pb: false, place: "2nd" },
      { event: "100 Free", round: "Finals", time: "59.36", pb: true, place: "2nd" },
      { event: "200 Free", round: "Prelims", time: "2:16.52", pb: false, place: "3rd" },
      { event: "200 Free", round: "Finals", time: "2:15.36", pb: false, place: "3rd" },
      { event: "50 Back", round: "Timed Finals", time: "30.87", pb: true, place: "1st" },
      { event: "100 Back", round: "Prelims", time: "1:08.71", pb: true, place: "1st" },
      { event: "100 Back", round: "Finals", time: "1:08.12", pb: true, place: "1st" },
      { event: "200 Back", round: "Prelims", time: "2:35.98", pb: false, place: "1st" },
      { event: "200 Back", round: "Finals", time: "2:32.44", pb: false, place: "1st" },
      { event: "50 Breast", round: "Prelims", time: "35.09", pb: true, place: "2nd" },
      { event: "50 Breast", round: "Finals", time: "35.71", pb: true, place: "2nd" },
      { event: "100 Breast", round: "Prelims", time: "1:22.47", pb: true, place: "3rd" },
      { event: "100 Breast", round: "Finals", time: "1:22.33", pb: true, place: "4th" },
      { event: "50 Fly", round: "Prelims", time: "28.61", pb: true, place: "2nd" },
      { event: "50 Fly", round: "Finals", time: "28.74", pb: true, place: "2nd" },
      { event: "100 Fly", round: "Timed Finals", time: "1:07.34", pb: true, place: "1st" },
      { event: "200 IM", round: "Prelims", time: "2:37.30", pb: false, place: "3rd" },
      { event: "200 IM", round: "Finals", time: "2:31.86", pb: false, place: "2nd" },
    ]
  },
];

const upcomingEvents = [
  { name: "NW Age Group Champs", date: "Jan 20-22, 2026", location: "Klerksdorp, NW" },
  { name: "SA Junior Nationals", date: "Mar 5-8, 2026", location: "Cape Town, WC" },
  { name: "Africa Youth Games", date: "Apr 12-15, 2026", location: "Lagos, Nigeria" },
];

const teams = [
  { name: "Swim Star Aquatics Rtb", location: "Rustenburg, NW" },
  { name: "Northwest Schools", location: "NW, RSA" },
  { name: "North West University Swim Club", location: "Noordbrug, NW" },
  { name: "Fields College", location: "NW, RSA" },
  { name: "North West Swimming", location: "NW, RSA" },
];

// FINA points progression (overall performance indicator based on all competitions)
const finaProgressionData = [
  { year: "2023", points: 350 },
  { year: "2024", points: 420 },
  { year: "2025", points: 495 },
];

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
      <div className="w-8 h-6 rounded overflow-hidden flex flex-col">
        <div className="h-1/3 bg-[hsl(0,65%,45%)]" />
        <div className="h-1/3 bg-white flex items-center justify-center">
          <div className="w-3 h-2 bg-[hsl(120,50%,30%)] flex items-center justify-center">
            <div className="w-1 h-1 bg-[hsl(50,85%,50%)]" />
          </div>
        </div>
        <div className="h-1/3 bg-[hsl(220,70%,35%)]" />
      </div>
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
  
  // Calculate specialties from ALL championship results
  const { specialties, sprintPercent } = useMemo(() => {
    const strokeScores: Record<string, number[]> = {
      Free: [],
      Back: [],
      Breast: [],
      Fly: [],
      IM: []
    };
    
    let sprintCount = 0;
    let distanceCount = 0;
    
    // Aggregate from ALL competitions
    championships.forEach(champ => {
      champ.results.forEach(result => {
        const placeNum = parseInt(result.place) || 8;
        const score = Math.max(0, 100 - (placeNum - 1) * 12);
        
        if (result.event.includes("Free")) strokeScores.Free.push(score);
        else if (result.event.includes("Back")) strokeScores.Back.push(score);
        else if (result.event.includes("Breast")) strokeScores.Breast.push(score);
        else if (result.event.includes("Fly")) strokeScores.Fly.push(score);
        else if (result.event.includes("IM")) strokeScores.IM.push(score);
        
        // Determine sprint vs distance
        const distance = parseInt(result.event) || 50;
        if (distance <= 100) {
          sprintCount++;
        } else {
          distanceCount++;
        }
      });
    });
    
    const totalEvents = sprintCount + distanceCount;
    const sprintPct = totalEvents > 0 ? Math.round((sprintCount / totalEvents) * 100) : 50;
    
    return {
      specialties: Object.entries(strokeScores).map(([name, scores]) => ({
        name,
        value: scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0
      })).filter(s => s.value > 0),
      sprintPercent: sprintPct
    };
  }, []);
  
  // Calculate rankings based on results
  const rankings = useMemo(() => {
    const results = currentChampionship.results;
    const avgPlace = results.reduce((sum, r) => {
      const place = parseInt(r.place) || 8;
      return sum + place;
    }, 0) / results.length;
    
    return {
      position: avgPlace <= 2 ? 1 : avgPlace <= 3 ? 2 : avgPlace <= 4 ? 3 : 4,
      team: teams[0].name
    };
  }, [currentChampionship]);
  
  // Calculate stats
  const stats = useMemo(() => {
    const results = currentChampionship.results;
    return {
      first: results.filter(r => r.place === "1st").length,
      second: results.filter(r => r.place === "2nd").length,
      third: results.filter(r => r.place === "3rd").length,
      pbs: results.filter(r => r.pb).length
    };
  }, [currentChampionship]);

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
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl">Rankings</h3>
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                  <span className="font-display text-xl text-primary">{rankings.position}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{rankings.team}</p>
                  <p className="text-sm text-muted-foreground">{currentChampionship.name}</p>
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
