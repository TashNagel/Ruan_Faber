import { motion } from "framer-motion";
import { Heart, MapPin, Target, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const DonationSection = () => {
  const backABuddyUrl = "https://www.backabuddy.co.za/campaign/ruan-faber-italy-swim-tour";

  return (
    <section id="donate" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            Support the Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Help Me Compete in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-white to-red-500">
              Italy
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I've been selected to represent at an international swimming event in Italy.
            Your support will help cover travel, accommodation, and competition expenses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Destination</h3>
            <p className="text-muted-foreground">Italy</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Goal</h3>
            <p className="text-muted-foreground">R50,000</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Every Bit Helps</h3>
            <p className="text-muted-foreground">No amount too small</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/25"
            onClick={() => window.open(backABuddyUrl, "_blank")}
          >
            <Heart className="w-5 h-5 mr-2" />
            Donate on BackABuddy
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            Secure donations via BackABuddy.co.za
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationSection;
