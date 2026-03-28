import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Enquiry from Website");
    const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\n\n${formData.message}`);
    window.open(`mailto:universalfireservice999@gmail.com
?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="py-24 section-mid relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 text-foreground">
            LET'S <span className="fire-gradient-text">PROTECT</span> YOUR BUSINESS
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card-glass rounded-2xl p-8">
              <h3 className="font-display text-2xl text-foreground mb-6">CONTACT DETAILS</h3>
              <div className="space-y-6">
                <a href="mailto:universalfireservice999@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Email Us</span>
                    <span className="block text-foreground">universalfireservice999@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+919642469090 ,/ +919704349803" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Call Us</span>
                    <span className="block text-foreground">+91-9642469090 / +919704349803</span>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Visit Us</span>
                    <span className="block text-foreground text-sm">
                      Head Office :Hyderabad 
                      Branch Office :Warangal , Hanumakonda
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick call CTA */}
            <a
              href="tel:+919642469090 / +919704349803"
              className="block card-glass rounded-2xl p-8 fire-gradient-bg text-center group hover:scale-[1.02] transition-transform"
            >
              <Phone className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
              <span className="font-display text-2xl text-primary-foreground block">HAVE ANY QUESTIONS?</span>
              <span className="text-primary-foreground/80 text-lg">+91-9642469090 / +91-9704349803</span>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-8 space-y-6">
              <h3 className="font-display text-2xl text-foreground mb-2">QUICK ENQUIRY</h3>

              {(["name", "email", "phone"] as const).map((field) => (
                <div key={field}>
                  <label className="text-sm text-muted-foreground capitalize mb-1 block">{field === "phone" ? "Phone Number" : field}</label>
                  <input
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    required
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder={`Your ${field}`}
                  />
                </div>
              ))}

              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 fire-gradient-bg text-primary-foreground font-semibold rounded-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 text-lg"
              >
                <Send className="w-5 h-5" /> Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
