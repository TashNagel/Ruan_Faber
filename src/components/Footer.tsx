import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 bg-card-gradient border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl tracking-wider">
            <span className="text-foreground">RUAN</span>
            <span className="text-primary">.</span>
            <span className="text-muted-foreground font-sans text-sm font-normal ml-3">
              National-Level Swimmer
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/terms" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link 
              to="/privacy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ruan Faber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
