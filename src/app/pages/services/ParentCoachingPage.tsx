import { Users, Check, Star, Heart, Sun, Globe } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Link } from "react-router-dom";

export function ParentCoachingPage() {
  const benefits = [
    "Learn teaching strategies appropriate for your child",
    "Recognize teachable moments in everyday life",
    "Implement evidence-based techniques at home",
    "Develop consistency across environments",
    "Build confidence in supporting your child",
    "Create positive learning opportunities",
    "Strengthen parent-child bond",
    "Collaborate effectively with therapists"
  ];

  const languages = [
    { lang: "English", flag: "🇬🇧" },
    { lang: "French", flag: "🇫🇷" },
    { lang: "Arabic", flag: "🇸🇦" },
    { lang: "Hindi", flag: "🇮🇳" },
    { lang: "Punjabi", flag: "🇮🇳" },
    { lang: "Urdu", flag: "🇵🇰" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#D5E8F7] to-white overflow-hidden">
        <div className="absolute top-24 right-20 animate-bounce" style={{ animationDuration: '3.9s' }}>
          <Star className="w-10 h-10 text-[#5BA4E5] fill-[#5BA4E5] opacity-40" />
        </div>
        <div className="absolute top-40 left-24 animate-bounce" style={{ animationDuration: '4.4s', animationDelay: '0.4s' }}>
          <Heart className="w-9 h-9 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '0.7s' }}>
          <Sun className="w-10 h-10 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.2s' }}>
          <Globe className="w-11 h-11 text-[#5BA4E5] fill-[#5BA4E5] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/services" className="inline-block mb-4">
            <span className="text-sm text-primary hover:underline">← Back to Services</span>
          </Link>
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D5E8F7] to-[#B8DAFF] flex items-center justify-center shadow-xl">
            <Users className="w-10 h-10 text-[#5BA4E5]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Parent Coaching
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empowering parents to become effective partners in their child's therapeutic journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 rounded-3xl border-2 border-[#D5E8F7] mb-12">
              <h2 className="text-3xl font-bold mb-6">The Power of Parent Coaching</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We acknowledge the most significant position you as a parent hold in your child's life. Parents are 
                their child's first and most important teachers, and we believe in empowering you with the knowledge 
                and skills to support your child's development every day.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We'll work closely with you, coaching you on how to develop and implement the teaching strategies that 
                are most appropriate for your child, as well as help you recognize the many teachable moments in your 
                child's everyday life. Our coaching ensures that the progress made in therapy sessions continues at home 
                and in the community.
              </p>
            </Card>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#D5E8F7]/30 to-[#B8DAFF]/30 rounded-2xl">
                    <Check className="w-5 h-5 text-[#5BA4E5] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Available */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Coaching Available In Multiple Languages</h2>
              <Card className="p-8 rounded-3xl border-2 border-[#D5E8F7]">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {languages.map((item, index) => (
                    <div key={index} className="text-center p-4 bg-gradient-to-r from-[#D5E8F7]/20 to-[#B8DAFF]/20 rounded-2xl">
                      <div className="text-4xl mb-2">{item.flag}</div>
                      <p className="font-semibold">{item.lang}</p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-muted-foreground mt-6">
                  We believe in making our services accessible to all families, regardless of language barriers.
                </p>
              </Card>
            </div>

            {/* Approach */}
            <Card className="p-8 rounded-3xl border-2 border-border">
              <h3 className="text-2xl font-bold mb-4">Our Coaching Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D5E8F7] to-[#B8DAFF] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#5BA4E5]">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Assessment & Goal Setting</h4>
                    <p className="text-sm text-muted-foreground">We work together to identify your family's unique needs and goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D5E8F7] to-[#B8DAFF] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#5BA4E5]">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Strategy Training</h4>
                    <p className="text-sm text-muted-foreground">Learn evidence-based techniques through hands-on practice and demonstration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D5E8F7] to-[#B8DAFF] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#5BA4E5]">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Implementation & Practice</h4>
                    <p className="text-sm text-muted-foreground">Apply strategies in real-life situations with guidance and feedback.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D5E8F7] to-[#B8DAFF] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#5BA4E5]">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Ongoing Support</h4>
                    <p className="text-sm text-muted-foreground">Continuous coaching to refine skills and address new challenges.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#D5E8F7] to-[#B8DAFF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Empower Yourself as a Parent</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our parent coaching program and gain the tools and confidence to support your child's development every day.
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
