import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera, Image as ImageIcon } from "lucide-react";

const galleryImages = [
  { id: 1, title: "NWS Championships 2025", category: "Competition" },
  { id: 2, title: "Training Session", category: "Training" },
  { id: 3, title: "SA Schools Championship", category: "Competition" },
  { id: 4, title: "Medal Ceremony", category: "Awards" },
  { id: 5, title: "Pool Practice", category: "Training" },
  { id: 6, title: "Team Photo", category: "Events" },
  { id: 7, title: "Regional Finals", category: "Competition" },
  { id: 8, title: "Warm-up Routine", category: "Training" },
];

const Gallery = () => {
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
              <Camera className="w-4 h-4" />
              <span className="text-sm font-medium">Photo Gallery</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl mb-4">Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of photos from competitions, training sessions, and memorable moments throughout my swimming career.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                  <ImageIcon className="w-12 h-12 mb-3 opacity-30" />
                  <p className="text-sm font-medium">{image.title}</p>
                  <span className="text-xs text-primary mt-1">{image.category}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-muted-foreground mt-12"
          >
            More photos coming soon...
          </motion.p>
        </div>
      </main>
    </div>
  );
};

export default Gallery;