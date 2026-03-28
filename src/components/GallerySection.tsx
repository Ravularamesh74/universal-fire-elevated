import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, title: "Fire Suppression System Installation", category: "Installation" },
  { src: gallery2, title: "Fire Mock Drill Training", category: "Mock Drills" },
  { src: gallery3, title: "Sprinkler System Close-up", category: "Installation" },
  { src: gallery4, title: "Fire Hydrant System", category: "Equipment" },
  { src: gallery5, title: "Fire Safety Documentation", category: "Documentation" },
  { src: gallery6, title: "Fire Alarm Control Panel", category: "Equipment" },
];

const categories = ["All", "Installation", "Mock Drills", "Equipment", "Documentation"];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  const openNext = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  };
  const openPrev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  };

  return (
    <section id="gallery" className="py-24 section-dark relative">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-sm text-primary font-semibold tracking-widest uppercase">Our Gallery</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 text-foreground">
            FROM DESIGN TO<br /><span className="fire-gradient-text">EXECUTION</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore our gallery to see how we bring fire and safety solutions to life, from planning to execution.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "fire-gradient-bg text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img, i) => (
            <motion.div
              key={img.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                i % 3 === 0 ? "row-span-1 lg:row-span-2" : ""
              }`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover min-h-[200px] lg:min-h-[250px]"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-primary font-medium">{img.category}</span>
                    <h4 className="font-display text-lg text-foreground">{img.title}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); openPrev(); }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-muted/80 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); openNext(); }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-muted/80 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].title}
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <span className="text-xs text-primary font-medium">{filtered[lightbox].category}</span>
                <h4 className="font-display text-2xl text-foreground">{filtered[lightbox].title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
