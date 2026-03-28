import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Building2, Factory, Landmark, Hospital, GraduationCap } from "lucide-react";

const industries = [
  { icon: Building2, label: "Corporate Offices" },
  { icon: Factory, label: "Manufacturing Plants" },
  { icon: Landmark, label: "Government Buildings" },
  { icon: Hospital, label: "Hospitals & Healthcare" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: Users, label: "Residential Complexes" },
];

const ClientsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="py-24 section-mid overflow-hidden">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-semibold tracking-widest uppercase">Our Clients</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 text-foreground">
            TRUSTED BY <span className="fire-gradient-text">200+ CLIENTS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We proudly serve clients across diverse sectors, delivering reliable fire and industrial safety solutions to organizations of all sizes.
          </p>
        </motion.div>

        {/* Client sectors grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="card-glass rounded-2xl p-6 text-center group hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 card-glass rounded-2xl p-8 flex flex-wrap justify-center gap-12 text-center"
        >
          <div>
            <span className="font-display text-4xl text-foreground">200+</span>
            <span className="block text-sm text-muted-foreground mt-1">Happy Clients</span>
          </div>
          <div>
            <span className="font-display text-4xl text-foreground">100%</span>
            <span className="block text-sm text-muted-foreground mt-1">Referral Based</span>
          </div>
          <div>
            <span className="font-display text-4xl text-foreground">11+</span>
            <span className="block text-sm text-muted-foreground mt-1">Years of Trust</span>
          </div>
          <div>
            <span className="font-display text-4xl text-foreground">All over Telangana</span>
            <span className="block text-sm text-muted-foreground mt-1">Service Coverage</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
