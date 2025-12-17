import { Heart, Check, Star, Sparkles, Sun, Moon } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Link } from "react-router-dom";

export function IBIPage() {
  const features = [
    "Direct and individually oriented intervention",
    "Intensive therapy approach",
    "Well-documented effectiveness",
    "Qualified Instructor Therapists",
    "Psychology and education expertise",
    "Comprehensive IBI and ABA training",
    "Personalized treatment plans",
    "Continuous progress monitoring"
  ];

  const qualifications = [
    { title: "Expert Therapists", description: "Qualified in psychology, education or related disciplines" },
    { title: "Specialized Training", description: "Each therapist has received IBI and ABA training" },
    { title: "Evidence-Based", description: "Considered one of the most successful approaches to autism" },
    { title: "Individual Focus", description: "Direct and individually oriented intervention for each child" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#FFE4E9] to-white overflow-hidden">
        <div className="absolute top-24 right-20 animate-bounce" style={{ animationDuration: '3.9s' }}>
          <Star className="w-10 h-10 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>
        <div className="absolute top-40 left-24 animate-bounce" style={{ animationDuration: '4.4s', animationDelay: '0.4s' }}>
          <Heart className="w-9 h-9 text-[#FFD0DC] fill-[#FFD0DC] opacity-40" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '0.7s' }}>
          <Sun className="w-10 h-10 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.2s' }}>
          <Sparkles className="w-11 h-11 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/services" className="inline-block mb-4">
            <span className="text-sm text-primary hover:underline">← Back to Services</span>
          </Link>
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#FFE4E9] to-[#FFD0DC] flex items-center justify-center shadow-xl">
            <Heart className="w-10 h-10 text-[#FF6B9D]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            IBI Therapy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Intensive Behavioural Intervention - A well-documented therapy approach to autism in children
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 rounded-3xl border-2 border-[#FFE4E9] mb-12">
              <h2 className="text-3xl font-bold mb-6">What is IBI?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Intensive Behavioural Intervention is a therapy/treatment approach to autism in children. The efficacy 
                of this approach is well documented and it is considered one of the most successful approaches to autism 
                among professionals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As the name suggests, it is an intensive approach, it requires direct and individually oriented intervention. 
                Our Instructor Therapists are qualified in psychology, education or in related disciplines.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each of them has received IBI and ABA training, ensuring they bring the highest level of expertise and 
                dedication to your child's development.
              </p>
            </Card>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our IBI Approach</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFE4E9]/30 to-[#FFD0DC]/30 rounded-2xl">
                    <Check className="w-5 h-5 text-[#FF6B9D] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Team's Qualifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {qualifications.map((qual, index) => (
                  <Card key={index} className="p-6 rounded-3xl border-2 border-border hover:border-primary/20 transition-all hover:shadow-xl">
                    <h3 className="text-xl font-bold mb-2">{qual.title}</h3>
                    <p className="text-sm text-muted-foreground">{qual.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFE4E9] to-[#FFD0DC]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start IBI Therapy Today</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our intensive behavioral intervention programs and how our qualified team can help.
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
