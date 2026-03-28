import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cog, Layers, Globe, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: Cog, title: "Expert-Driven Engineering", desc: "Our team of certified mechanical and industrial engineers ensures technical accuracy in every project." },
  { icon: Layers, title: "Complete End-to-End Services", desc: "From fire NOCs to mock drills and H.A.R.A. reports—we handle everything under one roof." },
  { icon: Globe, title: "Pan-India Client Base", desc: "Trusted by 1600+ organizations across India—from corporates to institutions." },
  { icon: ShieldCheck, title: "Full Regulatory Compliance", desc: "We ensure all services meet fire department regulations and safety codes." },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-dark relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-semibold tracking-widest uppercase">Why Choose Us</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 text-foreground">
            PARTNER WITH<br /><span className="fire-gradient-text">UNIVERSAL FIRE SAFETY & SERVICES</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            With over two decades of hands-on experience, we deliver fire and industrial safety solutions you can rely on.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="card-glass rounded-2xl p-8 text-center group hover:border-primary/30 transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-full fire-gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <r.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
