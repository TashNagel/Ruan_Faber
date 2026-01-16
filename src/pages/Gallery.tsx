import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera } from "lucide-react";
import midmarImage from "@/assets/gallery-midmar-2024.jpeg";
import saSchoolsImage from "@/assets/gallery-sa-schools-2023.jpeg";
import nwChampionshipImage from "@/assets/gallery-nw-championship.jpeg";
import nwSchoolsImage from "@/assets/gallery-nw-schools.jpeg";
import level3Image from "@/assets/gallery-level3-championship.jpeg";
import coachHelenImage from "@/assets/gallery-coach-helen.jpeg";

const galleryImages = [
  { id: 1, title: "North West Championship", category: "Competition", image: nwChampionshipImage },
  { id: 2, title: "North West Schools Championship", category: "Schools", image: nwSchoolsImage },
  { id: 3, title: "Level 3 Championship", category: "Competition", image: level3Image },
  { id: 4, title: "Coach Helen", category: "Team", image: coachHelenImage },
  { id: 5, title: "Midmar Mile 2024", category: "Open Water", image: midmarImage },
  { id: 6, title: "SA Schools 2023", category: "Competition", image: saSchoolsImage },
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
                className="group relative aspect-[3/4] bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium text-foreground">{image.title}</p>
                  <span className="text-xs text-primary">{image.category}</span>
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
            More photos coming soon...
          </motion.p>
        </div>
      </main>
    </div>
  );
};

export default Gallery;