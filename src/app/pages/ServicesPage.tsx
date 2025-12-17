import { Brain, Users, Heart, Palette, Sparkles, MessageSquare, Activity, Home, Star, Sun, Moon } from "lucide-react";
import { Card } from "../components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "ABA Therapy",
    description: "Applied Behaviour Analysis is the most effective evidence-based therapeutic approach for children with autism. We systematically apply interventions based on learning theory principles to improve socially significant behaviours.",
    color: "from-[#E9DFFF] to-[#D4C5FF]",
    iconColor: "#9B72E5",
    link: "/services/aba",
    availability: "In-home, In-centre and Online (tele-therapy) available"
  },
  {
    icon: Heart,
    title: "IBI Therapy",
    description: "Intensive Behavioural Intervention is a well-documented therapy approach to autism in children. It requires direct and individually oriented intervention delivered by qualified Instructor Therapists.",
    color: "from-[#FFE4E9] to-[#FFD0DC]",
    iconColor: "#FF6B9D",
    link: "/services/ibi",
    availability: "Intensive individual intervention"
  },
  {
    icon: Users,
    title: "Parent Coaching",
    description: "We work closely with you, coaching you on how to develop and implement teaching strategies that are most appropriate for your child, helping you recognize teachable moments in everyday life.",
    color: "from-[#D5E8F7] to-[#B8DAFF]",
    iconColor: "#5BA4E5",
    link: "/services/parent-coaching",
    availability: "English, French, Arabic, Hindi, Punjabi and Urdu"
  },
  {
    icon: Palette,
    title: "Creative Art Therapies",
    description: "Music and Art Therapy foster developmental, social, and expressive needs. These creative therapies help children develop interpersonal skills, manage behavior, reduce stress, and increase self-esteem.",
    color: "from-[#FFE7D9] to-[#FFD4B8]",
    iconColor: "#FFA07A",
    link: "/services/creative-art-therapies",
    availability: "Group programs available"
  },
  {
    icon: Sparkles,
    title: "Relaxation & Self-Regulation",
    description: "Evidence-based relaxation and self-regulation strategies including breathing exercises, motor-based activities, and yoga to help children manage anxiety and stressful situations effectively.",
    color: "from-[#FFF4D9] to-[#FFE9B8]",
    iconColor: "#FFD700",
    link: "/services/relaxation-self-regulation",
    availability: "Personalized strategies"
  },
  {
    icon: Users,
    title: "Social Skills Development",
    description: "Multidisciplinary approach to develop social interaction strategies through structured activities and small group sessions, helping children navigate school interactions and peer relationships with confidence.",
    color: "from-[#D4F1E8] to-[#B8E6D5]",
    iconColor: "#4ECDC4",
    link: "/services/social-skills",
    availability: "Small group sessions"
  },
  {
    icon: MessageSquare,
    title: "Speech Language Therapy",
    description: "Collaborative work with skilled Speech-Language Pathologists to address unclear speech, language delays, articulation difficulties, and social communication deficits through comprehensive intervention.",
    color: "from-[#D5E8F7] to-[#B8DAFF]",
    iconColor: "#5BA4E5",
    link: "/services/speech-language-therapy",
    availability: "Multidisciplinary approach"
  },
  {
    icon: Activity,
    title: "Occupational Therapy",
    description: "Specialized occupational therapy for children with ASD, ADHD and developmental needs. Our registered OTs develop essential daily living skills enabling successful integration across home, school, and community.",
    color: "from-[#D4F1E8] to-[#B8E6D5]",
    iconColor: "#4ECDC4",
    link: "/services/occupational-therapy",
    availability: "Collaborative family approach"
  },
  {
    icon: Home,
    title: "Respite Care Services",
    description: "Safe, supportive, and engaging environment where children receive quality care while developing essential life and social skills. Trained staff offer personalized support through structured activities.",
    color: "from-[#FFE4E9] to-[#FFD0DC]",
    iconColor: "#FF6B9D",
    link: "/services/respite-care",
    availability: "Family support services"
  }
];

export function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#FFF9F5] to-white overflow-hidden">
        {/* Decorations */}
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDuration: '4s' }}>
          <Star className="w-8 h-8 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
        </div>
        <div className="absolute top-40 right-16 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
          <Heart className="w-10 h-10 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '1s' }}>
          <Sun className="w-12 h-12 text-[#FFA07A] fill-[#FFA07A] opacity-40" />
        </div>
        <div className="absolute bottom-20 right-32 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.8s' }}>
          <Moon className="w-6 h-6 text-[#9B72E5] fill-[#9B72E5] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#D5E8F7] to-[#E9DFFF] rounded-full text-sm font-semibold mb-4">
            🌟 Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive Therapy Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            At AIM Pediatric Therapy, we are dedicated to providing compassionate, personalized services 
            designed to support meaningful and lasting progress.
          </p>
          <div className="max-w-4xl mx-auto text-left bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Through comprehensive assessments and collaborative planning, we create tailored intervention 
              programs that foster growth in communication, social skills, adaptive living, and emotional regulation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We prioritize building strong, trusting relationships with our clients and their families, ensuring 
              that everyone feels supported throughout their journey. Our evidence-based strategies are paired 
              with a warm, engaging environment to promote learning that is both effective and enjoyable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At AIM Pediatric Therapy, we are committed to empowering individuals to reach their fullest potential 
              while providing families with the tools and guidance they need for ongoing success. Our goal is not 
              just to make progress today, but to create positive, lasting change for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF9F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Availability */}
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-xs font-semibold text-primary">{service.availability}</p>
                  </div>

                  {/* Learn more link */}
                  <Link to={service.link}>
                    <button className="w-full px-6 py-3 bg-white rounded-full font-semibold hover:shadow-lg transition-all text-sm mt-4">
                      Learn More →
                    </button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose AIM Pediatric Therapy?</h2>
            <p className="text-lg text-muted-foreground">
              Our multidisciplinary approach ensures your child receives comprehensive, coordinated care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 rounded-3xl border-2 border-border text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#E9DFFF] to-[#D4C5FF] flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Evidence-Based</h3>
              <p className="text-muted-foreground">
                All our therapies are grounded in the latest research and proven methodologies.
              </p>
            </Card>

            <Card className="p-8 rounded-3xl border-2 border-border text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#D5E8F7] to-[#B8DAFF] flex items-center justify-center">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Family-Centered</h3>
              <p className="text-muted-foreground">
                We partner with families and provide tools for continued progress at home.
              </p>
            </Card>

            <Card className="p-8 rounded-3xl border-2 border-border text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#D4F1E8] to-[#B8E6D5] flex items-center justify-center">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Compassionate Care</h3>
              <p className="text-muted-foreground">
                Building strong, trusting relationships with our clients and their families.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a free consultation and learn which services are right for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl transition-all">
              Schedule Consultation
            </button>
            <Link to="/contact">
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
