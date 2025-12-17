import { Sparkles, Check, Star, Heart, Sun, Zap } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Link } from "react-router-dom";

export function RelaxationPage() {
  const strategies = [
    "Breathing exercises",
    "Motor-based activities",
    "Yoga practices",
    "Mindfulness techniques",
    "Sensory regulation tools",
    "Progressive muscle relaxation",
    "Visualization exercises",
    "Grounding techniques"
  ];

  const benefits = [
    { title: "Anxiety Management", description: "Learn to manage anxiety and stressful situations effectively" },
    { title: "Emotional Regulation", description: "Develop skills to recognize and regulate emotions" },
    { title: "Self-Awareness", description: "Increase awareness of body signals and emotional states" },
    { title: "Independence", description: "Use techniques independently when needed most" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#FFF4D9] to-white overflow-hidden">
        <div className="absolute top-24 right-20 animate-bounce" style={{ animationDuration: '3.9s' }}>
          <Star className="w-10 h-10 text-[#FFD700] fill-[#FFD700] opacity-40" />
        </div>
        <div className="absolute top-40 left-24 animate-bounce" style={{ animationDuration: '4.4s', animationDelay: '0.4s' }}>
          <Heart className="w-9 h-9 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '0.7s' }}>
          <Zap className="w-10 h-10 text-[#9B72E5] fill-[#9B72E5] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.2s' }}>
          <Sun className="w-11 h-11 text-[#FFA07A] fill-[#FFA07A] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/services" className="inline-block mb-4">
            <span className="text-sm text-primary hover:underline">← Back to Services</span>
          </Link>
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#FFF4D9] to-[#FFE9B8] flex items-center justify-center shadow-xl">
            <Sparkles className="w-10 h-10 text-[#FFD700]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Relaxation & Self-Regulation Training
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Evidence-based strategies to help children manage anxiety and maintain emotional well-being
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 rounded-3xl border-2 border-[#FFF4D9] mb-12">
              <h2 className="text-3xl font-bold mb-6">Lifelong Skills for Emotional Well-Being</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At AIM, we focus on equipping children with evidence-based relaxation and self-regulation strategies 
                to help them manage anxiety or stressful situations effectively. Through breathing exercises, 
                motor-based activities, and yoga, we provide structured training that is practiced consistently 
                until these techniques can be used independently.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each child's behavior patterns are tracked, allowing us to develop personalized strategies that 
                support their unique needs. By integrating self-regulation training into our programs, we empower 
                children with lifelong skills to navigate stress and maintain emotional well-being.
              </p>
            </Card>

            {/* Strategies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Evidence-Based Strategies</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {strategies.map((strategy, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFF4D9]/30 to-[#FFE9B8]/30 rounded-2xl">
                    <Check className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{strategy}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="p-6 rounded-3xl border-2 border-border hover:border-primary/20 transition-all hover:shadow-xl">
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Our Approach */}
            <Card className="p-8 rounded-3xl border-2 border-border">
              <h3 className="text-2xl font-bold mb-4">Our Training Process</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF4D9] to-[#FFE9B8] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#FFD700]">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Assessment & Tracking</h4>
                    <p className="text-sm text-muted-foreground">We track each child's behavior patterns to understand their unique triggers and needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF4D9] to-[#FFE9B8] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#FFD700]">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Personalized Strategy Development</h4>
                    <p className="text-sm text-muted-foreground">Create customized relaxation techniques tailored to each child's specific needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF4D9] to-[#FFE9B8] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#FFD700]">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Structured Practice</h4>
                    <p className="text-sm text-muted-foreground">Consistent practice until techniques become automatic and can be used independently.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF4D9] to-[#FFE9B8] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#FFD700]">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Real-World Application</h4>
                    <p className="text-sm text-muted-foreground">Apply strategies in everyday situations to build confidence and independence.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFF4D9] to-[#FFE9B8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Lifelong Coping Skills</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Help your child develop the self-regulation skills they need to navigate life's challenges with confidence.
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
