import { MapPin, Phone, Mail, Clock, Star, Heart, Sparkles, Sun } from "lucide-react";
import { Card } from "../components/ui/card";

const locations = [
  {
    name: "Main Center - Downtown",
    address: "123 Therapy Lane, Suite 100",
    city: "Your City, ST 12345",
    phone: "(123) 456-7890",
    email: "downtown@aimpediatric.com",
    hours: [
      "Monday - Friday: 8:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: Closed"
    ],
    services: ["Occupational Therapy", "Speech Therapy", "Physical Therapy", "ABA Therapy", "Music Therapy", "Social Skills Groups"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
  },
  {
    name: "Westside Location",
    address: "456 Children's Way, Building B",
    city: "Your City, ST 12346",
    phone: "(123) 456-7891",
    email: "westside@aimpediatric.com",
    hours: [
      "Monday - Friday: 9:00 AM - 5:00 PM",
      "Saturday: 10:00 AM - 1:00 PM",
      "Sunday: Closed"
    ],
    services: ["Occupational Therapy", "Speech Therapy", "Physical Therapy", "Social Skills Groups"],
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
  },
  {
    name: "North Campus",
    address: "789 Development Drive",
    city: "Your City, ST 12347",
    phone: "(123) 456-7892",
    email: "north@aimpediatric.com",
    hours: [
      "Monday - Friday: 8:00 AM - 7:00 PM",
      "Saturday: 9:00 AM - 3:00 PM",
      "Sunday: Closed"
    ],
    services: ["All Services Available", "Including Teletherapy Options"],
    image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
  }
];

export function LocationsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#D4F1E8] to-white overflow-hidden">
        {/* Decorations */}
        <div className="absolute top-24 right-20 animate-bounce" style={{ animationDuration: '4s' }}>
          <Star className="w-10 h-10 text-[#4ECDC4] fill-[#4ECDC4] opacity-40" />
        </div>
        <div className="absolute top-40 left-24 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.3s' }}>
          <Heart className="w-9 h-9 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '4.3s', animationDelay: '0.6s' }}>
          <Sparkles className="w-10 h-10 text-[#9B72E5] fill-[#9B72E5] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDuration: '3.9s', animationDelay: '0.2s' }}>
          <Sun className="w-11 h-11 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#D4F1E8] to-[#E9DFFF] rounded-full text-sm font-semibold mb-4">
            📍 Our Locations
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Convenient Locations Throughout the Area
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We have multiple locations to better serve families in our community. Each center offers 
            state-of-the-art facilities designed specifically for pediatric therapy.
          </p>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {locations.map((location, index) => (
              <Card key={index} className="overflow-hidden border-2 border-border hover:border-primary/20 transition-all hover:shadow-xl rounded-3xl">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                        <div>
                          <p>{location.address}</p>
                          <p>{location.city}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors">
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <a href={`mailto:${location.email}`} className="hover:text-primary transition-colors">
                          {location.email}
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3 mb-2">
                        <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                        <div className="space-y-1">
                          {location.hours.map((hour, hIndex) => (
                            <p key={hIndex} className="text-sm text-muted-foreground">{hour}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Services Available:</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.services.map((service, sIndex) => (
                          <span 
                            key={sIndex}
                            className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-xs font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-all">
                        Get Directions
                      </button>
                      <button className="px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all">
                        Schedule Visit
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teletherapy */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF9F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <span className="text-4xl">💻</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Teletherapy Services</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't make it to one of our locations? We offer secure, HIPAA-compliant teletherapy 
              services for many of our therapy types. Receive quality care from the comfort of your home!
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl transition-all">
              Learn About Teletherapy
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#D4F1E8] to-[#B8E6D5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us Today!</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a tour of any of our locations and see our welcoming, child-friendly facilities.
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all">
            Schedule a Tour
          </button>
        </div>
      </section>
    </div>
  );
}
