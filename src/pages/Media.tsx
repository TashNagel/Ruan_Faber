import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, Video, Newspaper, ExternalLink } from "lucide-react";

const articles = [
  { 
    id: 1, 
    title: "Fields College stars shine in national sports", 
    description: "Ruan Faber is chosen to represent the North West province at the South African Swimming Championships. This selection offers him a chance to qualify for representing South Africa on an international stage.",
    date: "08 April 2024",
    source: "Platinum Weekly",
    url: "https://www.platinumweekly.co.za/article.php?categoryID=5&id=8141",
    imageUrl: "https://www.platinumweekly.co.za/img/articles/fields,-Photo1.jpg"
  },
  { 
    id: 2, 
    title: "Ruan Faber and Nicky Coetzee making waves!", 
    description: "Two of Rustenburg's young swimming prodigies from Fields College have once again demonstrated their mastery at swimming at the recent swim gala held in Potchefstroom.",
    date: "19 January 2024",
    source: "Platinum Weekly",
    url: "https://www.platinumweekly.co.za/article.php?id=7935&categoryID=3",
    imageUrl: "https://www.platinumweekly.co.za/img/articles/1,-Fields-college-Swimmer-Ruan.jpg"
  },
];

const videos = [
  { 
    id: 1, 
    title: "Race Highlights - Coming Soon", 
    description: "Competition race footage and highlights",
    placeholder: true
  },
  { 
    id: 2, 
    title: "Training Sessions - Coming Soon", 
    description: "Behind the scenes training content",
    placeholder: true
  },
  { 
    id: 3, 
    title: "Competition Vlogs - Coming Soon", 
    description: "Travel and competition day experiences",
    placeholder: true
  },
];

const Media = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="font-display text-2xl tracking-wider">
              <span className="text-foreground">RUAN</span>
              <span className="text-primary">.</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <Video className="w-4 h-4" />
              <span className="text-sm font-medium">Media Coverage</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl mb-4">Media</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              News articles, videos, and press coverage featuring my swimming journey and achievements.
            </p>
          </motion.div>

          {/* Articles Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Newspaper className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl">News Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <motion.a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Article Image */}
                  <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-background/90 backdrop-blur-sm rounded text-xs text-primary font-medium">
                      {article.source}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground mb-2">{article.date}</p>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-lg">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{article.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium">
                      <span>Read Article</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Videos Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Play className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl">Videos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden"
                >
                  {/* Video Placeholder */}
                  <div className="aspect-video bg-secondary/30 flex items-center justify-center relative">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
                      <Play className="w-12 h-12" />
                      <span className="text-xs">Coming Soon</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground/70 mb-1">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-muted-foreground mt-12"
          >
            More media content coming soon...
          </motion.p>
        </div>
      </main>
    </div>
  );
};

export default Media;