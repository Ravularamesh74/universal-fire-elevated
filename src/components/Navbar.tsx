import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { products } from "./product";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Gallery", href: "#gallery" },
  { label: "Products", href: "/products" }, // Updated to navigate to GalleryPage
  { label: "Clients", href: "#clients" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 bg-navy-deep border-b border-border text-sm">
        <div className="flex items-center gap-6 text-muted-foreground">
          <a href="mailto:universalfireservices999@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5" /> universalfireservices999@gmail.com
          </a>
          <a href="tel:+91964469090 / +919704349803" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" /> +91-964469090 / +91-9704349803
          </a>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Facebook</a>
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">YouTube</a>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-navy-deep/95 backdrop-blur-xl shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Universal Fire Services" className="h-12 w-12 object-contain" />
            <div className="hidden sm:block">
              <span className="font-display text-xl tracking-wide text-foreground">UNIVERSAL FIRE</span>
              <span className="block text-xs text-muted-foreground tracking-widest">SAFETY & SERVICES</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-3/4" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 fire-gradient-bg text-primary-foreground font-semibold text-sm rounded-lg animate-pulse-glow transition-transform hover:scale-105"
            >
              Quick Enquiry
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-navy-deep border-t border-border overflow-hidden"
            >
              <div className="container py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a href="#contact" className="mt-2 px-6 py-3 fire-gradient-bg text-primary-foreground font-semibold text-center rounded-lg">
                  Quick Enquiry
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
