import { Brain, MessageSquare, Activity, Heart, Music, Puzzle, Star, Rocket, Sun, Users, Palette, Sparkles, Home } from "lucide-react";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "ABA Therapy",
    description: "Applied Behaviour Analysis - the most effective evidence-based therapeutic approach for children with autism. Available in-home, in-centre, and online.",
    color: "from-[#FFE4E9] to-[#FFD0DC]",
    iconColor: "#FF6B9D",
    link: "/services/aba"
  },
  {
    icon: Heart,
    title: "IBI Therapy",
    description: "Intensive Behavioural Intervention - well-documented therapy approach with direct and individually oriented intervention by qualified therapists.",
    color: "from-[#D5E8F7] to-[#B8DAFF]",
    iconColor: "#5BA4E5",
    link: "/services/ibi"
  },
  {
    icon: Users,
    title: "Parent Coaching",
    description: "Empowering parents with teaching strategies and recognizing teachable moments. Available in English, French, Arabic, Hindi, Punjabi, and Urdu.",
    color: "from-[#E9DFFF] to-[#D4C5FF]",
    iconColor: "#9B72E5",
    link: "/services/parent-coaching"
  },
  {
    icon: Palette,
    title: "Creative Art Therapies",
    description: "Music and Art Therapy to foster developmental, social, and expressive needs. First ASD provider in the region to offer these therapies.",
    color: "from-[#FFE7D9] to-[#FFD4B8]",
    iconColor: "#FFA07A",
    link: "/services/creative-art-therapies"
  },
  {
    icon: Sparkles,
    title: "Relaxation & Self-Regulation",
    description: "Evidence-based strategies including breathing exercises, motor activities, and yoga to help children manage anxiety and stress.",
    color: "from-[#D4F1E8] to-[#B8E6D5]",
    iconColor: "#4ECDC4",
    link: "/services/relaxation-self-regulation"
  },
  {
    icon: Puzzle,
    title: "Social Skills Development",
    description: "Multidisciplinary approach through small group sessions to build confidence in social interactions and peer relationships.",
    color: "from-[#FFF4D9] to-[#FFE9B8]",
    iconColor: "#FFD700",
    link: "/services/social-skills"
  },
  {
    icon: MessageSquare,
    title: "Speech Language Therapy",
    description: "Collaborative work with skilled SLPs addressing unclear speech, language delays, and social communication deficits.",
    color: "from-[#FFE4E9] to-[#FFD0DC]",
    iconColor: "#FF6B9D",
    link: "/services/speech-language-therapy"
  },
  {
    icon: Activity,
    title: "Occupational Therapy",
    description: "Specialized therapy for children with ASD, ADHD, and developmental needs to develop essential daily living skills.",
    color: "from-[#D5E8F7] to-[#B8DAFF]",
    iconColor: "#5BA4E5",
    link: "/services/occupational-therapy"
  },
  {
    icon: Home,
    title: "Respite Care Services",
    description: "Safe, supportive environment where children receive quality care while developing essential life and social skills.",
    color: "from-[#E9DFFF] to-[#D4C5FF]",
    iconColor: "#9B72E5",
    link: "/services/respite-care"
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-[#FFF9F5] overflow-hidden">
      {/* Cute floating decorations */}
      <div className="absolute top-20 left-10 animate-bounce" style={{ animationDuration: '4s' }}>
        <Star className="w-8 h-8 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
      </div>
      <div className="absolute top-40 right-16 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
        <Rocket className="w-10 h-10 text-[#9B72E5] fill-[#9B72E5] opacity-40 rotate-45" />
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '1s' }}>
        <Sun className="w-12 h-12 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
      </div>
      <div className="absolute bottom-20 right-32 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.8s' }}>
        <Star className="w-6 h-6 text-[#A8D5FF] fill-[#A8D5FF] opacity-40" />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFE4E9] to-[#E9DFFF] rounded-full text-sm font-semibold mb-4">
            🌟 Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Therapy Services
          </h2>
          <p className="text-lg text-muted-foreground">
            At AIM Pediatric Therapy, we provide compassionate, personalized services designed to support 
            meaningful and lasting progress through evidence-based strategies in a warm, engaging environment.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-3xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50 group-hover:opacity-70 transition-opacity`} />
              
              <div className="relative p-8 space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8" style={{ color: service.iconColor }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Learn more link */}
                <Link to={service.link}>
                  <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-2 group/link">
                    Learn More
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}