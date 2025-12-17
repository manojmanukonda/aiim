import { CheckCircle, Users, Award, Target, Moon, Star, Sparkles } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Licensed and certified therapists with specialized pediatric training"
    },
    {
      icon: Target,
      title: "Personalized Plans",
      description: "Customized therapy programs tailored to each child's unique goals"
    },
    {
      icon: Award,
      title: "Evidence-Based",
      description: "Proven therapeutic approaches backed by current research"
    }
  ];

  const benefits = [
    "Play-based, child-centered approach",
    "Parent coaching and support included",
    "Flexible scheduling options",
    "Insurance accepted",
    "Progress tracking and regular updates",
    "Collaborative team approach"
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E9DFFF] rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D5E8F7] rounded-full blur-3xl opacity-30" />

      {/* Cute floating decorations */}
      <div className="absolute top-32 right-24 animate-bounce" style={{ animationDuration: '3.5s' }}>
        <Moon className="w-10 h-10 text-[#A8D5FF] fill-[#A8D5FF] opacity-40" />
      </div>
      <div className="absolute top-48 left-16 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
        <Star className="w-8 h-8 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
      </div>
      <div className="absolute bottom-40 right-20 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '1s' }}>
        <Sparkles className="w-9 h-9 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
      </div>
      <div className="absolute bottom-24 left-32 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '0.7s' }}>
        <Star className="w-7 h-7 text-[#E9DFFF] fill-[#E9DFFF] opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1544772711-57da9c7368fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG9jY3VwYXRpb25hbCUyMHRoZXJhcHl8ZW58MXx8fHwxNzY1ODgwNjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Therapy session"
                  className="w-full h-48 object-cover rounded-3xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1631032024590-140cc8dd4b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjBwbGF5aW5nfGVufDF8fHx8MTc2NTg5MjkxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Children learning"
                  className="w-full h-64 object-cover rounded-3xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1613002864483-7464b6bd442e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwY2hpbGQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU4MDUwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Smiling child"
                  className="w-full h-56 object-cover rounded-3xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1633104319071-4fa6fa12a613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlyb29tfGVufDF8fHx8MTc2NTg5MjkxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Playroom"
                  className="w-full h-56 object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border-2 border-[#FFE4E9]">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years of Care</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFE4E9] to-[#D5E8F7] rounded-full text-sm font-semibold mb-4">
                💝 About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Where Every Child's Journey Matters
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At AIM Pediatric Therapy, we believe every child deserves the opportunity to thrive. 
                Our team of compassionate, experienced therapists works closely with families to create 
                joyful, engaging therapy experiences that help children reach their full potential.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits list */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-border">
              <h3 className="font-bold mb-4">What Makes Us Special:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
