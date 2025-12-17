import { Menu, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const services = [
  { name: "ABA Therapy", path: "/services/aba" },
  { name: "IBI Therapy", path: "/services/ibi" },
  { name: "Parent Coaching", path: "/services/parent-coaching" },
  { name: "Creative Art Therapies", path: "/services/creative-art-therapies" },
  { name: "Relaxation & Self-Regulation", path: "/services/relaxation-self-regulation" },
  { name: "Social Skills Development", path: "/services/social-skills" },
  { name: "Speech Language Therapy", path: "/services/speech-language-therapy" },
  { name: "Occupational Therapy", path: "/services/occupational-therapy" },
  { name: "Respite Care Services", path: "/services/respite-care" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 border-b border-border/50">
          <a href="tel:9054972467" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            905-497-2467
          </a>
          <a href="mailto:admin@aimpediatrictherapy.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            admin@aimpediatrictherapy.com
          </a>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">AIM Pediatric</h1>
              <p className="text-xs text-muted-foreground">Therapy & Development</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border-2 border-border py-2 animate-in fade-in slide-in-from-top-2">
                  <Link
                    to="/services"
                    className="block px-4 py-2.5 text-sm font-semibold text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-colors border-b border-border/50 mb-1"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    View All Services →
                  </Link>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-4 py-2.5 text-sm hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/team" className="text-sm font-medium hover:text-primary transition-colors">Our Team</Link>
            <Link to="/gallery" className="text-sm font-medium hover:text-primary transition-colors">Gallery</Link>
            <Link to="/careers" className="text-sm font-medium hover:text-primary transition-colors">Careers</Link>
            <Link to="/locations" className="text-sm font-medium hover:text-primary transition-colors">Locations</Link>
            <Link to="/insurance" className="text-sm font-medium hover:text-primary transition-colors">Insurance</Link>
            <Link to="/faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
            <Link to="/resources" className="text-sm font-medium hover:text-primary transition-colors">Resources</Link>
            <Link to="/contact">
              <Button className="rounded-full">Contact Us</Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <Link to="/" className="py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              
              {/* Mobile Services Accordion */}
              <div>
                <button 
                  className="py-2 font-medium hover:text-primary transition-colors flex items-center justify-between w-full"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/team" className="py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Our Team</Link>
              <Link to="/gallery" className="py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <Link to="/careers" className="py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Careers</Link>
              <Link to="/locations" className="py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Locations</Link>
              <Link to="/insurance" className="py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Insurance</Link>
              <Link to="/faq" className="py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              <Link to="/resources" className="py-2 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Resources</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="rounded-full mt-2 w-full">Contact Us</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}