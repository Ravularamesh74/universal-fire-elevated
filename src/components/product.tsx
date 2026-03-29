// Organized imports and ensured all assets are referenced correctly
import fireExtinguisher from "@/assets/fire-extinguisher-hero.jpg";
import foamMonitor from "@/assets/foam-monitor.jpg";
import fireHydrant from "@/assets/fire-hydrant-hero.jpg";
import fireAlarm from "@/assets/fire-alarm-hero.jpg";
import weldingBlanket from "@/assets/welding-blanket.jpg";
import cableCoating from "@/assets/cable-coating.jpg";
import modularExtinguisher from "@/assets/modular-extinguisher.jpg";
import fireHoseReel from "@/assets/fire-hose-reel.jpg";
import co2Extinguisher from "@/assets/co2-extinguisher.jpg";
import consultancy from "@/assets/consultancy.jpg";
import ropeLadder from "@/assets/rope-ladder.jpg";
import safetyHelmet from "@/assets/safety-helmet.jpg";
import trafficCone from "@/assets/traffic-cone.jpg";
import safetyGlasses from "@/assets/safety-glasses.jpg";
import earMuff from "@/assets/ear-muff.jpg";
import respiratoryMask from "@/assets/respiratory-mask.jpg";
import faceShield from "@/assets/face-shield.jpg";
import safetyGloves from "@/assets/safety-gloves.jpg";
import safetyShoes from "@/assets/safety-shoes.jpg";
import coverallSuit from "@/assets/coverall-suit.jpg";
import boomBarrier from "@/assets/boom-barrier.jpg";
import lifeBuoy from "@/assets/life-buoy.jpg";

// Defined Product interface for type safety
export interface Product {
  id: number;
  name: string;
  unit: string;
  image: string;
  specs: Record<string, string>;
  category: string;
}

// Organized products array by categories for better readability
export const products: Product[] = [
  // ===== FIRE PROTECTION =====
  { id: 1, name: "ABC Type Fire Extinguisher", unit: "Piece", image: fireExtinguisher, category: "Fire Protection",
    specs: { Application: "Office, Hospital, Mall", Capacity: "6 Kg", Material: "Mild Steel", Type: "ABC", Color: "Red", "Delivery Time": "4 Days" } },
  { id: 2, name: "Water Foam Monitor", unit: "Unit", image: foamMonitor, category: "Fire Protection",
    specs: { "Connectivity Type": "Flanged / Threaded", "Control Type": "Manual", Material: "MS", "Mounting Type": "Flange Mounted", Warranty: "Yes", "Delivery Time": "4 Days" } },
  { id: 3, name: "Fire Hydrant System", unit: "Number", image: fireHydrant, category: "Fire Protection",
    specs: { Application: "Industry", "Input Power": "10 HP", Material: "MS", Usage: "Industrial", Warranty: "Yes", "Delivery Time": "4 Days" } },
  { id: 4, name: "Fire Alarm System", unit: "Strand", image: fireAlarm, category: "Fire Protection",
    specs: { "Coating Type": "Powder Coated", Connectivity: "Wired", Frequency: "50 Hz", Material: "Plastic", Mounting: "Surface Mount", Warranty: "Yes" } },
  { id: 5, name: "Welding Blanket", unit: "Piece", image: weldingBlanket, category: "Fire Protection",
    specs: { Application: "Industrial Fire & Welding", "Temp Range": "Up to 550°C", Weight: "900g", Technology: "Heat & Flame Resistant", "Delivery Time": "4 Days" } },
  { id: 6, name: "Fire Retardant Cable Coating", unit: "Kg", image: cableCoating, category: "Fire Protection",
    specs: { "Coating Type": "Fire Retardant", "Operating Pressure": "250 Bar", Type: "Intumescent Cable Coating", Mounting: "Surface coating", "Delivery Time": "4 Days" } },
  { id: 7, name: "Fire Extinguisher ABC 6Kg", unit: "Piece", image: fireExtinguisher, category: "Fire Protection",
    specs: { Capacity: "6 Kg", "Control Type": "Manual", Diameter: "150mm", Dimension: "520×150×150mm", "Max Flow": "0.5 kg/sec", Type: "ABC" } },
  { id: 8, name: "Modular Type Fire Extinguisher", unit: "Piece", image: modularExtinguisher, category: "Fire Protection",
    specs: { Application: "Commercial, Industrial, Residential", Capacity: "5 Kg", "Fire Class": "A, B, C", Material: "MS", Warranty: "Yes", "Delivery Time": "4 Days" } },
  { id: 9, name: "Fire Hose Reel", unit: "Unit", image: fireHoseReel, category: "Fire Protection",
    specs: { Color: "Red", Installation: "Fixed", Pressure: "7 Bar", Shape: "Circular", Usage: "First-aid firefighting", "Delivery Time": "4 Days" } },
  { id: 10, name: "CO2 Type Fire Extinguisher", unit: "Piece", image: co2Extinguisher, category: "Fire Protection",
    specs: { Capacity: "2 Kg", "Control Type": "Manual", Dimension: "450×110×110mm", Material: "Mild Steel", Type: "CO2", Warranty: "Yes" } },
  { id: 11, name: "Kannex CO2 Fire Extinguisher", unit: "Number", image: co2Extinguisher, category: "Fire Protection",
    specs: { Type: "CO2 Based", Application: "IT Rooms, Labs, Server Rooms", Variants: "2kg, 3kg, 4.5kg", Class: "B and C", Brand: "Kanex", "Delivery Time": "4 Days" } },
  { id: 12, name: "Fire Hydrant System Consultancy", unit: "Set", image: consultancy, category: "Fire Protection",
    specs: { Application: "Residential, Commercial, Industrial", "Fire Class": "A, B & C", Technology: "Conventional", Installation: "Wall-mounted", "Delivery Time": "4 Days" } },

  // ===== INDUSTRIAL SAFETY =====
  { id: 13, name: "Aluminium Rope Ladder", unit: "Piece", image: ropeLadder, category: "Industrial Safety",
    specs: { Color: "Yellow & Silver", Length: "15m", Function: "Fire rescue, evacuation", Waterproof: "Yes", Warranty: "Yes", "Delivery Time": "4 Days" } },
  { id: 14, name: "Pelican Head Torch", unit: "Piece", image: safetyHelmet, category: "Industrial Safety",
    specs: { Material: "Plastic", Type: "Helmet Mounted Torch", Weight: "150g", "Shelf Life": "5 Years", Reusable: "Yes", "Delivery Time": "4 Days" } },
  { id: 15, name: "Life Buoy", unit: "Piece", image: lifeBuoy, category: "Industrial Safety",
    specs: { Color: "Orange", Type: "Life Buoy", Reusable: "Yes", Waterproof: "Yes", Warranty: "Yes", "Delivery Time": "4 Days" } },
  { id: 16, name: "Electrical Safety Kit", unit: "Set", image: consultancy, category: "Industrial Safety",
    specs: { Gender: "Unisex", Reusable: "Yes", Waterproof: "Yes", Warranty: "Yes", Usage: "Safety", "Delivery Time": "4-5 Days" } },
  { id: 17, name: "Electrical Safety Kit - Saviour", unit: "Kit", image: consultancy, category: "Industrial Safety",
    specs: { Application: "Electrical maintenance, substations", Material: "Rubber, PVC, ABS, Leather", Type: "Safety Kit", Reusable: "Yes", "Delivery Time": "4 Days" } },
  { id: 18, name: "Fall Protection System", unit: "Set", image: ropeLadder, category: "Industrial Safety",
    specs: { Application: "Construction, rooftops, bridges", Material: "Stainless Steel", Type: "Horizontal Lifeline System", Weight: "15 Kg", "Delivery Time": "4 Days" } },

  // ===== ROAD PROTECTION =====
  { id: 19, name: "Traffic Cone", unit: "Piece", image: trafficCone, category: "Road Protection",
    specs: { Color: "Red", Material: "PVC", Feature: "High visibility", Usage: "Safety", Warranty: "Yes", "Delivery Time": "4 Days" } },
  { id: 20, name: "Rubber Car Stopper", unit: "Piece", image: trafficCone, category: "Road Protection",
    specs: { Material: "Rubber", Feature: "Heavy duty, durable", Type: "Car Stopper", Warranty: "Yes", "Delivery Time": "4 Days" } },
  { id: 21, name: "Automatic Boom Barrier", unit: "Piece", image: boomBarrier, category: "Road Protection",
    specs: { Color: "Red & Grey", Material: "Plastic", Power: "Electricity", Type: "Boom Barrier", Warranty: "Yes", "Delivery Time": "4 Days" } },
  { id: 22, name: "Solar Road Stud", unit: "Piece", image: trafficCone, category: "Road Protection",
    specs: { Dimension: "100×100×20mm", Material: "Polycarbonate / Aluminium", Power: "Solar", Type: "Road Stud", Warranty: "Yes", "Delivery Time": "4 Days" } },

  // ===== HEAD PROTECTION =====
  { id: 23, name: "Safety Helmet", unit: "Piece", image: safetyHelmet, category: "Head Protection",
    specs: { Color: "Yellow", Material: "Plastic", Type: "Safety Helmet", Feature: "Adjustable chin strap", Usage: "Construction, mining", "Delivery Time": "4 Days" } },
  { id: 24, name: "Construction Safety Helmet", unit: "Piece", image: safetyHelmet, category: "Head Protection",
    specs: { Material: "Plastic", Feature: "Impact resistant", Usage: "Construction sites", Type: "Safety Helmet", "Delivery Time": "4 Days" } },
  { id: 25, name: "Saviour Tough Hat Helmet", unit: "Number", image: safetyHelmet, category: "Head Protection",
    specs: { Color: "White, Yellow, Red", Style: "Open Face", Weight: "350g", Usage: "Industrial, Construction", Warranty: "Yes", Supply: "10,000/Week" } },

  // ===== EYE PROTECTION =====
  { id: 26, name: "Eye Protective Glasses", unit: "Piece", image: safetyGlasses, category: "Eye Protection",
    specs: { Color: "White", Material: "PP / Polycarbonate", Type: "Protective Glasses", Brand: "3M", Coating: "Hard Coat", Warranty: "Yes" } },

  // ===== EAR PROTECTION =====
  { id: 27, name: "Safety Ear Plugs", unit: "Piece", image: earMuff, category: "Ear Protection",
    specs: { Material: "Plastic", Reusable: "Yes", Waterproof: "Yes", Gender: "Unisex", Warranty: "Yes", "Delivery Time": "4 Days" } },
  { id: 28, name: "Safety Ear Muff", unit: "Piece", image: earMuff, category: "Ear Protection",
    specs: { Color: "Black", Material: "Plastic", Application: "Ear Protective", Reusable: "Yes", Gender: "Unisex", "Delivery Time": "4 Days" } },
  { id: 29, name: "Saviour Series 3 Goggles", unit: "Piece", image: safetyGlasses, category: "Ear Protection",
    specs: { Color: "Transparent", Material: "Plastic", Reusable: "Yes", Waterproof: "Yes", Warranty: "Yes", "Delivery Time": "4 Days" } },

  // ===== RESPIRATORY PROTECTION =====
  { id: 30, name: "Respiratory Protection Mask", unit: "Piece", image: respiratoryMask, category: "Respiratory",
    specs: { Color: "Grey", Material: "Plastic", Type: "Protection Mask", Waterproof: "Yes", Warranty: "Yes", "Delivery Time": "4-5 Days" } },
  { id: 31, name: "Full Face Mask P3 Cartridge", unit: "Piece", image: respiratoryMask, category: "Respiratory",
    specs: { Color: "Black", Application: "Medical, Pharma, Industrial", Type: "Reusable Mask", Size: "Universal", Supply: "1,000/Day", "Delivery Time": "4-5 Days" } },
  { id: 32, name: "Venus V44 Mask P1", unit: "Piece", image: respiratoryMask, category: "Respiratory",
    specs: { Color: "Yellow", Material: "Cotton", Reusable: "Yes", Gender: "Unisex", Warranty: "Yes", "Delivery Time": "4 Days" } },
  { id: 33, name: "R95 Particulate Respirator Mask", unit: "Piece", image: respiratoryMask, category: "Respiratory",
    specs: { Color: "White", Material: "Cotton", Reusable: "Yes", Gender: "Unisex", Warranty: "Yes", "Delivery Time": "4 Days" } },

  // ===== FACE PROTECTION =====
  { id: 34, name: "Face Protection Glass Shield", unit: "Piece", image: faceShield, category: "Face Protection",
    specs: { Color: "Transparent", Material: "Polycarbonate", Reusable: "Yes", Gender: "Unisex", Supply: "500/Day", "Delivery Time": "4 Days" } },
  { id: 35, name: "Heat Resistance Face Shield", unit: "Piece", image: faceShield, category: "Face Protection",
    specs: { Color: "Blue", Function: "Furnace, Boiler", Material: "Plastic", Reusable: "Yes", Waterproof: "Yes", Supply: "500/Day" } },
  { id: 36, name: "Welding Face Shield", unit: "Piece", image: faceShield, category: "Face Protection",
    specs: { Color: "Black", Material: "PP", Reusable: "Yes", Warranty: "Yes", Supply: "500/Day", "Delivery Time": "4 Days" } },

  // ===== HAND PROTECTION =====
  { id: 37, name: "Reusable Rubber Hand Gloves", unit: "Pair", image: safetyGloves, category: "Hand Protection",
    specs: { Color: "Yellow", Application: "Industrial, Housekeeping", Length: "12 inch", Size: "S, M, L", Supply: "1,000/Day", "Delivery Time": "4-5 Days" } },
  { id: 38, name: "Fire Resistant Safety Gloves", unit: "Piece", image: safetyGloves, category: "Hand Protection",
    specs: { Material: "Latex / Rubber", Reusable: "Yes", Waterproof: "Yes", Warranty: "Yes", Supply: "1,000/Day", "Delivery Time": "4-5 Days" } },
  { id: 39, name: "Safety Hand Gloves", unit: "Piece", image: safetyGloves, category: "Hand Protection",
    specs: { Color: "Green", Material: "Latex / Rubber", Reusable: "Yes", Waterproof: "Yes", Supply: "1,000/Day", "Delivery Time": "4-5 Days" } },
  { id: 40, name: "Saviour Cut Level 5 Gloves", unit: "Pair", image: safetyGloves, category: "Hand Protection",
    specs: { Standard: "EN388 Cut Level 5", Reusable: "Yes", Gender: "Unisex", Supply: "1,000/Day", "Delivery Time": "4 Days" } },
  { id: 41, name: "Hand Protection Safety Gloves", unit: "Pair", image: safetyGloves, category: "Hand Protection",
    specs: { Color: "Yellow & White", Material: "Leather", Reusable: "Yes", Gender: "Unisex", Supply: "1,000/Day", "Delivery Time": "4-5 Days" } },
  { id: 42, name: "Cotton Dotted Hand Gloves", unit: "Pair", image: safetyGloves, category: "Hand Protection",
    specs: { Color: "Blue", Material: "Cotton", Reusable: "Yes", Warranty: "Yes", Supply: "1,000/Day", "Delivery Time": "4-5 Days" } },

  // ===== FEET PROTECTION =====
  { id: 43, name: "Light Weight Safety Shoes", unit: "Pair", image: safetyShoes, category: "Feet Protection",
    specs: { Color: "Black", "Outsole Material": "PVC", Type: "Safety Shoes", Size: "All sizes available", "Delivery Time": "4 Days" } },
  { id: 44, name: "Safety Gumboots", unit: "Piece", image: safetyShoes, category: "Feet Protection",
    specs: { Color: "Black", "Insole Material": "EVA", Style: "Industrial Safety", Warranty: "Yes", "Delivery Time": "4 Days" } },
  { id: 45, name: "Splendid Industrial Safety Shoes", unit: "Unit", image: safetyShoes, category: "Feet Protection",
    specs: { Material: "Synthetic Leather", "Insole Material": "EVA", Style: "Lace Up", Warranty: "6 Months", Weight: "1 Kg", "Delivery Time": "4 Days" } },

  // ===== BODY PROTECTION =====
  { id: 46, name: "Disposable Coverall Suit", unit: "Piece", image: coverallSuit, category: "Body Protection",
    specs: { Material: "Polypropylene fabric", Reusable: "Yes", Waterproof: "Yes", Warranty: "Yes", Supply: "500/Day", "Delivery Time": "4 Days" } },
  { id: 47, name: "Body Protection Suit", unit: "Piece", image: coverallSuit, category: "Body Protection",
    specs: { Color: "Blue", Type: "Protection Suit", Gender: "Unisex", Warranty: "Yes", Supply: "500/Day", "Delivery Time": "4 Days" } },
  { id: 48, name: "Life Jacket", unit: "Piece", image: lifeBuoy, category: "Body Protection",
    specs: { Material: "Polycarbonate", Size: "Free Size", Reusable: "Yes", "Shelf Life": "5 Years", Supply: "500/Day", "Delivery Time": "4 Days" } },
  { id: 49, name: "Aluminized Kevlar Suit", unit: "Piece", image: coverallSuit, category: "Body Protection",
    specs: { Color: "Silver", Weight: "6.5 Kg", Function: "Foundries, steel plants, welding", Waterproof: "Yes", Supply: "500/Day", "Delivery Time": "4 Days" } },
];

// Exported categories for filtering
export const categories = [
  "All",
  "Fire Protection",
  "Industrial Safety",
  "Road Protection",
  "Head Protection",
  "Eye Protection",
  "Ear Protection",
  "Respiratory",
  "Face Protection",
  "Hand Protection",
  "Feet Protection",
  "Body Protection",
];
