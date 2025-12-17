import { Button } from "./ui/button";
import { Star, Heart, Sparkles, Rocket, Sun, Moon } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFE4E9] rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#D5E8F7] rounded-full blur-3xl opacity-50" />
      <div className="absolute top-40 right-1/4 w-24 h-24 bg-[#E9DFFF] rounded-full blur-3xl opacity-50" />

      {/* Floating decorations with sun, moon, stars, rockets */}
      <div className="absolute top-24 right-16 animate-bounce z-0" style={{ animationDuration: '3s' }}>
        <Sun className="w-10 h-10 text-[#FFD89D] fill-[#FFD89D]" />
      </div>
      <div className="absolute top-32 right-32 animate-bounce z-0" style={{ animationDuration: '3s' }}>
        <Star className="w-6 h-6 text-[#FFD89D] fill-[#FFD89D]" />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce z-0" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
        <Heart className="w-10 h-10 text-[#FF6B9D] fill-[#FF6B9D]" />
      </div>
      <div className="absolute bottom-32 left-32 animate-bounce z-0" style={{ animationDuration: '3.2s', animationDelay: '0.8s' }}>
        <Moon className="w-8 h-8 text-[#A8D5FF] fill-[#A8D5FF]" />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-bounce z-0" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
        <Sparkles className="w-6 h-6 text-[#A8D5FF] fill-[#A8D5FF]" />
      </div>
      <div className="absolute top-1/3 left-12 animate-bounce z-0" style={{ animationDuration: '4s', animationDelay: '0.3s' }}>
        <Rocket className="w-8 h-8 text-[#FF6B9D] fill-[#FF6B9D] rotate-45" />
      </div>
      <div className="absolute bottom-1/4 right-24 animate-bounce z-0" style={{ animationDuration: '3.8s', animationDelay: '1.2s' }}>
        <Star className="w-7 h-7 text-[#E9DFFF] fill-[#E9DFFF]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 z-10">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-[#FFE4E9] to-[#E9DFFF] rounded-full text-sm font-semibold text-foreground shadow-sm">
                ✨ Expert Pediatric Care
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Helping Children{" "}
              <span className="text-primary">Reach Their</span>{" "}
              <span className="relative">
                Full Potential
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#FF6B9D" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive pediatric therapy services including occupational therapy, speech therapy, 
              physical therapy, and ABA therapy. We make learning fun and celebrate every milestone!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all">
                Schedule Evaluation
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2 border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Children Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D4F1E8]">98%</div>
                <div className="text-sm text-muted-foreground">Parent Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative z-10">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1620652748508-86fdb7bfb500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNtaWxpbmclMjBjaGlsZHJlbiUyMGZhY2VzfGVufDF8fHx8MTc2NTg5NDA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy smiling children"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              {/* Decorative overlay elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFD89D] rounded-full" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#D4F1E8] rounded-full" />
              
              {/* Cute floating elements on image */}
              <div className="absolute top-8 right-8 animate-bounce" style={{ animationDuration: '2.5s' }}>
                <Star className="w-8 h-8 text-white fill-white opacity-80" />
              </div>
              <div className="absolute bottom-12 left-8 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                <Heart className="w-8 h-8 text-white fill-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}