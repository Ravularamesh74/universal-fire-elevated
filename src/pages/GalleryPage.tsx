import React, { useState } from "react";
import { products } from "../components/product";

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = filter === "All" || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white">SAFETY PRODUCTS</h1>
        <p className="text-gray-400 mt-4">
          49 certified products across 11 categories — fire protection, industrial safety, PPE & road safety.
        </p>
      </div>

      <div className="flex flex-col items-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {["All", "Fire Protection", "Industrial Safety", "Road Protection", "Head Protection", "Eye Protection", "Ear Protection", "Respiratory", "Face Protection", "Hand Protection", "Feet Protection", "Body Protection"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? "bg-orange-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-white">{product.name}</h2>
              <p className="text-sm text-gray-400 mb-1">Category: {product.category}</p>
              <p className="text-sm text-gray-400">Unit: {product.unit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;