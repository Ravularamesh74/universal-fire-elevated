import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clientGroups = [
  ["Ananda Group", "Andhra Sugars Ltd", "Avanti Group", "Ashok Leyland", "Adani Oil Company", "Bajaj Automotive Ltd", "B.P.C.L", "Britannia"],
  ["B.S.N.L", "Continental Coffee Ltd", "DLF", "Eicher Motors", "ESSAR Bunks", "Godrej Group", "H.P.C.L", "Jindal Company"],
  ["KIMS Amalapuram", "Falcon Marine", "Growel Group", "Delta Sugars", "Delta Paper Mill", "Nandi Pipes", "Jai Vijaya Paper Mills", "Big C"],
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
        </motion.div>

        {/* Scrolling marquee rows */}
        <div className="space-y-4">
          {clientGroups.map((group, gi) => (
            <div key={gi} className="relative overflow-hidden">
              <motion.div
                animate={{ x: gi % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ duration: 30 + gi * 5, repeat: Infinity, ease: "linear" }}
                className="flex gap-4 w-max"
              >
                {[...group, ...group, ...group, ...group].map((name, i) => (
                  <div
                    key={`${name}-${i}`}
                    className="card-glass rounded-xl px-6 py-4 whitespace-nowrap text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors shrink-0"
                  >
                    {name}
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
