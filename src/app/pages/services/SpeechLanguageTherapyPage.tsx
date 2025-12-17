import { MessageSquare, Check, Star, Heart, Sun, Volume2 } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Link } from "react-router-dom";

export function SpeechLanguageTherapyPage() {
  const areas = [
    "Unclear speech and articulation",
    "Language delays",
    "Articulation difficulties",
    "Social communication deficits",
    "Expressive language development",
    "Receptive language skills",
    "Pragmatic language",
    "Voice and fluency disorders"
  ];

  const approaches = [
    { title: "Comprehensive Assessment", description: "Thorough evaluation of communication skills and needs" },
    { title: "Multidisciplinary Integration", description: "Collaborative approach with ABA and other therapies" },
    { title: "Functional Communication", description: "Focus on practical, everyday communication skills" },
    { title: "Family Involvement", description: "Parent training and home practice strategies" }
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
          <Volume2 className="w-10 h-10 text-[#9B72E5] fill-[#9B72E5] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.2s' }}>
          <Sun className="w-11 h-11 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/services" className="inline-block mb-4">
            <span className="text-sm text-primary hover:underline">← Back to Services</span>
          </Link>
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D5E8F7] to-[#B8DAFF] flex items-center justify-center shadow-xl">
            <MessageSquare className="w-10 h-10 text-[#5BA4E5]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Speech Language Therapy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive multidisciplinary intervention for effective communication development
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 rounded-3xl border-2 border-[#D5E8F7] mb-12">
              <h2 className="text-3xl font-bold mb-6">Collaborative Speech-Language Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collaborate with highly skilled Speech-Language Pathologists (SLPs) to provide a comprehensive 
                and multidisciplinary intervention tailored to each child's unique needs. Speech-Language Therapy 
                addresses a wide range of communication challenges, including unclear speech, language delays, 
                articulation difficulties, and social communication deficits.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By integrating speech therapy with our ABA services, we create a cohesive approach that supports 
                effective communication, functional language development, and improved social interactions. This 
                collaborative model ensures that children receive consistent, coordinated care across all therapeutic 
                domains.
              </p>
            </Card>

            {/* Areas Addressed */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Communication Areas We Address</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#D5E8F7]/30 to-[#B8DAFF]/30 rounded-2xl">
                    <Check className="w-5 h-5 text-[#5BA4E5] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Approaches */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Treatment Approach</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {approaches.map((approach, index) => (
                  <Card key={index} className="p-6 rounded-3xl border-2 border-border hover:border-primary/20 transition-all hover:shadow-xl">
                    <h3 className="text-xl font-bold mb-2">{approach.title}</h3>
                    <p className="text-sm text-muted-foreground">{approach.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Integration with ABA */}
            <Card className="p-8 rounded-3xl border-2 border-[#D5E8F7]">
              <h3 className="text-2xl font-bold mb-6">Integration with ABA Services</h3>
              <p className="text-muted-foreground mb-4">
                Our unique multidisciplinary model combines Speech-Language Therapy with Applied Behavior Analysis 
                to create a comprehensive communication intervention program. This integration allows us to:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#5BA4E5] flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Address both the mechanics of speech and the behavioral aspects of communication</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#5BA4E5] flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Ensure consistency in communication strategies across all settings</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#5BA4E5] flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Maximize progress through coordinated, reinforced learning</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#5BA4E5] flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Support functional communication in real-world contexts</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#D5E8F7] to-[#B8DAFF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your Child's Communication Skills</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our collaborative speech-language therapy approach can help your child develop effective communication skills.
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
