import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Sun, Moon, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#FFF9F5] to-white overflow-hidden">
      {/* Cute floating decorations */}
      <div className="absolute top-28 right-24 animate-bounce" style={{ animationDuration: '3.7s' }}>
        <Sun className="w-11 h-11 text-[#FFD89D] fill-[#FFD89D] opacity-40" />
      </div>
      <div className="absolute top-40 left-20 animate-bounce" style={{ animationDuration: '4.4s', animationDelay: '0.6s' }}>
        <Moon className="w-9 h-9 text-[#A8D5FF] fill-[#A8D5FF] opacity-40" />
      </div>
      <div className="absolute bottom-36 right-16 animate-bounce" style={{ animationDuration: '3.9s', animationDelay: '0.8s' }}>
        <Star className="w-8 h-8 text-[#FF6B9D] fill-[#FF6B9D] opacity-40" />
      </div>
      <div className="absolute bottom-28 left-28 animate-bounce" style={{ animationDuration: '4.1s', animationDelay: '0.3s' }}>
        <Star className="w-10 h-10 text-[#E9DFFF] fill-[#E9DFFF] opacity-40" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#D5E8F7] to-[#E9DFFF] rounded-full text-sm font-semibold mb-4">
                📞 Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Let's Start Your Child's Journey
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reach out today to schedule a free consultation. We're here to answer your questions 
                and help your child thrive!
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFE4E9] to-[#FFD0DC] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 8am-6pm</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D5E8F7] to-[#B8DAFF] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@aimpediatric.com</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4F1E8] to-[#B8E6D5] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#4ECDC4]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-muted-foreground">123 Therapy Lane</p>
                  <p className="text-muted-foreground">Pediatric Plaza, Suite 200</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E9DFFF] to-[#D4C5FF] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#9B72E5]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                  <p className="text-muted-foreground">Saturday: 9am - 2pm</p>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-[#FFE4E9] hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#D5E8F7] hover:bg-secondary hover:text-white transition-all flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#E9DFFF] hover:bg-[#9B72E5] hover:text-white transition-all flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-border">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="rounded-xl border-2 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="rounded-xl border-2 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="john.doe@example.com" 
                  className="rounded-xl border-2 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <Input 
                  type="tel" 
                  placeholder="(123) 456-7890" 
                  className="rounded-xl border-2 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Child's Age</label>
                <Input 
                  placeholder="e.g., 5 years old" 
                  className="rounded-xl border-2 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your child's needs and how we can help..." 
                  className="rounded-xl border-2 focus:border-primary min-h-32"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full rounded-full py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}