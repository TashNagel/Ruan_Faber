import { motion } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// Records data by season
const recordsData = [
  {
    season: "Season 2025-2026",
    categories: [
      {
        name: "RSA Club (Open)",
        score: "505.50",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      },
      {
        name: "RSA Club (15 - 18)",
        score: "505.50",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      }
    ]
  },
  {
    season: "Season 2024-2025",
    categories: [
      {
        name: "RSA Club (Open)",
        score: "500.40",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      },
      {
        name: "RSA Club (15 - 18)",
        score: "500.40",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      },
      {
        name: "RSA High School",
        score: "487.30",
        rankings: [
          { name: "Northwest Schools", place: "7th" }
        ]
      }
    ]
  },
  {
    season: "Season 2023-2024",
    categories: [
      {
        name: "RSA Club (Open)",
        score: "446.00",
        rankings: [
          { name: "North West Swimming", place: "19th" },
          { name: "North West University Swim Club", place: "19th" },
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      },
      {
        name: "RSA Club (15 - 18)",
        score: "419.10",
        rankings: [
          { name: "North West University Swim Club", place: "13th" }
        ]
      },
      {
        name: "RSA Club (13 - 14)",
        score: "446.00",
        rankings: [
          { name: "North West Swimming", place: "5th" },
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      },
      {
        name: "RSA High School",
        score: "433.00",
        rankings: [
          { name: "Fields College", place: "1st" }
        ]
      }
    ]
  },
  {
    season: "Season 2021-2022",
    categories: [
      {
        name: "RSA Club (Open)",
        score: "350.30",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      },
      {
        name: "RSA Club (13 - 14)",
        score: "350.30",
        rankings: [
          { name: "North West University Swim Club", place: "8th" },
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      }
    ]
  }
];

// All competitions data
const allCompetitions = [
  {
    id: "nws-2025",
    name: "NWS Championships",
    status: "Completed",
    date: "Dec 6-9, 2025",
    location: "Potchefstroom, NW, RSA",
    year: "2025",
    results: [
      { event: "50 L Fly", time: "27.84", imp: null, place: "2nd" },
      { event: "50 L Free", time: "26.26", imp: null, place: "2nd" },
      { event: "100 L Free", time: "58.55", imp: null, place: "3rd" },
    ]
  },
  {
    id: "nws-age-group-2",
    name: "NWS Age Group 2",
    status: "Completed",
    date: "Oct 19, 2025",
    location: "Phokeng, NW, RSA",
    year: "2025",
    results: [
      { event: "50 S Fly", time: "27.49", imp: "-0.03", place: "1st" },
      { event: "100 S Free", time: "58.69", imp: "+0.87", place: "2nd" },
      { event: "50 S Back", time: "29.92", imp: "+0.03", place: "1st" },
    ]
  },
  {
    id: "nws-age-group-1-2025",
    name: "NWS Age Group 1 2025",
    status: "Completed",
    date: "Oct 18, 2025",
    location: "Phokeng, NW, RSA",
    year: "2025",
    results: [
      { event: "50 S Free", time: "26.24", imp: "+0.39", place: "1st" },
      { event: "100 S Fly", time: "1:03.05", imp: "+1.60", place: "1st" },
      { event: "100 S Breast", time: "1:17.03", imp: "+2.32", place: "2nd" },
    ]
  },
  {
    id: "nw-short-course",
    name: "NW Short Course Championships",
    status: "Completed",
    date: "Oct 4-6, 2025",
    location: "Phokeng, NW, RSA",
    year: "2025",
    results: [
      { event: "100 S Fly", time: "1:01.45", imp: null, place: "1st" },
      { event: "100 S Free", time: "57.82", imp: null, place: "3rd" },
      { event: "50 S Fly", time: "27.52", imp: null, place: "1st" },
    ]
  },
  {
    id: "sa-schools-2025",
    name: "SA Schools Championship",
    status: "Completed",
    date: "Apr 5-7, 2025",
    location: "Bloemfontein, FS, RSA",
    year: "2025",
    results: [
      { event: "50 L Fly", time: "27.58", imp: "-0.61", place: "4th" },
      { event: "100 L Back", time: "1:06.59", imp: "+0.05", place: "5th" },
      { event: "50 L Back", time: "30.58", imp: "+0.24", place: "8th" },
    ]
  },
  {
    id: "sa-level-3-regional",
    name: "SA Level 3 Regional Age Group",
    status: "Completed",
    date: "Mar 20-23, 2025",
    location: "NTS, GP, RSA",
    year: "2025",
    results: [
      { event: "50 L Free", time: "26.09", imp: "-1.19", place: "3rd" },
      { event: "50 L Fly", time: "28.19", imp: "-0.42", place: "4th" },
      { event: "100 L Free", time: "58.97", imp: "-0.39", place: "8th" },
    ]
  },
  {
    id: "cga-summer-gala",
    name: "CGA Summer Gala #4 Level",
    status: "Completed",
    date: "Jan 25, 2025",
    location: "RSA",
    year: "2025",
    results: [
      { event: "50 L Fly", time: "28.75", imp: "+0.14", place: "1st" },
      { event: "100 L Fly", time: "1:05.51", imp: "-1.83", place: "1st" },
      { event: "200 L Free", time: "2:16.66", imp: "+1.30", place: "2nd" },
    ]
  },
  {
    id: "nws-championships-2024",
    name: "NWS Championships",
    status: "Completed",
    date: "Dec 7-10, 2024",
    location: "Potchefstroom, NW, RSA",
    year: "2024",
    results: [
      { event: "100 L Free", time: "59.36", imp: "-0.87", place: "2nd" },
      { event: "50 L Fly", time: "28.61", imp: "-0.42", place: "2nd" },
      { event: "50 L Free", time: "27.28", imp: "-0.18", place: "2nd" },
    ]
  },
  {
    id: "nws-age-group-3-4",
    name: "NWS Age Group 3 + 4",
    status: "Completed",
    date: "Nov 23-24, 2024",
    location: "Potchefstroom, NW, RSA",
    year: "2024",
    results: [
      { event: "100 L Free", time: "1:00.23", imp: null, place: "2nd" },
      { event: "50 L Fly", time: "29.03", imp: null, place: "2nd" },
      { event: "50 L Free", time: "27.46", imp: null, place: "1st" },
    ]
  },
  {
    id: "sa-regional-aquatic-2022",
    name: "SA Regional Aquatic Champs 2022",
    status: "Completed",
    date: "Mar 29-Apr 2, 2022",
    location: "Pretoria, AG, RSA",
    year: "2022",
    results: [
      { event: "50 Free Prelims", time: "DQ", imp: null, place: "-" },
      { event: "100 Free Prelims", time: "1:07.13", imp: null, place: "13th" },
      { event: "200 Free Prelims", time: "2:27.03", imp: "-4.94", place: "75th" },
      { event: "400 Free Timed Finals", time: "5:20.48", imp: null, place: "8th" },
      { event: "50 Back Prelims", time: "35.02", imp: "-44.94", place: "6th" },
      { event: "50 Back Finals", time: "34.94", imp: "-45.02", place: "8th" },
      { event: "100 Back Prelims", time: "1:17.95", imp: "-0.25", place: "16th" },
      { event: "200 Back Prelims", time: "2:47.62", imp: "-3.32", place: "12th" },
      { event: "50 Fly Prelims", time: "31.11", imp: null, place: "2nd" },
      { event: "50 Fly Finals", time: "31.04", imp: null, place: "4th" },
      { event: "100 Fly Prelims", time: "1:12.69", imp: "-0.84", place: "4th" },
      { event: "100 Fly Finals", time: "1:12.24", imp: "-1.29", place: "4th" },
      { event: "200 IM Prelims", time: "2:48.42", imp: "+1.87", place: "8th" },
      { event: "200 IM Finals", time: "2:46.43", imp: "-0.12", place: "6th" },
    ]
  },
  {
    id: "sa-schools-2022",
    name: "SA Schools Swimming Championships",
    status: "Completed",
    date: "Mar 26-28, 2022",
    location: "Tshwane, RSA",
    year: "2022",
    results: [
      { event: "200 L IM", time: "2:46.55", imp: null, place: "5th" },
      { event: "100 L Fly", time: "1:13.53", imp: null, place: "6th" },
      { event: "200 L Free", time: "2:31.97", imp: null, place: "10th" },
      { event: "100 Back Prelims", time: "1:18.20", imp: null, place: "6th" },
      { event: "100 Back Finals", time: "1:18.37", imp: null, place: "6th" },
      { event: "200 Back Prelims", time: "2:53.67", imp: null, place: "6th" },
      { event: "200 Back Finals", time: "2:50.94", imp: null, place: "7th" },
      { event: "100 Fly Prelims", time: "1:13.82", imp: null, place: "5th" },
      { event: "100 Fly Finals", time: "1:13.53", imp: null, place: "6th" },
      { event: "200 IM Prelims", time: "2:47.30", imp: null, place: "4th" },
      { event: "200 IM Finals", time: "2:46.55", imp: null, place: "5th" },
      { event: "200 FR-R (Split) Timed Finals", time: "NT", imp: null, place: "5th" },
      { event: "400 FR-R (Split) Timed Finals", time: "1:07.16", imp: null, place: "3rd" },
      { event: "200 MED-R (Leadoff) Timed Finals", time: "NT", imp: null, place: "3rd" },
      { event: "400 MED-R (Extracted) Timed Finals", time: "1:19.96", imp: null, place: "3rd" },
      { event: "400 MED-R (Leadoff) Timed Finals", time: "1:19.96", imp: null, place: "3rd" },
    ]
  },
];

const SouthAfricanFlag = () => (
  <div className="w-8 h-6 rounded overflow-hidden flex flex-col shrink-0">
    <div className="h-1/3 bg-[hsl(0,65%,45%)]" />
    <div className="h-1/3 bg-white flex items-center justify-center">
      <div className="w-3 h-2 bg-[hsl(120,50%,30%)] flex items-center justify-center">
        <div className="w-1 h-1 bg-[hsl(50,85%,50%)]" />
      </div>
    </div>
    <div className="h-1/3 bg-[hsl(220,70%,35%)]" />
  </div>
);

const CompetitionCard = ({ competition }: { competition: typeof allCompetitions[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
  >
    <div className="p-4 border-b border-border">
      <div className="flex items-start gap-3">
        <SouthAfricanFlag />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm truncate">{competition.name}</h3>
          <p className="text-xs text-muted-foreground">
            <span className="text-primary">{competition.status}</span> • {competition.date}
          </p>
          <p className="text-xs text-muted-foreground truncate">{competition.location}</p>
        </div>
      </div>
    </div>
    
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/50">
            <th className="text-left py-2 px-3 text-xs font-medium text-muted-foreground">Event</th>
            <th className="text-right py-2 px-3 text-xs font-medium text-muted-foreground">Time</th>
            <th className="text-right py-2 px-3 text-xs font-medium text-muted-foreground">Imp</th>
            <th className="text-right py-2 px-3 text-xs font-medium text-muted-foreground">Place</th>
          </tr>
        </thead>
        <tbody>
          {competition.results.map((result, index) => (
            <tr key={index} className="border-b border-border/30 last:border-0">
              <td className="py-2 px-3 text-muted-foreground">{result.event}</td>
              <td className="text-right py-2 px-3">
                <span className="text-primary font-mono">{result.time}</span>
              </td>
              <td className="text-right py-2 px-3">
                {result.imp ? (
                  <span className={`font-mono ${
                    result.imp.startsWith('-') ? 'text-green-500' : 
                    result.imp.startsWith('+') ? 'text-amber-500' : 
                    'text-muted-foreground'
                  }`}>
                    {result.imp}
                  </span>
                ) : (
                  <span className="text-muted-foreground">–</span>
                )}
              </td>
              <td className="text-right py-2 px-3">
                <span className={`font-medium ${
                  result.place === "1st" ? "text-yellow-400" :
                  result.place === "2nd" ? "text-gray-300" :
                  result.place === "3rd" ? "text-amber-600" :
                  "text-muted-foreground"
                }`}>
                  {result.place}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

const Results = () => {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const years = useMemo(() => {
    const uniqueYears = [...new Set(allCompetitions.map(c => c.year))];
    return uniqueYears.sort((a, b) => b.localeCompare(a));
  }, []);

  const filteredCompetitions = useMemo(() => {
    return allCompetitions.filter(comp => {
      const matchesYear = selectedYear === "all" || comp.year === selectedYear;
      const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           comp.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesYear && matchesSearch;
    });
  }, [selectedYear, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-display text-2xl tracking-wider">
              <span className="text-foreground">RUAN</span>
              <span className="text-primary">.</span>
            </Link>
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-2">ALL RESULTS</h1>
          <p className="text-muted-foreground">
            Complete competition history and performance records
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Year</span>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[120px] bg-card border-border">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="all">All</SelectItem>
                {years.map(year => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2 flex-1 max-w-xs">
            <span className="text-sm text-muted-foreground">Name</span>
            <div className="relative flex-1">
              <Input
                placeholder="Search meet"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-card border-border pr-8"
              />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </motion.div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetitions.map((competition, index) => (
            <motion.div
              key={competition.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <CompetitionCard competition={competition} />
            </motion.div>
          ))}
        </div>

        {filteredCompetitions.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No competitions found matching your criteria.</p>
          </div>
        )}

        {/* Records Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
            <h2 className="font-display text-2xl md:text-3xl">RECORDS</h2>
          </div>
          
          <div className="space-y-8">
            {recordsData.map((season, seasonIdx) => (
              <motion.div
                key={season.season}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + seasonIdx * 0.05 }}
                className="relative"
              >
                {/* Season Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary animate-ping opacity-30" />
                  </div>
                  <h3 className="font-display text-lg text-foreground tracking-wide">{season.season}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                </div>
                
                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pl-6">
                  {season.categories.map((category, catIdx) => (
                    <motion.div 
                      key={catIdx} 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + catIdx * 0.05 }}
                      className="group relative bg-gradient-to-br from-card to-card/50 rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                    >
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl" />
                      
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4 relative">
                        <span className="text-primary font-semibold text-sm">{category.name}</span>
                        <div className="flex flex-col items-end">
                          <span className="text-2xl font-display text-foreground">{category.score}</span>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Points</span>
                        </div>
                      </div>
                      
                      {/* Rankings */}
                      <div className="space-y-2.5">
                        {category.rankings.map((rank, rankIdx) => (
                          <div 
                            key={rankIdx} 
                            className="flex items-center gap-3 group/item"
                          >
                            {/* Medal/Shield Icon */}
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                              rank.place === "1st" 
                                ? "bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border border-yellow-500/30" 
                                : rank.place.match(/^[2-5]/)
                                ? "bg-gradient-to-br from-gray-400/20 to-gray-600/20 border border-gray-500/30"
                                : "bg-muted/30 border border-border/50"
                            }`}>
                              <div className={`w-2.5 h-2.5 rounded-full ${
                                rank.place === "1st" 
                                  ? "bg-gradient-to-br from-yellow-300 to-yellow-500" 
                                  : rank.place.match(/^[2-5]/)
                                  ? "bg-gradient-to-br from-gray-300 to-gray-500"
                                  : "bg-muted"
                              }`} />
                            </div>
                            <span className="text-muted-foreground text-sm flex-1 truncate group-hover/item:text-foreground transition-colors">
                              {rank.name}
                            </span>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                              rank.place === "1st" 
                                ? "bg-yellow-500/20 text-yellow-400" 
                                : rank.place.match(/^[2-3]/)
                                ? "bg-muted text-muted-foreground"
                                : "text-muted-foreground"
                            }`}>
                              {rank.place}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <span className="font-display text-3xl text-primary">{allCompetitions.length}</span>
            <p className="text-sm text-muted-foreground mt-1">Competitions</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <span className="font-display text-3xl text-yellow-400">
              {allCompetitions.reduce((acc, c) => acc + c.results.filter(r => r.place === "1st").length, 0)}
            </span>
            <p className="text-sm text-muted-foreground mt-1">Gold Medals</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <span className="font-display text-3xl text-gray-300">
              {allCompetitions.reduce((acc, c) => acc + c.results.filter(r => r.place === "2nd").length, 0)}
            </span>
            <p className="text-sm text-muted-foreground mt-1">Silver Medals</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <span className="font-display text-3xl text-amber-600">
              {allCompetitions.reduce((acc, c) => acc + c.results.filter(r => r.place === "3rd").length, 0)}
            </span>
            <p className="text-sm text-muted-foreground mt-1">Bronze Medals</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Results;
