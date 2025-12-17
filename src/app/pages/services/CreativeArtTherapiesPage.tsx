import { Palette, Check, Star, Heart, Sun, Music } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Link } from "react-router-dom";

export function CreativeArtTherapiesPage() {
  const benefits = [
    "Foster developmental growth",
    "Enhance social interaction skills",
    "Support expressive communication",
    "Develop interpersonal skills",
    "Improve behavior management",
    "Reduce stress and anxiety",
    "Increase self-esteem",
    "Build self-awareness and insight"
  ];

  const therapies = [
    {
      icon: Music,
      title: "Music Therapy",
      description: "Using rhythm, melody, and sound to enhance communication, emotional expression, and motor development.",
      benefits: ["Emotional expression", "Communication skills", "Motor coordination", "Social engagement"]
    },
    {
      icon: Palette,
      title: "Art Therapy",
      description: "Creative visual arts to help children express themselves, process emotions, and develop fine motor skills.",
      benefits: ["Self-expression", "Emotional processing", "Fine motor skills", "Creative thinking"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#FFE7D9] to-white overflow-hidden">
        <div className="absolute top-24 right-20 animate-bounce" style={{ animationDuration: '3.9s' }}>
          <Star className="w-10 h-10 text-[#FFA07A] fill-[#FFA07A] opacity-40" />
        </div>
        <div className="absolute top-40 left-24 animate-bounce" style={{ animationDuration: '4.4s', animationDelay: '0.4s' }}>
          <Heart className="w-9 h-9 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '0.7s' }}>
          <Music className="w-10 h-10 text-[#9B72E5] fill-[#9B72E5] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.2s' }}>
          <Sun className="w-11 h-11 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/services" className="inline-block mb-4">
            <span className="text-sm text-primary hover:underline">← Back to Services</span>
          </Link>
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#FFE7D9] to-[#FFD4B8] flex items-center justify-center shadow-xl">
            <Palette className="w-10 h-10 text-[#FFA07A]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Creative Art Therapies
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Music and Art Therapy to foster developmental, social, and expressive needs
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 rounded-3xl border-2 border-[#FFE7D9] mb-12">
              <h2 className="text-3xl font-bold mb-6">Pioneering Creative Therapies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AIM is proud to be the region's first ASD service provider to offer Music and Art Therapy as part 
                of our group programs. These creative therapies foster developmental, social, and expressive needs 
                of each child.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These interventions are based on the belief that the creative process involved in artistic 
                self-expression helps children with autism develop interpersonal skills, manage behavior, reduce 
                stress, increase self-esteem and self-awareness, and achieve insight.
              </p>
            </Card>

            {/* Therapy Types */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {therapies.map((therapy, index) => (
                <Card key={index} className="p-8 rounded-3xl border-2 border-border hover:border-primary/20 transition-all hover:shadow-xl">
                  <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-[#FFE7D9] to-[#FFD4B8] flex items-center justify-center">
                    <therapy.icon className="w-8 h-8 text-[#FFA07A]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{therapy.title}</h3>
                  <p className="text-muted-foreground mb-4">{therapy.description}</p>
                  <div className="space-y-2">
                    {therapy.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFA07A]" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Creative Art Therapies</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFE7D9]/30 to-[#FFD4B8]/30 rounded-2xl">
                    <Check className="w-5 h-5 text-[#FFA07A] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Details */}
            <Card className="p-8 rounded-3xl border-2 border-[#FFE7D9]">
              <h3 className="text-2xl font-bold mb-6">Group Program Format</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our creative art therapy sessions are offered as part of structured group programs, providing 
                  children with opportunities to engage with peers while exploring their creativity.
                </p>
                <p>
                  Each session is led by trained therapists who specialize in using music and art as therapeutic 
                  tools. Activities are tailored to each child's developmental level and therapeutic goals, ensuring 
                  meaningful engagement and progress.
                </p>
                <p>
                  The group setting not only enhances the therapeutic benefits of the creative arts but also provides 
                  valuable opportunities for social interaction and skill development.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFE7D9] to-[#FFD4B8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Creative Therapies</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our creative art therapy programs and discover the power of music and art in your child's development.
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
