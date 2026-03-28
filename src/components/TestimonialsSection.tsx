import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    text: "Our long-term partnership with Universal has been nothing short of excellent. They deliver precise fire system installations with consistent technical accuracy. Their reliability and experience make them our preferred safety partner.",
  },
  {
    name: "Avanti Singh",
    text: "What makes Universal different is their no-marketing, results-driven approach. Every service—from drawings to documentation—was handled with clarity and care. Their work truly reflects the trust they've built in the industry.",
  },
  {
    name: "Rajiv Mishra",
    text: "For all our safety audits and system upgrades, we trust only Universal. They're responsive, well-versed with regulations, and always deliver on time. Their expertise adds real value to every project.",
  },
  {
    name: "Anubhav Sachan",
    text: "We partnered with Universal for fire NOC, drawings, and mock drills. Their team worked seamlessly with ours and ensured 100% compliance. It's rare to find such professionalism and technical depth together.",
  },
  {
    name: "Sonalika Gupta",
    text: "Universal's engineers delivered our H.A.R.A. report and emergency plan with precision. They understood our site's unique challenges and tailored solutions effectively.",
  },
  {
    name: "Amit Sharma",
    text: "Universal Fire Services managed our fire safety certification process with complete professionalism. Their deep understanding of fire norms and timely execution impressed us.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 text-foreground">
            BUILT ON TRUST.<br /><span className="fire-gradient-text">BACKED BY CLIENTS.</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-foreground font-display text-2xl">4.8</span>
            <span className="text-muted-foreground text-sm ml-1">/ 5.0</span>
          </div>
        </motion.div>

        {/* Testimonial cards grid for desktop, slider for mobile */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="card-glass rounded-2xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full fire-gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name[0]}
                </div>
                <span className="font-semibold text-foreground text-sm">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="lg:hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="card-glass rounded-2xl p-8"
          >
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            <p className="text-muted-foreground leading-relaxed mb-6">{testimonials[current].text}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full fire-gradient-bg flex items-center justify-center text-primary-foreground font-bold">
                {testimonials[current].name[0]}
              </div>
              <span className="font-semibold text-foreground">{testimonials[current].name}</span>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full fire-gradient-bg flex items-center justify-center text-primary-foreground">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
