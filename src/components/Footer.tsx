import { Flame } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-16 section-dark border-t border-border">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Universal Fire" className="h-10 w-10" loading="lazy" />
            <span className="font-display text-xl text-foreground">UNIVERSAL FIRE & SAFETY SERVICES</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            With over two decades of trusted expertise, Universal Fire & Safety Services is committed to delivering end-to-end fire and industrial safety solutions.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-foreground mb-4">QUICK LINKS</h4>
          <div className="space-y-2">
            {["Home", "About", "Services", "Industries", "Clients", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-foreground mb-4">OUR SERVICES</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Provisional & Final NOC Certificates</p>
            <p>Fire Safety Drawings & Documentation</p>
            <p>System Supply, Erection & Commissioning</p>
            <p>Fire Mock Drills & Inspection</p>
            <p>H.A.R.A Report & Emergency Plan</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © 2015 Universal Fire & Safety Services. All Rights Reserved.
        </p>
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <Flame className="w-4 h-4 text-primary" /> Protecting India Since 2015
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
