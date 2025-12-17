import { Users, Check, Star, Heart, Sun, Smile } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Link } from "react-router-dom";

export function SocialSkillsPage() {
  const skills = [
    "Making and maintaining friendships",
    "Understanding social cues",
    "Turn-taking and sharing",
    "Conversation skills",
    "Emotional recognition",
    "Conflict resolution",
    "Group participation",
    "Empathy development"
  ];

  const features = [
    { title: "Small Group Sessions", description: "Child-led sessions in supportive, structured environments" },
    { title: "Shared Interests", description: "Activities based on common interests for natural social interaction" },
    { title: "Peer Engagement", description: "Encouragement of meaningful connections with peers" },
    { title: "Multidisciplinary Approach", description: "Integrated strategies from various therapeutic disciplines" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#D4F1E8] to-white overflow-hidden">
        <div className="absolute top-24 right-20 animate-bounce" style={{ animationDuration: '3.9s' }}>
          <Star className="w-10 h-10 text-[#4ECDC4] fill-[#4ECDC4] opacity-40" />
        </div>
        <div className="absolute top-40 left-24 animate-bounce" style={{ animationDuration: '4.4s', animationDelay: '0.4s' }}>
          <Heart className="w-9 h-9 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '0.7s' }}>
          <Smile className="w-10 h-10 text-[#FFD700] fill-[#FFD700] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.2s' }}>
          <Sun className="w-11 h-11 text-[#FFA07A] fill-[#FFA07A] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/services" className="inline-block mb-4">
            <span className="text-sm text-primary hover:underline">← Back to Services</span>
          </Link>
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D4F1E8] to-[#B8E6D5] flex items-center justify-center shadow-xl">
            <Users className="w-10 h-10 text-[#4ECDC4]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Social Skills Development
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building confidence and meaningful connections through structured social interaction
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 rounded-3xl border-2 border-[#D4F1E8] mb-12">
              <h2 className="text-3xl font-bold mb-6">Multidisciplinary Approach to Social Skills</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At AIM, we use a multidisciplinary approach to develop social interaction strategies within our 
                individualized therapeutic programs, helping children navigate school interactions, peer relationships, 
                and everyday social situations with confidence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Through structured activities and small group sessions, we encourage peer engagement in a supportive 
                environment. These child-led sessions focus on shared interests, allowing for natural social 
                interactions, turn-taking, and communication practice.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By fostering positive social experiences, we help children build the skills necessary for meaningful 
                connections and long-term social success.
              </p>
            </Card>

            {/* Skills Developed */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Skills We Develop</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#D4F1E8]/30 to-[#B8E6D5]/30 rounded-2xl">
                    <Check className="w-5 h-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Program Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6 rounded-3xl border-2 border-border hover:border-primary/20 transition-all hover:shadow-xl">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Session Structure */}
            <Card className="p-8 rounded-3xl border-2 border-border">
              <h3 className="text-2xl font-bold mb-4">How Our Sessions Work</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4F1E8] to-[#B8E6D5] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#4ECDC4]">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Interest-Based Grouping</h4>
                    <p className="text-sm text-muted-foreground">Children are grouped based on shared interests to facilitate natural connections.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4F1E8] to-[#B8E6D5] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#4ECDC4]">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Structured Activities</h4>
                    <p className="text-sm text-muted-foreground">Guided activities that promote social interaction while maintaining a supportive structure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4F1E8] to-[#B8E6D5] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#4ECDC4]">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Communication Practice</h4>
                    <p className="text-sm text-muted-foreground">Real-world practice of conversation skills, turn-taking, and social cues.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4F1E8] to-[#B8E6D5] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#4ECDC4]">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Positive Reinforcement</h4>
                    <p className="text-sm text-muted-foreground">Building confidence through celebration of social successes and progress.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#D4F1E8] to-[#B8E6D5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Help Your Child Build Lasting Friendships</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our social skills groups and watch your child develop confidence in social situations.
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
