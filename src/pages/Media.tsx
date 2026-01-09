import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, Video, Newspaper, ExternalLink } from "lucide-react";

const mediaItems = [
  { 
    id: 1, 
    type: "video", 
    title: "Race Highlights - NWS Championships 2025", 
    description: "Final race of the 50m Backstroke",
    date: "Dec 2025"
  },
  { 
    id: 2, 
    type: "article", 
    title: "Rising Star in NW Swimming", 
    description: "Local newspaper feature on recent achievements",
    date: "Nov 2025"
  },
  { 
    id: 3, 
    type: "video", 
    title: "Training Day Vlog", 
    description: "Behind the scenes of a typical training session",
    date: "Oct 2025"
  },
  { 
    id: 4, 
    type: "article", 
    title: "SA Schools Championship Coverage", 
    description: "Post-competition interview and analysis",
    date: "Apr 2025"
  },
  { 
    id: 5, 
    type: "video", 
    title: "100m Butterfly - Personal Best", 
    description: "Race footage from Short Course Championships",
    date: "Oct 2025"
  },
  { 
    id: 6, 
    type: "article", 
    title: "Journey to Italy Campaign Launch", 
    description: "Crowdfunding campaign announcement",
    date: "Sep 2025"
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
              Videos, articles, and press coverage featuring my swimming journey and achievements.
            </p>
          </motion.div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                {/* Thumbnail Placeholder */}
                <div className="aspect-video bg-secondary/50 flex items-center justify-center relative">
                  {item.type === "video" ? (
                    <>
                      <Play className="w-12 h-12 text-primary/50" />
                      <div className="absolute top-3 left-3 px-2 py-1 bg-primary/20 rounded text-xs text-primary font-medium">
                        Video
                      </div>
                    </>
                  ) : (
                    <>
                      <Newspaper className="w-12 h-12 text-primary/50" />
                      <div className="absolute top-3 left-3 px-2 py-1 bg-secondary rounded text-xs text-muted-foreground font-medium">
                        Article
                      </div>
                    </>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-2">{item.date}</p>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-3 flex items-center gap-1 text-primary text-sm">
                    <span>View</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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