import { Star, Quote, Heart, Sparkles, Rocket } from "lucide-react";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Mother of Emma, 5",
    text: "The therapists at AIM are absolutely wonderful! My daughter looks forward to every session. We've seen incredible progress in her speech and social skills. The team truly cares about each child's success.",
    rating: 5,
    color: "from-[#FFE4E9] to-[#FFD0DC]"
  },
  {
    name: "James L.",
    role: "Father of Lucas, 7",
    text: "We've tried other therapy centers, but nothing compares to AIM. The play-based approach makes therapy fun for Lucas, and the parent coaching has been invaluable. Highly recommend!",
    rating: 5,
    color: "from-[#D5E8F7] to-[#B8DAFF]"
  },
  {
    name: "Maria G.",
    role: "Mother of twins, 4",
    text: "Having twins with different needs was challenging, but AIM created individualized plans for both children. The progress they've made in occupational therapy has been amazing. The team is so supportive!",
    rating: 5,
    color: "from-[#E9DFFF] to-[#D4C5FF]"
  },
  {
    name: "David K.",
    role: "Father of Sophia, 6",
    text: "The ABA therapy program has been life-changing for our daughter. The therapists are patient, creative, and truly understand how to work with children on the spectrum. We're so grateful!",
    rating: 5,
    color: "from-[#D4F1E8] to-[#B8E6D5]"
  },
  {
    name: "Jennifer R.",
    role: "Mother of Noah, 3",
    text: "From the very first evaluation, we knew we found the right place. The therapists are not only skilled but genuinely love what they do. Noah has made tremendous progress in his motor skills!",
    rating: 5,
    color: "from-[#FFE7D9] to-[#FFD4B8]"
  },
  {
    name: "Michael T.",
    role: "Father of Ava, 8",
    text: "The team at AIM goes above and beyond. They communicate regularly, celebrate every milestone, and make us feel like family. Our daughter's confidence has soared since starting therapy here.",
    rating: 5,
    color: "from-[#FFF4D9] to-[#FFE9B8]"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#FFF9F5] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#FFE4E9] rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D5E8F7] rounded-full blur-3xl opacity-20" />

      {/* Cute floating decorations */}
      <div className="absolute top-24 right-20 animate-bounce" style={{ animationDuration: '3.6s' }}>
        <Heart className="w-9 h-9 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
      </div>
      <div className="absolute top-48 left-24 animate-bounce" style={{ animationDuration: '4.1s', animationDelay: '0.6s' }}>
        <Star className="w-8 h-8 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
      </div>
      <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '3.9s', animationDelay: '0.9s' }}>
        <Sparkles className="w-10 h-10 text-[#9B72E5] fill-[#9B72E5] opacity-40" />
      </div>
      <div className="absolute bottom-40 left-16 animate-bounce" style={{ animationDuration: '4.3s', animationDelay: '0.4s' }}>
        <Rocket className="w-9 h-9 text-[#4ECDC4] fill-[#4ECDC4] opacity-40 rotate-45" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFE4E9] to-[#E9DFFF] rounded-full text-sm font-semibold mb-4">
            💬 Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Families Are Saying
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it – hear from the families we've had the privilege to serve.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl rounded-3xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-30`} />
              
              <div className="relative p-8 space-y-4">
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary fill-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border/50">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Happy Families</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-[#D4F1E8] mb-1">200+</div>
            <div className="text-sm text-muted-foreground">5-Star Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}