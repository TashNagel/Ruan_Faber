import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera } from "lucide-react";
import midmarImage from "@/assets/ruan_faber_005.jpeg";
import saSchoolsImage from "@/assets/ruan_faber_001.jpeg";
import nwChampionshipImage from "@/assets/ruan_faber_001.jpeg";
import nwSchoolsImage from "@/assets/ruan_faber_002.jpeg";
import level3Image from "@/assets/ruan_faber_009.jpeg";
import coachHelenImage from "@/assets/Coach Helen 2024.jpeg";
import breaststrokeImage from "@/assets/ruan_faber_015.jpeg";
import coachHelenEarlyImage from "@/assets/Coach helen .jpeg";
import poolTrainingImage from "@/assets/ruan_faber_003.jpeg";
import midmarMileImage from "@/assets/ruan_faber_006.jpeg";
import fieldsCollegeImage from "@/assets/ruan_faber_008.jpeg";
import lifeguardImage from "@/assets/ruan_faber_011.jpeg";
import swimmingSAImage from "@/assets/ruan_faber_012.jpeg";
import divingStartImage from "@/assets/ruan_faber_014.jpeg";


const galleryImages = [
  { id: 1, title: "North West Championship", category: "Competition", image: nwChampionshipImage },
  { id: 2, title: "North West Schools Championship", category: "Schools", image: nwSchoolsImage },
  { id: 3, title: "Level 3 Championship", category: "Competition", image: level3Image },
  { id: 4, title: "Coach Helen 2024", category: "Team", image: coachHelenImage },
  { id: 5, title: "Midmar Mile 2024", category: "Open Water", image: midmarImage },
  { id: 6, title: "SA Schools 2023", category: "Competition", image: saSchoolsImage },
  { id: 7, title: "Breaststroke Training", category: "Training", image: breaststrokeImage },
  { id: 8, title: "Coach Helen - Early Days", category: "Team", image: coachHelenEarlyImage },
  { id: 9, title: "Pool Training", category: "Training", image: poolTrainingImage },
  { id: 10, title: "aQuellé Midmar Mile", category: "Open Water", image: midmarMileImage },
  { id: 11, title: "Fields College", category: "Schools", image: fieldsCollegeImage },
  { id: 12, title: "Lifeguard", category: "Lifesaving", image: lifeguardImage },
  { id: 13, title: "Swimming South Africa", category: "Competition", image: swimmingSAImage },
  { id: 14, title: "Diving Start", category: "Training", image: divingStartImage },

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <Camera className="w-4 h-4" />
              <span className="text-sm font-medium">Photo Gallery</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl mb-4">Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of photos from competitions, training sessions, and memorable moments throughout my swimming
              career.
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
        </div>
      </main>
    </div>
  );
};

export default Gallery;
