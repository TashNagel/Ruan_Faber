import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

const Privacy = () => {
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
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Privacy</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl mb-8">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-foreground">
                Last updated: January 2025
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">1. Information We Collect</h2>
              <p>
                We may collect information you provide directly, such as your name and email address when you use the contact form or make a donation. We also collect basic analytics data to improve the website experience.
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and messages</li>
                <li>Process donations and send acknowledgments</li>
                <li>Improve our website and services</li>
                <li>Send updates about swimming achievements (with your consent)</li>
              </ul>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties. This does not include trusted service providers who assist in operating our website, provided they agree to keep this information confidential.
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">5. Cookies</h2>
              <p>
                This website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings, though this may affect certain website functionality.
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">6. Third-Party Services</h2>
              <p>
                We may use third-party services for analytics and payment processing. These services have their own privacy policies, and we encourage you to review them.
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">7. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. Contact us if you wish to exercise these rights.
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
              
              <h2 className="font-display text-xl text-foreground mt-8 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through the contact form on this website.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;