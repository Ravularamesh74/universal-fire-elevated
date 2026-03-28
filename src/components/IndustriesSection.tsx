import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Hospital, GraduationCap, Fuel, Car, Building2 } from "lucide-react";

const industries = [
  { icon: Hospital, title: "Healthcare & Hospitals", desc: "Fire safety for hospitals and clinics – patient & staff protection." },
  { icon: GraduationCap, title: "Educational Institutions", desc: "NOC and drills for schools and colleges – safe learning spaces." },
  { icon: Fuel, title: "Oil, Gas & Petrochemicals", desc: "End-to-end safety for petrol, gas, and distillery units." },
  { icon: Car, title: "Automotive & Engineering", desc: "Fire protection for plants – auto to heavy machinery." },
  { icon: Building2, title: "Construction & Infrastructure", desc: "Fire plans and safety audits – for builders and developers." },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-24 section-mid">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-semibold tracking-widest uppercase">Industries We Serve</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 text-foreground">
            FIRE SAFETY FOR<br /><span className="fire-gradient-text">EVERY SECTOR</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card-glass rounded-2xl p-6 text-center group hover:border-primary/30 transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <ind.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{ind.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
