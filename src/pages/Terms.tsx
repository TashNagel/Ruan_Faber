import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

const Terms = () => {
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
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Legal</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-foreground">
                Last updated: January 2025
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">2. Use of Content</h2>
              <p>
                All content on this website, including text, images, videos, and graphics, is the property of Ruan Faber and is protected by copyright laws. You may not reproduce, distribute, or use any content without prior written permission.
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">3. Donations</h2>
              <p>
                All donations made through this website are voluntary contributions to support Ruan Faber's swimming career and related activities. Donations are non-refundable unless otherwise specified. We are committed to using donations for their intended purpose.
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">4. Limitation of Liability</h2>
              <p>
                This website and its content are provided "as is" without warranties of any kind. We shall not be liable for any damages arising from the use of this website.
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">5. External Links</h2>
              <p>
                This website may contain links to external sites. We are not responsible for the content or privacy practices of these external sites.
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">7. Contact</h2>
              <p>
                For any questions regarding these terms, please contact us through the contact form on this website.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Terms;