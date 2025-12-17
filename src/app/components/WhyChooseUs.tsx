import { Smile, Clock, Trophy, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Smile,
    title: "Fun & Engaging",
    description: "We make therapy feel like playtime! Our sessions are designed to be enjoyable and motivating for children.",
    emoji: "🎨"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your family's busy schedule with convenient appointment times and locations.",
    emoji: "⏰"
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Our evidence-based approaches and dedicated team consistently help children achieve their goals.",
    emoji: "🌟"
  },
  {
    icon: HeartHandshake,
    title: "Family-Centered",
    description: "We partner with families every step of the way, providing coaching and support at home.",
    emoji: "❤️"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#FFF9F5] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFE4E9] to-[#FFD89D] rounded-full text-sm font-semibold mb-4">
            🏆 Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-muted-foreground">
            We're more than just a therapy center – we're a community dedicated to celebrating 
            every child's unique abilities and helping them shine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative space-y-4">
                {/* Emoji decoration */}
                <div className="text-4xl mb-2">{reason.emoji}</div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#FFE4E9] via-[#E9DFFF] to-[#D5E8F7] rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/30 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-white/30 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a complimentary consultation to learn how we can support your child's development journey.
            </p>
            <button className="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
