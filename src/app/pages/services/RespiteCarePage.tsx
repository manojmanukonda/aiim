import { Home, Check, Star, Heart, Sun, Users } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Link } from "react-router-dom";

export function RespiteCarePage() {
  const services = [
    "Safe and supportive environment",
    "Quality personalized care",
    "Structured activities",
    "Sensory play opportunities",
    "Interactive social experiences",
    "Essential life skills development",
    "Social skills practice",
    "Trained and experienced staff"
  ];

  const benefits = [
    { title: "For Children", description: "Engaging activities and skill development in a fun, supportive setting" },
    { title: "For Families", description: "Peace of mind knowing your child is receiving quality care" },
    { title: "For Parents", description: "Time to rest, recharge, and attend to personal needs" },
    { title: "For Caregivers", description: "Professional support and collaborative care approach" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#FFE4E9] to-white overflow-hidden">
        <div className="absolute top-24 right-20 animate-bounce" style={{ animationDuration: '3.9s' }}>
          <Star className="w-10 h-10 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>
        <div className="absolute top-40 left-24 animate-bounce" style={{ animationDuration: '4.4s', animationDelay: '0.4s' }}>
          <Heart className="w-9 h-9 text-[#FFD0DC] fill-[#FFD0DC] opacity-40" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '0.7s' }}>
          <Users className="w-10 h-10 text-[#9B72E5] fill-[#9B72E5] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.2s' }}>
          <Sun className="w-11 h-11 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/services" className="inline-block mb-4">
            <span className="text-sm text-primary hover:underline">← Back to Services</span>
          </Link>
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#FFE4E9] to-[#FFD0DC] flex items-center justify-center shadow-xl">
            <Home className="w-10 h-10 text-[#FF6B9D]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Respite Care Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Quality care and engaging experiences while families recharge
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 rounded-3xl border-2 border-[#FFE4E9] mb-12">
              <h2 className="text-3xl font-bold mb-6">Supporting Families Through Respite Care</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At AIM, our respite care services provide families with a safe, supportive, and engaging environment 
                where children can receive quality care while developing essential life and social skills. We understand 
                that caring for a child with special needs can be demanding, and families need time to rest and recharge.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our trained staff offer personalized support, ensuring each child's unique needs are met through 
                structured activities, sensory play, and interactive social experiences. While children engage in 
                meaningful activities, parents can have peace of mind knowing their child is in capable, caring hands.
              </p>
            </Card>

            {/* What We Provide */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">What We Provide</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FFE4E9]/30 to-[#FFD0DC]/30 rounded-2xl">
                    <Check className="w-5 h-5 text-[#FF6B9D] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits for Everyone */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Benefits for Everyone</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="p-6 rounded-3xl border-2 border-border hover:border-primary/20 transition-all hover:shadow-xl">
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <Card className="p-8 rounded-3xl border-2 border-border">
              <h3 className="text-2xl font-bold mb-4">How Our Respite Care Works</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFE4E9] to-[#FFD0DC] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#FF6B9D]">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Initial Consultation</h4>
                    <p className="text-sm text-muted-foreground">We meet with families to understand your child's needs, preferences, and routines.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFE4E9] to-[#FFD0DC] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#FF6B9D]">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Personalized Care Plan</h4>
                    <p className="text-sm text-muted-foreground">Our team develops a tailored plan that addresses your child's unique needs and interests.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFE4E9] to-[#FFD0DC] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#FF6B9D]">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Engaging Activities</h4>
                    <p className="text-sm text-muted-foreground">Children participate in structured activities, sensory play, and social experiences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFE4E9] to-[#FFD0DC] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[#FF6B9D]">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Regular Communication</h4>
                    <p className="text-sm text-muted-foreground">We maintain open communication with families about your child's experiences and progress.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Why Families Choose Our Respite Care */}
            <div className="mt-12">
              <Card className="p-8 rounded-3xl border-2 border-[#FFE4E9]">
                <h3 className="text-2xl font-bold mb-6">Why Families Choose AIM for Respite Care</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>Trained Staff:</strong> Our team members are experienced in working with children with 
                    autism and developmental needs, ensuring expert care.
                  </p>
                  <p>
                    <strong>Therapeutic Environment:</strong> Our facilities are designed specifically for children 
                    with sensory and developmental needs.
                  </p>
                  <p>
                    <strong>Skill Development:</strong> Respite time isn't just supervision—children actively engage 
                    in activities that build life and social skills.
                  </p>
                  <p>
                    <strong>Family Support:</strong> We understand the challenges families face and provide compassionate, 
                    reliable support when you need it most.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFE4E9] to-[#FFD0DC]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Give Your Family the Support You Deserve</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn more about our respite care services and how we can support your family.
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
