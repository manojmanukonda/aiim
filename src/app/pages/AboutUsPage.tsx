import { Heart, Target, Users, Award, Star, Moon, Sparkles, Sun } from "lucide-react";
import { Card } from "../components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every child and family with empathy, respect, and understanding."
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "We set measurable goals and celebrate every milestone achieved."
  },
  {
    icon: Users,
    title: "Family-Centered",
    description: "We partner with families as active participants in their child's therapy journey."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards of clinical practice and ongoing education."
  }
];

const stats = [
  { number: "15+", label: "Years of Experience" },
  { number: "1000+", label: "Children Served" },
  { number: "20+", label: "Expert Therapists" },
  { number: "95%", label: "Family Satisfaction" }
];

export function AboutUsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#FFF9F5] to-white overflow-hidden">
        {/* Decorations */}
        <div className="absolute top-24 right-20 animate-bounce" style={{ animationDuration: '3.8s' }}>
          <Star className="w-10 h-10 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
        </div>
        <div className="absolute top-40 left-24 animate-bounce" style={{ animationDuration: '4.3s', animationDelay: '0.5s' }}>
          <Moon className="w-9 h-9 text-[#A8D5FF] fill-[#A8D5FF] opacity-40" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '4.1s', animationDelay: '0.8s' }}>
          <Sparkles className="w-10 h-10 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDuration: '3.9s', animationDelay: '0.3s' }}>
          <Sun className="w-11 h-11 text-[#FFA07A] fill-[#FFA07A] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFE4E9] to-[#D5E8F7] rounded-full text-sm font-semibold mb-4">
            💙 About AIM Pediatric Therapy
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Helping Children Reach Their Full Potential
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At AIM Pediatric Therapy, we're dedicated to providing exceptional therapy services that 
            help children thrive. Our team of expert therapists uses evidence-based practices combined 
            with a playful, child-centered approach.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AIM Pediatric Therapy was founded in 2008 with a simple mission: to provide high-quality, 
                  compassionate therapy services that make a real difference in children's lives. What started 
                  as a small clinic with two therapists has grown into a comprehensive therapy center serving 
                  hundreds of families each year.
                </p>
                <p>
                  Our founders recognized that traditional therapy approaches weren't always engaging for 
                  children. They pioneered a play-based methodology that makes therapy sessions fun and 
                  effective, leading to better outcomes and happier children.
                </p>
                <p>
                  Today, we're proud to be a trusted resource for families seeking occupational therapy, 
                  speech therapy, physical therapy, ABA therapy, music therapy, and social skills development. 
                  Our multidisciplinary team works together to provide comprehensive, coordinated care.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Children at AIM Pediatric Therapy"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF9F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 rounded-3xl border-2 border-border hover:border-primary/20 transition-all hover:shadow-xl text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF9F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 rounded-3xl border-2 border-[#FFE4E9]">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional, evidence-based therapy services in a nurturing environment where 
                children can reach their full potential. We empower families with knowledge, support, and 
                tools to continue their child's growth beyond our therapy rooms.
              </p>
            </Card>

            <Card className="p-8 rounded-3xl border-2 border-[#D5E8F7]">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the premier pediatric therapy center in our community, recognized for clinical 
                excellence, innovation in treatment approaches, and unwavering commitment to helping 
                every child succeed. We envision a future where all children have access to the support 
                they need to thrive.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Accreditations & Certifications</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our team maintains the highest professional standards and continues ongoing education to 
            provide the best possible care.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="px-6 py-3 bg-white rounded-full border-2 border-border shadow-lg">
              ASHA Certified
            </div>
            <div className="px-6 py-3 bg-white rounded-full border-2 border-border shadow-lg">
              AOTA Member
            </div>
            <div className="px-6 py-3 bg-white rounded-full border-2 border-border shadow-lg">
              BACB Certified
            </div>
            <div className="px-6 py-3 bg-white rounded-full border-2 border-border shadow-lg">
              APTA Member
            </div>
            <div className="px-6 py-3 bg-white rounded-full border-2 border-border shadow-lg">
              CBMT Certified
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our AIM Family</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the difference that compassionate, expert care can make in your child's life.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl transition-all">
            Schedule Your Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
