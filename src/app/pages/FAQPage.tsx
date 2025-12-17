import { Star, Heart, Sparkles, Rocket } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        q: "What ages do you serve?",
        a: "We provide therapy services for children from birth through 18 years of age. Our programs are tailored to meet the developmental needs of each age group."
      },
      {
        q: "Do you accept insurance?",
        a: "Yes! We accept most major insurance plans including Medicaid, Medicare, and private insurance. Our billing team can verify your coverage and explain your benefits."
      },
      {
        q: "How do I get started?",
        a: "Simply call us or fill out our contact form to schedule a free consultation. We'll discuss your child's needs, answer questions, and help determine the best therapy approach."
      },
      {
        q: "What should I bring to the first appointment?",
        a: "Please bring your child's insurance card, any relevant medical records or evaluations, and a list of current medications. It's also helpful to bring a list of questions or concerns you'd like to discuss."
      }
    ]
  },
  {
    category: "Therapy Services",
    questions: [
      {
        q: "How long are therapy sessions?",
        a: "Session length varies by service type and individual needs. Most sessions range from 30-60 minutes. Your therapist will recommend the appropriate duration based on your child's goals and attention span."
      },
      {
        q: "How often will my child need therapy?",
        a: "Frequency is determined based on your child's individual needs and goals. Some children benefit from 1-2 sessions per week, while others may need more intensive services. We'll work with you to create an optimal schedule."
      },
      {
        q: "Can parents observe therapy sessions?",
        a: "Absolutely! We encourage parent involvement and observation. We also provide parent coaching to help you support your child's progress at home."
      },
      {
        q: "How do you measure progress?",
        a: "We use standardized assessments, data collection, and regular progress reports to track your child's development. You'll receive updates and have regular meetings to discuss progress and adjust goals as needed."
      }
    ]
  },
  {
    category: "Scheduling & Policies",
    questions: [
      {
        q: "What is your cancellation policy?",
        a: "We require 24-hour notice for cancellations. Late cancellations or no-shows may result in a fee. We understand emergencies happen and will work with families on a case-by-case basis."
      },
      {
        q: "Do you offer teletherapy?",
        a: "Yes! We offer telehealth services for certain therapy types. This can be a great option for families with scheduling constraints or transportation challenges."
      },
      {
        q: "What are your hours of operation?",
        a: "We're open Monday-Friday 8am-6pm and Saturday 9am-2pm. We offer flexible scheduling including before and after school appointments."
      },
      {
        q: "Do you have a waitlist?",
        a: "Availability varies by service type and therapist. We'll let you know current wait times during your initial consultation and do our best to accommodate your needs."
      }
    ]
  }
];

export function FAQPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#FFF9F5] to-white overflow-hidden">
        {/* Cute floating decorations */}
        <div className="absolute top-24 right-20 animate-bounce" style={{ animationDuration: '3.6s' }}>
          <Star className="w-10 h-10 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
        </div>
        <div className="absolute top-40 left-24 animate-bounce" style={{ animationDuration: '4.1s', animationDelay: '0.6s' }}>
          <Heart className="w-9 h-9 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce" style={{ animationDuration: '3.9s', animationDelay: '0.9s' }}>
          <Sparkles className="w-10 h-10 text-[#9B72E5] fill-[#9B72E5] opacity-40" />
        </div>
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDuration: '4.3s', animationDelay: '0.4s' }}>
          <Rocket className="w-9 h-9 text-[#4ECDC4] fill-[#4ECDC4] opacity-40 rotate-45" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#D5E8F7] to-[#E9DFFF] rounded-full text-sm font-semibold mb-4">
            ❓ FAQ
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services, policies, and how we can help your child thrive.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, qIndex) => (
                  <AccordionItem 
                    key={qIndex} 
                    value={`${catIndex}-${qIndex}`}
                    className="bg-white border-2 border-border rounded-2xl px-6 hover:border-primary/20 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold pr-4">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF9F5]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#D5E8F7]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're here to help! Contact us today for personalized answers to your questions.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
