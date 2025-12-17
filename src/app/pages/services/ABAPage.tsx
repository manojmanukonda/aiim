import { Brain, Check, Star, Heart, Sun, Moon } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Link } from "react-router-dom";

export function ABAPage() {
  const features = [
    "Systematic application of learning theory principles",
    "Evidence-based therapeutic approach",
    "Improves socially significant behaviours",
    "Individualized intervention programs",
    "Structured teaching of functional skills",
    "Data-driven progress tracking",
    "Collaboration with families and schools",
    "Comprehensive behavioral assessments"
  ];

  const availability = [
    { icon: "🏠", label: "In-Home Therapy", description: "Therapy in your comfortable home environment" },
    { icon: "🏢", label: "In-Centre Therapy", description: "Professional clinic setting with specialized resources" },
    { icon: "💻", label: "Online Tele-Therapy", description: "Convenient virtual therapy sessions" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#E9DFFF] to-white overflow-hidden">
        <div className="absolute top-24 right-20 animate-bounce" style={{ animationDuration: '3.9s' }}>
          <Star className="w-10 h-10 text-[#9B72E5] fill-[#9B72E5] opacity-40" />
        </div>
        <div className="absolute top-40 left-24 animate-bounce" style={{ animationDuration: '4.4s', animationDelay: '0.4s' }}>
          <Heart className="w-9 h-9 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '0.7s' }}>
          <Sun className="w-10 h-10 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.2s' }}>
          <Moon className="w-11 h-11 text-[#D4C5FF] fill-[#D4C5FF] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/services" className="inline-block mb-4">
            <span className="text-sm text-primary hover:underline">← Back to Services</span>
          </Link>
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#E9DFFF] to-[#D4C5FF] flex items-center justify-center shadow-xl">
            <Brain className="w-10 h-10 text-[#9B72E5]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ABA Therapy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Applied Behaviour Analysis - The most effective evidence-based therapeutic approach for children with autism
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 rounded-3xl border-2 border-[#E9DFFF] mb-12">
              <h2 className="text-3xl font-bold mb-6">What is ABA?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Applied Behaviour Analysis is widely accepted to be the most effective evidence-based therapeutic 
                approach developed to date for children with autism. The structured teaching of functional skills 
                (often called behavioral intervention) presently has the largest body of published research supporting 
                its effectiveness.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ABA is the process of systematically applying interventions based upon the principles of learning 
                theory to improve socially significant behaviours to a meaningful degree. Our approach focuses on 
                understanding behavior patterns and implementing strategies that promote positive development and 
                skill acquisition.
              </p>
            </Card>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our ABA Approach</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#E9DFFF]/30 to-[#D4C5FF]/30 rounded-2xl">
                    <Check className="w-5 h-5 text-[#9B72E5] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Availability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Service Availability</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {availability.map((option, index) => (
                  <Card key={index} className="p-6 rounded-3xl border-2 border-border text-center hover:border-primary/20 transition-all hover:shadow-xl">
                    <div className="text-4xl mb-4">{option.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{option.label}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#E9DFFF] to-[#D4C5FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start ABA Therapy Today</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our ABA therapy programs and how we can support your child's development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
