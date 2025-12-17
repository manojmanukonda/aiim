import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1597075958693-75173d1c837f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjB0aGVyYXB5JTIwY2hpbGRyZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc2NTk2ODY5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Children engaging in therapy activities",
    category: "Therapy Sessions"
  },
  {
    url: "https://images.unsplash.com/photo-1577896849786-738ed6c78bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHRoZXJhcHklMjBzZXNzaW9uJTIwYWN0aXZpdGllc3xlbnwxfHx8fDE3NjU5Njg2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Individual therapy session",
    category: "Therapy Sessions"
  },
  {
    url: "https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwc29jaWFsJTIwc2tpbGxzfGVufDF8fHx8MTc2NTk2ODY5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Children learning social skills together",
    category: "Social Skills"
  },
  {
    url: "https://images.unsplash.com/photo-1609567015816-f710aa130a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheWluZyUyMGNvbG9yZnVsJTIwdG95c3xlbnwxfHx8fDE3NjU5Njg2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Kids playing with colorful toys",
    category: "Play Activities"
  },
  {
    url: "https://images.unsplash.com/photo-1727768351795-2390d19b2b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGFydCUyMHRoZXJhcHklMjBwYWludGluZ3xlbnwxfHx8fDE3NjU5Njg2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Creative art therapy painting session",
    category: "Creative Arts"
  },
  {
    url: "https://images.unsplash.com/photo-1761919314864-34555cd1c771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwZ3JvdXAlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc2NTk2ODY5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Happy children in group activities",
    category: "Group Activities"
  },
  {
    url: "https://images.unsplash.com/photo-1765314399224-9e8e85df2951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBibG9ja3MlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjU5Njg2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Children playing with building blocks",
    category: "Learning Activities"
  },
  {
    url: "https://images.unsplash.com/photo-1554343594-1c9d305bd51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbXVzaWMlMjB0aGVyYXB5JTIwaW5zdHJ1bWVudHN8ZW58MXx8fHwxNzY1OTY4Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Music therapy with instruments",
    category: "Music Therapy"
  },
  {
    url: "https://images.unsplash.com/photo-1738058796315-b693b74c761b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHRoZXJhcHklMjByb29tJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY1OTY4Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Colorful therapy room environment",
    category: "Our Facilities"
  }
];

const categories = ["All", "Therapy Sessions", "Social Skills", "Creative Arts", "Music Therapy", "Group Activities", "Play Activities", "Learning Activities", "Our Facilities"];

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FFE4E9] via-[#E9DFFF] to-[#D5E8F7] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a peek into our vibrant world of therapy, learning, and growth. 
            See the smiles, activities, and moments that make AIM Pediatric Therapy special! 🌈
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#9B72E5] to-[#FF6B9D] text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-[#FFF9F5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer border-4 border-transparent hover:border-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(index)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold mb-1 opacity-90">{image.category}</p>
                        <p className="text-xs opacity-75">{image.alt}</p>
                      </div>
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800">
                  {image.category}
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={filteredImages[selectedImage].url}
              alt={filteredImages[selectedImage].alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
            />
            <div className="text-center mt-6 text-white">
              <p className="text-lg font-semibold mb-2">{filteredImages[selectedImage].category}</p>
              <p className="text-sm opacity-75">{filteredImages[selectedImage].alt}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => 
                  prev === null ? null : prev === 0 ? filteredImages.length - 1 : prev - 1
                );
              }}
              className="px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              ← Previous
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => 
                  prev === null ? null : (prev + 1) % filteredImages.length
                );
              }}
              className="px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#E9DFFF] to-[#FFE4E9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the AIM difference yourself. Contact us today to learn more about our services 
            and schedule a consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#9B72E5] to-[#FF6B9D] text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
