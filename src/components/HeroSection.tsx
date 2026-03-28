import { motion } from "framer-motion";
import { Shield, Award, Flame } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Flame, value: "11+", label: "Years of Expertise" },
  { icon: Shield, value: "200+", label: "Clients Served" },
  { icon: Award, value: "100%", label: "Client Referrals" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Floating embers */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{ left: `${15 + i * 15}%`, bottom: "20%" }}
          animate={{
            y: [0, -200 - i * 50],
            opacity: [0.8, 0],
            scale: [1, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="container relative z-10 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 border border-primary/40 rounded-full text-sm text-primary font-medium tracking-wider mb-6"
          >
            UNIVERSAL FIRE SAFETY SERVICES
          </motion.span>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display leading-[0.9] tracking-tight mb-6">
            TRUSTED FIRE & INDUSTRIAL SAFETY
            <span className="fire-gradient-text">EXPERTS SINCE 2015</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-10 font-light leading-relaxed">
            As a pioneer in fire and industrial safety since 2015, we bring unmatched expertise and reliability. Serving 200+ clients across Telangana with compliance, protection, and peace of mind.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-4 fire-gradient-bg text-primary-foreground font-semibold rounded-lg fire-glow transition-transform hover:scale-105 text-lg"
            >
              Get Free Consultation
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:border-primary/50 hover:bg-muted transition-all text-lg"
            >
              Our Services
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="card-glass rounded-xl p-6 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-lg fire-gradient-bg flex items-center justify-center shrink-0">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display text-3xl text-foreground">{stat.value}</span>
                <span className="block text-sm text-muted-foreground">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
