import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-[#FFF9F5] border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logo} alt="AIM Pediatric Therapy" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-primary">AIM Pediatric</h3>
                <p className="text-xs text-muted-foreground">Therapy & Development</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Helping children reach their full potential through compassionate, evidence-based therapy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/locations" className="text-muted-foreground hover:text-primary transition-colors">Locations</Link></li>
              <li><Link to="/insurance" className="text-muted-foreground hover:text-primary transition-colors">Insurance</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/aba" className="text-muted-foreground hover:text-primary transition-colors">ABA Therapy</Link></li>
              <li><Link to="/services/ibi" className="text-muted-foreground hover:text-primary transition-colors">IBI Therapy</Link></li>
              <li><Link to="/services/parent-coaching" className="text-muted-foreground hover:text-primary transition-colors">Parent Coaching</Link></li>
              <li><Link to="/services/creative-art-therapies" className="text-muted-foreground hover:text-primary transition-colors">Creative Art Therapies</Link></li>
              <li><Link to="/services/speech-language-therapy" className="text-muted-foreground hover:text-primary transition-colors">Speech Language Therapy</Link></li>
              <li><Link to="/services/occupational-therapy" className="text-muted-foreground hover:text-primary transition-colors">Occupational Therapy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:9054972467" className="text-muted-foreground hover:text-primary transition-colors">905-497-2467</a></li>
              <li><a href="mailto:admin@aimpediatrictherapy.com" className="text-muted-foreground hover:text-primary transition-colors">admin@aimpediatrictherapy.com</a></li>
              <li className="text-muted-foreground">Brampton, Mississauga, Burlington</li>
              <li className="text-muted-foreground">Oakville, Milton, Caledon, Toronto</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © {currentYear} AIM Pediatric Therapy. Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for children and families.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}