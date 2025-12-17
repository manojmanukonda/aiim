import { BookOpen, FileText, Video, Download, Sun, Moon, Star, Rocket } from "lucide-react";
import { Card } from "../components/ui/card";

const resources = [
  {
    category: "Parent Guides",
    icon: BookOpen,
    color: "from-[#FFE4E9] to-[#FFD0DC]",
    items: [
      { title: "Understanding Sensory Processing", type: "PDF Guide" },
      { title: "Speech Development Milestones", type: "Checklist" },
      { title: "Building Motor Skills at Home", type: "Activity Guide" },
      { title: "ABA Therapy Basics for Parents", type: "eBook" }
    ]
  },
  {
    category: "Educational Videos",
    icon: Video,
    color: "from-[#D5E8F7] to-[#B8DAFF]",
    items: [
      { title: "Signs Your Child May Need Therapy", type: "Video" },
      { title: "How to Support Communication at Home", type: "Video Series" },
      { title: "Physical Therapy Exercises", type: "Tutorial" },
      { title: "Social Skills Activities", type: "Video Guide" }
    ]
  },
  {
    category: "Downloadable Activities",
    icon: Download,
    color: "from-[#D4F1E8] to-[#B8E6D5]",
    items: [
      { title: "Fine Motor Skill Worksheets", type: "Printable PDF" },
      { title: "Visual Schedule Templates", type: "Customizable" },
      { title: "Sensory Diet Activities", type: "Activity Cards" },
      { title: "Language Development Games", type: "Printable" }
    ]
  },
  {
    category: "Research & Articles",
    icon: FileText,
    color: "from-[#E9DFFF] to-[#D4C5FF]",
    items: [
      { title: "Latest Research in Pediatric Therapy", type: "Article" },
      { title: "Understanding IEPs and 504 Plans", type: "Guide" },
      { title: "Nutrition and Development", type: "Article" },
      { title: "Managing Behavioral Challenges", type: "Resource" }
    ]
  }
];

const blogs = [
  {
    title: "5 Signs Your Child May Benefit from Occupational Therapy",
    excerpt: "Learn the early indicators that your child might benefit from OT services and how to get started.",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Occupational Therapy"
  },
  {
    title: "Building Communication Skills Through Play",
    excerpt: "Discover fun, engaging activities that naturally encourage language development in young children.",
    date: "December 5, 2024",
    image: "https://images.unsplash.com/photo-1587616211892-e8346a473a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Speech Therapy"
  },
  {
    title: "Understanding Your Child's Sensory Needs",
    excerpt: "A comprehensive guide to recognizing and supporting children with sensory processing differences.",
    date: "November 28, 2024",
    image: "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Sensory Processing"
  }
];

export function ResourcesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
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
          <Rocket className="w-10 h-10 text-[#E9DFFF] fill-[#E9DFFF] opacity-40 rotate-45" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFE4E9] to-[#D5E8F7] rounded-full text-sm font-semibold mb-4">
            📚 Resources
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Parent Resources & Guides
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empowering families with knowledge, tools, and activities to support their child's development journey.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((category, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl rounded-3xl p-8"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-30`} />
                
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                      <category.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>

                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.type}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-2">
                    View All Resources →
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF9F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
            <p className="text-lg text-muted-foreground">
              Expert insights and tips for supporting your child's development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-2 border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl rounded-3xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-sm text-muted-foreground">{blog.date}</p>
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <p className="text-muted-foreground">{blog.excerpt}</p>
                  <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-2">
                    Read More →
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center border-2 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest resources, tips, and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full border-2 border-border focus:border-primary outline-none"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
