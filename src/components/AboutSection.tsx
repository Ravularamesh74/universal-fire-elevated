import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Target, Eye, CheckCircle2 } from "lucide-react";

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 section-mid relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-semibold tracking-widest uppercase">Who We Are</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 text-foreground">
            YOUR RELIABLE PARTNER IN<br />
            <span className="fire-gradient-text">FIRE & INDUSTRIAL SAFETY</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Universal Fire Services is a leading provider of Fire and Industrial Safety solutions across India. Established in 2015, we have grown through trust and referrals to become one of the largest service providers with over 200+ clients across various sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Our services cover the full spectrum—from Provisional and Final NOC certifications to fire safety system installation, mock drills, and on-site emergency planning.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-xl text-foreground">OUR MISSION</h4>
                  <p className="text-sm text-muted-foreground mt-1">Deliver reliable, compliant, and innovative fire safety solutions that protect lives and assets.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display text-xl text-foreground">OUR VISION</h4>
                  <p className="text-sm text-muted-foreground mt-1">To be India's most trusted name in fire and industrial safety through expertise and integrity.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Qualified Engineers", "Pan-India Service", "100% Referral Based", "Since 2015"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-foreground bg-muted px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: 11, suffix: "+", label: "Years Experience", color: "fire-gradient-bg" },
              { value: 200 , suffix: "+", label: "Happy Clients", color: "bg-secondary" },
              { value: 200, suffix: "+", label: "Projects Done", color: "bg-muted" },
              { value: 100, suffix: "%", label: "Client Satisfaction", color: "fire-gradient-bg" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`card-glass rounded-2xl p-8 text-center ${i === 0 || i === 3 ? "border-primary/20" : ""}`}
              >
                <span className="font-display text-5xl text-foreground">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="block text-sm text-muted-foreground mt-2">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
