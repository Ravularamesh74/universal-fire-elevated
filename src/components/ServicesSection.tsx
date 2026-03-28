import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileCheck, PenTool, Wrench, Siren, ClipboardList, ArrowRight } from "lucide-react";

import nocImg from "@/assets/provisinal& final Noc Certificates.jpg";
import drawingsImg from "@/assets/firesafetydrawings&documentation.webp";
import supplyImg from "@/assets/system supply and erection copy.webp";
import mockDrillImg from "@/assets/fire Mock Drill and inspection.jpg";
import haraImg from "@/assets/H.A.R.A report and on site copy.jpg";

const services = [
  {
    icon: FileCheck,
    title: "Provisional & Final NOC Certificates",
    desc: "We assist in preparing and obtaining Provisional and Final NOCs. Our team ensures full compliance with fire department regulations.",
    image: nocImg,
  },
  {
    icon: PenTool,
    title: "Fire Safety Drawings & Documentation",
    subtitle: "As per N.B.C & I.F.S.C Regulations",
    desc: "We create custom fire safety layouts as per legal standards. All documentation is tailored for seamless approval processes.",
    image: drawingsImg,
  },
  {
    icon: Wrench,
    title: "System Supply, Erection & Commissioning",
    subtitle: "As Per IS: 2190 Regulations & T.A.C Manual",
    desc: "We supply, install, and commission fire safety systems efficiently. Designs are based on accurate pressure and fluid mechanics.",
    image: supplyImg,
  },
  {
    icon: Siren,
    title: "Fire Mock Drills & Inspection Assistance",
    subtitle: "As per OHSAS 18001 Standards",
    desc: "We conduct mock drills to test fire readiness and response. Get expert guidance during official inspections and audits.",
    image: mockDrillImg,
  },
  {
    icon: ClipboardList,
    title: "H.A.R.A Report & On-Site Emergency Plan",
    subtitle: "As Per Inspector of Factories",
    desc: "We prepare detailed H.A.R.A. reports and emergency plans. Training programs ensure your team is certified and ready.",
    image: haraImg,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 section-dark relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full blur-[120px]" />
      </div>

      <div className="container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-semibold tracking-widest uppercase">Our Services</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 text-foreground">
            FIRE & INDUSTRIAL SAFETY<br />
            <span className="fire-gradient-text">SOLUTIONS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            End-to-end fire and industrial safety services designed to meet regulatory standards and industry needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-glass rounded-2xl group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Service image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl fire-gradient-bg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground mb-1">{service.title}</h3>
                {service.subtitle && (
                  <span className="text-xs text-primary/80 font-medium">{service.subtitle}</span>
                )}
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{service.desc}</p>

                <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="rounded-2xl p-8 fire-gradient-bg flex flex-col justify-center items-center text-center"
          >
            <Siren className="w-12 h-12 text-primary-foreground mb-4" />
            <h3 className="font-display text-3xl text-primary-foreground mb-2">NEED FIRE SAFETY?</h3>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Protect your people, property, and reputation with certified fire safety solutions.
            </p>
            <a
              href="#contact"
              className="px-8 py-3 bg-background text-foreground font-semibold rounded-lg hover:bg-background/90 transition-colors"
            >
              Talk To Us Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
