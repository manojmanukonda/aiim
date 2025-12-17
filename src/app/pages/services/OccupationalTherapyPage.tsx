import { Activity, Check, Star, Heart, Sun, Hand } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Link } from "react-router-dom";

export function OccupationalTherapyPage() {
  const conditions = [
    "Autism Spectrum Disorder (ASD)",
    "Attention Deficit Hyperactivity Disorder (ADHD)",
    "Developmental delays",
    "Sensory processing disorders",
    "Fine motor difficulties",
    "Visual-motor integration challenges",
    "Self-care skill deficits",
    "Coordination difficulties"
  ];

  const skills = [
    { title: "Daily Living Skills", description: "Essential self-care and independence skills for everyday life" },
    { title: "School Integration", description: "Skills needed to participate successfully in educational settings" },
    { title: "Home Engagement", description: "Meaningful participation in family activities and routines" },
    { title: "Community Participation", description: "Skills for successful integration in community settings" }
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
          <Hand className="w-10 h-10 text-[#9B72E5] fill-[#9B72E5] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.2s' }}>
          <Sun className="w-11 h-11 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/services" className="inline-block mb-4">
            <span className="text-sm text-primary hover:underline">← Back to Services</span>
          </Link>
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D4F1E8] to-[#B8E6D5] flex items-center justify-center shadow-xl">
            <Activity className="w-10 h-10 text-[#4ECDC4]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Occupational Therapy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Specialized occupational therapy for children with ASD, ADHD and developmental needs
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 rounded-3xl border-2 border-[#D4F1E8] mb-12">
              <h2 className="text-3xl font-bold mb-6">Expert Occupational Therapy Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We offer specialized occupational therapy for children with autism spectrum disorder (ASD), 
                attention deficit hyperactivity disorder (ADHD) and a wide range of developmental and sensory 
                needs delivered by registered and trained OTs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our OTs work collaboratively with families, individuals, and professionals to develop essential 
                daily living skills, enabling children to engage, participate, and integrate successfully across 
                home, school, and community settings. Through evidence-based interventions and family-centered 
                approaches, we help children achieve greater independence and quality of life.
              </p>
            </Card>

            {/* Conditions We Address */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Conditions We Address</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#D4F1E8]/30 to-[#B8E6D5]/30 rounded-2xl">
                    <Check className="w-5 h-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{condition}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Development Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Skills We Develop</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <Card key={index} className="p-6 rounded-3xl border-2 border-border hover:border-primary/20 transition-all hover:shadow-xl">
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Collaborative Approach */}
            <Card className="p-8 rounded-3xl border-2 border-border">
              <h3 className="text-2xl font-bold mb-4">Our Collaborative Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4F1E8] to-[#B8E6D5] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#4ECDC4]">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Family Collaboration</h4>
                    <p className="text-sm text-muted-foreground">Working closely with families to understand goals and priorities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4F1E8] to-[#B8E6D5] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#4ECDC4]">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Comprehensive Assessment</h4>
                    <p className="text-sm text-muted-foreground">Thorough evaluation of sensory, motor, and functional skills.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4F1E8] to-[#B8E6D5] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#4ECDC4]">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Individualized Programming</h4>
                    <p className="text-sm text-muted-foreground">Tailored interventions based on each child's unique needs and goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4F1E8] to-[#B8E6D5] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#4ECDC4]">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Cross-Setting Integration</h4>
                    <p className="text-sm text-muted-foreground">Ensuring skills transfer across home, school, and community environments.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Empower Your Child's Independence</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our registered occupational therapists can help your child develop the skills they need to thrive.
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
