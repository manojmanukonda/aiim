import { Star, Moon, Sparkles, Sun } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Clinical Director & Occupational Therapist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    bio: "15+ years experience in pediatric occupational therapy with specialization in sensory processing disorders.",
    credentials: "OTR/L, SIPT Certified"
  },
  {
    name: "Emily Rodriguez",
    role: "Speech-Language Pathologist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    bio: "Passionate about helping children find their voice through innovative speech therapy techniques.",
    credentials: "MS, CCC-SLP"
  },
  {
    name: "Michael Chen",
    role: "Physical Therapist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    bio: "Specializes in pediatric movement disorders and developmental delays with a focus on functional outcomes.",
    credentials: "DPT, PCS"
  },
  {
    name: "Dr. Amanda Williams",
    role: "Board Certified Behavior Analyst",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    bio: "Expert in ABA therapy with a compassionate, family-centered approach to autism intervention.",
    credentials: "PhD, BCBA-D"
  },
  {
    name: "Jessica Martinez",
    role: "Music Therapist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    bio: "Uses the power of music to unlock communication and emotional expression in children.",
    credentials: "MT-BC"
  },
  {
    name: "David Thompson",
    role: "Social Skills Facilitator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    bio: "Creates engaging group activities that build confidence and social competence in children.",
    credentials: "MS Ed, LMFT"
  }
];

export function TeamPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#FFF9F5] to-white overflow-hidden">
        {/* Cute floating decorations */}
        <div className="absolute top-20 right-20 animate-bounce" style={{ animationDuration: '3.5s' }}>
          <Star className="w-10 h-10 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
        </div>
        <div className="absolute top-32 left-16 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
          <Moon className="w-12 h-12 text-[#A8D5FF] fill-[#A8D5FF] opacity-40" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '1s' }}>
          <Sparkles className="w-9 h-9 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-24 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '0.7s' }}>
          <Sun className="w-11 h-11 text-[#FFA07A] fill-[#FFA07A] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFE4E9] to-[#E9DFFF] rounded-full text-sm font-semibold mb-4">
            👥 Our Team
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meet Our Expert Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team of dedicated professionals brings years of experience, compassion, and expertise 
            to help every child reach their full potential.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="text-sm text-muted-foreground italic">{member.credentials}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF9F5]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#FFE4E9]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Amazing Team!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're always looking for passionate, dedicated professionals to join our growing team.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-all">
              View Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
