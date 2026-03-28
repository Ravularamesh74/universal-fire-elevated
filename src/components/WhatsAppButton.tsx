import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowUp } from "lucide-react";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);

    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp */}
      <div className="relative">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-xl"
            >
              Need help? Chat with us!
              <button
                onClick={() => setShowTooltip(false)}
                className="ml-2 text-background/60 hover:text-background"
              >
                <X className="w-3 h-3 inline" />
              </button>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-foreground rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href="https://wa.me/919440333557?text=Hello%2C%20I%20need%20fire%20safety%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl animate-pulse-glow"
          style={{ background: "#25D366" }}
        >
          <MessageCircle className="w-7 h-7" style={{ color: "#fff" }} />
        </motion.a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
