import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Users,
  Building2,
  Factory,
  Landmark,
  Hospital,
  GraduationCap,
} from "lucide-react";
import { products } from "./product";

/* ================= TYPES ================= */

type Product = {
  id: number;
  name: string;
  image: string;
  category: string;
  specs: Record<string, string>;
};

/* ================= DATA ================= */

const industries = [
  { icon: Building2, label: "Corporate Offices" },
  { icon: Factory, label: "Manufacturing Plants" },
  { icon: Landmark, label: "Government Buildings" },
  { icon: Hospital, label: "Hospitals & Healthcare" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: Users, label: "Residential Complexes" },
];

/* ================= COMPONENT ================= */

const ClientsSection = () => {
  const productsRef = useRef(null);
  const clientsRef = useRef(null);

  const productsInView = useInView(productsRef, {
    once: true,
    margin: "-100px",
  });

  const clientsInView = useInView(clientsRef, {
    once: true,
    margin: "-100px",
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  /* Prevent background scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
  }, [selectedProduct]);

  return (
    <>
      {/* ================= PRODUCTS SECTION ================= */}
      <section id="products" className="py-24 section-dark">
        <div className="container" ref={productsRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="text-sm text-primary font-semibold tracking-widest uppercase">
              Complete Product Range
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 text-foreground">
              SAFETY <span className="fire-gradient-text">PRODUCTS</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              49 certified products across 11 categories — fire protection,
              industrial safety, PPE & road safety.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product: Product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition"
                onClick={() => openProductModal(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2 text-foreground">
                    {product.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Category: {product.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MODAL ================= */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={closeProductModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl shadow-xl p-6 w-11/12 md:w-2/3 lg:w-1/2 relative"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                onClick={closeProductModal}
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-4 text-primary">
                {selectedProduct.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div>
                  <h3 className="text-lg font-semibold mt-2 text-primary">
                    Specifications:
                  </h3>
                  <ul className="list-disc list-inside mt-2">
                    {Object.entries(selectedProduct.specs).map(
                      ([key, value]) => (
                        <li key={key} className="text-sm text-gray-600">
                          {key}: {value}
                        </li>
                      )
                    )}
                  </ul>

                  <a
                    href={`https://wa.me/9642469090?text=Hi%2C%20I%20am%20interested%20in%20your%20product%20${encodeURIComponent(
                      selectedProduct.name
                    )}.%20Please%20provide%20more%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mt-6 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-md hover:bg-primary/90 transition">
                      Send Inquiry
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </section>

      {/* ================= CLIENTS SECTION ================= */}
      <section id="clients" className="py-24 section-mid overflow-hidden">
        <div className="container" ref={clientsRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-sm text-primary font-semibold tracking-widest uppercase">
              Our Clients
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-3 text-foreground">
              TRUSTED BY{" "}
              <span className="fire-gradient-text">200+ CLIENTS</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We proudly serve clients across diverse sectors, delivering
              reliable fire and industrial safety solutions to organizations of
              all sizes.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={clientsInView ? { opacity: 1, y: 0 } : {}}
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

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 card-glass rounded-2xl p-8 flex flex-wrap justify-center gap-12 text-center"
          >
            <div>
              <span className="font-display text-4xl text-foreground">
                200+
              </span>
              <span className="block text-sm text-muted-foreground mt-1">
                Happy Clients
              </span>
            </div>
            <div>
              <span className="font-display text-4xl text-foreground">
                100%
              </span>
              <span className="block text-sm text-muted-foreground mt-1">
                Referral Based
              </span>
            </div>
            <div>
              <span className="font-display text-4xl text-foreground">
                11+
              </span>
              <span className="block text-sm text-muted-foreground mt-1">
                Years of Trust
              </span>
            </div>
            <div>
              <span className="font-display text-4xl text-foreground">
                All over Telangana
              </span>
              <span className="block text-sm text-muted-foreground mt-1">
                Service Coverage
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ClientsSection;