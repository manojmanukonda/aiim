import { Check, CreditCard, FileText, Phone, Star, Heart, Sparkles, Sun } from "lucide-react";
import { Card } from "../components/ui/card";

const insuranceProviders = [
  "Blue Cross Blue Shield",
  "Aetna",
  "United Healthcare",
  "Cigna",
  "Humana",
  "Medicare",
  "Medicaid",
  "Tricare",
  "Anthem",
  "Kaiser Permanente",
  "Molina Healthcare",
  "Centene",
  "Magellan Health",
  "Optum",
  "And many more..."
];

const steps = [
  {
    icon: Phone,
    title: "Contact Us",
    description: "Call our office or fill out our online form. Our billing team will verify your insurance coverage."
  },
  {
    icon: FileText,
    title: "Verification",
    description: "We'll check your benefits, co-pays, deductibles, and any pre-authorization requirements."
  },
  {
    icon: Check,
    title: "Get Started",
    description: "Once verified, we'll schedule your initial evaluation and begin your child's therapy journey."
  },
  {
    icon: CreditCard,
    title: "Easy Billing",
    description: "We handle all insurance claims and billing. You only pay your co-pay or deductible at each visit."
  }
];

export function InsurancePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#D5E8F7] to-white overflow-hidden">
        {/* Decorations */}
        <div className="absolute top-24 right-20 animate-bounce" style={{ animationDuration: '3.9s' }}>
          <Star className="w-10 h-10 text-[#5BA4E5] fill-[#5BA4E5] opacity-40" />
        </div>
        <div className="absolute top-40 left-24 animate-bounce" style={{ animationDuration: '4.4s', animationDelay: '0.4s' }}>
          <Heart className="w-9 h-9 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '0.7s' }}>
          <Sparkles className="w-10 h-10 text-[#9B72E5] fill-[#9B72E5] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.2s' }}>
          <Sun className="w-11 h-11 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#D5E8F7] to-[#E9DFFF] rounded-full text-sm font-semibold mb-4">
            💳 Insurance & Payment
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We Make Insurance Easy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We accept most major insurance plans and handle all the paperwork so you can focus on 
            what matters most—your child's progress.
          </p>
        </div>
      </section>

      {/* Accepted Insurance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Accepted Insurance Plans</h2>
            <p className="text-lg text-muted-foreground">
              We're in-network with most major insurance providers
            </p>
          </div>

          <Card className="p-8 md:p-12 rounded-3xl border-2 border-[#D5E8F7] max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {insuranceProviders.map((provider, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#D5E8F7]/30 to-[#E9DFFF]/30 rounded-xl">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{provider}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Don't see your insurance provider listed? <a href="#contact" className="text-primary font-semibold hover:underline">Contact us</a> to verify your coverage.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF9F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Insurance Works with Us</h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to get started with your insurance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 rounded-3xl border-2 border-border hover:border-primary/20 transition-all hover:shadow-xl text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-3">{index + 1}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What's Typically Covered</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 rounded-3xl border-2 border-[#D4F1E8]">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Check className="w-6 h-6 text-[#4ECDC4]" />
                  Usually Covered Services
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                    <span>Initial evaluations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                    <span>Therapy sessions (OT, PT, ST)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                    <span>ABA therapy (with diagnosis)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                    <span>Progress assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                    <span>Re-evaluations</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 rounded-3xl border-2 border-[#FFE7D9]">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-[#FFA07A]" />
                  Your Responsibility
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">Co-payment per visit (typically $10-$50)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">Annual deductible (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">Co-insurance percentage (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">Services not covered by your plan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">Visits beyond your plan's limits</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Private Pay */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF9F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Private Pay Options</h2>
            <p className="text-lg text-muted-foreground mb-8">
              For families without insurance coverage or who prefer to pay out-of-pocket, we offer 
              competitive self-pay rates. We also accept:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="px-6 py-3 bg-white rounded-full border-2 border-border shadow-lg">
                HSA/FSA Cards
              </div>
              <div className="px-6 py-3 bg-white rounded-full border-2 border-border shadow-lg">
                Payment Plans
              </div>
              <div className="px-6 py-3 bg-white rounded-full border-2 border-border shadow-lg">
                Sliding Scale (Income-based)
              </div>
              <div className="px-6 py-3 bg-white rounded-full border-2 border-border shadow-lg">
                Superbills for Reimbursement
              </div>
            </div>

            <p className="text-muted-foreground">
              Financial concerns should never prevent a child from receiving needed therapy. Contact us 
              to discuss payment options that work for your family.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#D5E8F7] to-[#B8DAFF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Insurance?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our billing specialists are here to help you understand your coverage and benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all">
              Call (123) 456-7890
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-xl transition-all">
              Verify Coverage Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
