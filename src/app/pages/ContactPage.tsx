import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Globe, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Card } from "../components/ui/card";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const languages = [
    "English",
    "French",
    "Arabic",
    "Urdu",
    "Hindi",
    "Punjabi"
  ];

  const serviceAreas = [
    "Brampton",
    "Mississauga",
    "Burlington",
    "Oakville",
    "Milton",
    "Caledon",
    "Toronto"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#D5E8F7] via-[#E9DFFF] to-[#FFE4E9] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide both centre-based, in-home, tele-therapy and community services.
            <br />
            Let's start your child's journey to success together!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 rounded-3xl border-2 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-semibold mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#9B72E5] focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block font-semibold mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#9B72E5] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-semibold mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#9B72E5] focus:outline-none transition-colors"
                        placeholder="(XXX) XXX-XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block font-semibold mb-2">
                      Location (city/region)
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#9B72E5] focus:outline-none transition-colors"
                      placeholder="Your city or region"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#9B72E5] focus:outline-none transition-colors"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-semibold mb-2">
                      Message (include services that you would like more info about)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#9B72E5] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your needs and which services you're interested in..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#9B72E5] to-[#FF6B9D] text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="p-6 rounded-3xl border-2 bg-gradient-to-br from-[#FFF9F5] to-white">
                <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:admin@aimpediatrictherapy.com"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D5E8F7] to-[#B8DAFF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-[#5BA4E5]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm mb-1">Email</div>
                      <div className="text-sm text-muted-foreground break-all">
                        admin@aimpediatrictherapy.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:9054972467"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4F1E8] to-[#B8E6D5] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-[#4ECDC4]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm mb-1">Phone</div>
                      <div className="text-sm text-muted-foreground">905-497-2467</div>
                    </div>
                  </a>
                </div>
              </Card>

              {/* Hours of Operation */}
              <Card className="p-6 rounded-3xl border-2 bg-gradient-to-br from-[#FFE7D9] to-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFE7D9] to-[#FFD4B8] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#FFA07A]" />
                  </div>
                  <h3 className="text-xl font-bold">Hours of Operation</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Saturday</span>
                    <span className="text-muted-foreground">11:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </Card>

              {/* Service Areas */}
              <Card className="p-6 rounded-3xl border-2 bg-gradient-to-br from-[#E9DFFF] to-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E9DFFF] to-[#D4C5FF] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#9B72E5]" />
                  </div>
                  <h3 className="text-xl font-bold">Home Services</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium border-2 border-gray-100"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Languages */}
              <Card className="p-6 rounded-3xl border-2 bg-gradient-to-br from-[#FFF4D9] to-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF4D9] to-[#FFE9B8] flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <h3 className="text-xl font-bold">Languages</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  We provide communication to parents in various languages:
                </p>
                <div className="space-y-2">
                  {languages.map((language, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#9B72E5] to-[#FF6B9D]" />
                      <span className="text-sm font-medium">{language}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6 rounded-3xl border-2 bg-gradient-to-br from-[#FFE4E9] to-white">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D5E8F7] to-[#B8DAFF] flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-5 h-5 text-[#5BA4E5]" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D5E8F7] to-[#B8DAFF] flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Twitter className="w-5 h-5 text-[#5BA4E5]" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFE7D9] to-[#FFD4B8] flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-5 h-5 text-[#FFA07A]" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E9DFFF] to-[#D4C5FF] flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-5 h-5 text-[#9B72E5]" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
