import { Briefcase, GraduationCap, Heart, Users, Mail, Clock, MapPin, CheckCircle } from "lucide-react";
import { Card } from "../components/ui/card";

const positions = [
  {
    title: "Instructor Therapist",
    type: "Full-time / Part-time",
    icon: GraduationCap,
    color: "from-[#D5E8F7] to-[#B8DAFF]",
    iconColor: "#5BA4E5",
    description: "Work directly with children using evidence-based therapeutic approaches to help them reach their full potential."
  },
  {
    title: "Senior Therapist",
    type: "Full-time / Part-time",
    icon: Heart,
    color: "from-[#E9DFFF] to-[#D4C5FF]",
    iconColor: "#9B72E5",
    description: "Lead therapeutic programs and mentor junior staff while providing expert care to children and families."
  },
  {
    title: "Child and Youth Worker (CYW)",
    type: "Full-time / Part-time",
    icon: Users,
    color: "from-[#FFE4E9] to-[#FFD0DC]",
    iconColor: "#FF6B9D",
    description: "Support children through Education, Respite, and Behaviour Management Services in a caring environment."
  }
];

const benefits = [
  "Competitive salary and comprehensive benefits package",
  "Professional development and continuing education opportunities",
  "Supportive and collaborative team environment",
  "Flexible scheduling options available",
  "Opportunity to make a meaningful difference in children's lives",
  "Modern facilities and resources",
  "Mentorship and career growth opportunities",
  "Work-life balance"
];

const requirements = [
  "University degree or college diploma in related field",
  "Experience working with individuals with Autism",
  "Passionate about helping children and families",
  "Strong communication and interpersonal skills",
  "Team player with a positive attitude",
  "Reliable and professional demeanor"
];

export function CareersPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E9DFFF] via-[#FFE4E9] to-[#D5E8F7] py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-4 bg-white rounded-full mb-6 shadow-lg">
            <Briefcase className="w-12 h-12 text-[#9B72E5]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Our Team!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are always looking for enthusiastic and passionate professionals to join our team. 
            Be part of something special and help make a lasting impact on children and families.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 rounded-3xl border-2 bg-gradient-to-br from-[#FFF9F5] to-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Why Work With AIM Pediatric Therapy?
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
                At AIM Pediatric Therapy, we believe in creating a nurturing environment not just for the children 
                we serve, but also for our team members. Join a dedicated group of professionals who are passionate 
                about making a real difference in the lives of children with autism and developmental differences.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#D5E8F7] to-[#B8DAFF] flex items-center justify-center">
                    <Heart className="w-8 h-8 text-[#5BA4E5]" />
                  </div>
                  <h3 className="font-bold mb-2">Meaningful Work</h3>
                  <p className="text-sm text-muted-foreground">
                    Make a lasting impact on children and families every day
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#E9DFFF] to-[#D4C5FF] flex items-center justify-center">
                    <Users className="w-8 h-8 text-[#9B72E5]" />
                  </div>
                  <h3 className="font-bold mb-2">Supportive Team</h3>
                  <p className="text-sm text-muted-foreground">
                    Collaborate with passionate professionals who care
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#FFE4E9] to-[#FFD0DC] flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-[#FF6B9D]" />
                  </div>
                  <h3 className="font-bold mb-2">Grow Your Career</h3>
                  <p className="text-sm text-muted-foreground">
                    Access ongoing training and development opportunities
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FFF9F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full and part-time positions are available in all services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {positions.map((position, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-3xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${position.color} opacity-50 group-hover:opacity-70 transition-opacity`} />
                
                <div className="relative p-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <position.icon className="w-8 h-8" style={{ color: position.iconColor }} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {position.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements and Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Requirements */}
            <Card className="p-8 rounded-3xl border-2 bg-gradient-to-br from-[#FFF9F5] to-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E9DFFF] to-[#D4C5FF] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#9B72E5]" />
                </div>
                Requirements
              </h3>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Benefits */}
            <Card className="p-8 rounded-3xl border-2 bg-gradient-to-br from-[#FFF9F5] to-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFE4E9] to-[#FFD0DC] flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#FF6B9D]" />
                </div>
                What We Offer
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#9B72E5] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-20 bg-gradient-to-br from-[#E9DFFF] via-[#FFE4E9] to-[#D5E8F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 rounded-3xl border-2 bg-white shadow-xl text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-[#9B72E5] to-[#FF6B9D] rounded-full mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Apply?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We'd love to hear from you! If you're passionate about making a difference and meet our requirements, 
                please send your resume to join our amazing team.
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-[#FFF9F5] to-[#FFE4E9] rounded-2xl">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-[#9B72E5]" />
                    <h3 className="font-bold">Email Your Resume To:</h3>
                  </div>
                  <a
                    href="mailto:info@aimpediatrictherapy.com"
                    className="text-xl font-bold text-[#9B72E5] hover:text-[#FF6B9D] transition-colors"
                  >
                    info@aimpediatrictherapy.com
                  </a>
                </div>

                <div className="flex items-start gap-3 text-sm text-muted-foreground text-left max-w-lg mx-auto">
                  <CheckCircle className="w-5 h-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                  <p>
                    Please include your relevant experience, qualifications, and a brief cover letter 
                    explaining why you'd like to join the AIM Pediatric Therapy team.
                  </p>
                </div>

                <a
                  href="mailto:info@aimpediatrictherapy.com"
                  className="inline-block bg-gradient-to-r from-[#9B72E5] to-[#FF6B9D] text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Send Your Application
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            Have questions about working with us?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[#9B72E5] hover:text-[#FF6B9D] font-semibold transition-colors"
          >
            <MapPin className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
