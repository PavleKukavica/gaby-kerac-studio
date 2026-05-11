import blueRender from "@/assets/projects/blue-dress.jpg";
import orientalRender from "@/assets/projects/oriental-dress.png";

import bluePhoto from "@/assets/photos/blue-flare-dress.jpg";
import blue1 from "@/assets/projects/01-blue-1.jpg";
import blue2 from "@/assets/projects/01-blue-2.jpg";
import blue3 from "@/assets/projects/01-blue-3.jpg";

import black1 from "@/assets/projects/02-black-set-1.jpg";
import black2 from "@/assets/projects/02-black-set-2.jpg";
import black3 from "@/assets/projects/02-black-set-3.jpg";

import oriental1 from "@/assets/projects/03-oriental-1.jpg";
import oriental2 from "@/assets/projects/03-oriental-2.jpg";
import oriental3 from "@/assets/projects/03-oriental-3.jpg";

import tropical1 from "@/assets/projects/04-tropical-1.jpg";
import tropical2 from "@/assets/projects/04-tropical-2.jpg";

import abstract1 from "@/assets/projects/05-abstract-1.jpg";
import abstract2 from "@/assets/projects/05-abstract-2.jpg";
import abstract3 from "@/assets/projects/05-abstract-3.jpg";
import abstract4 from "@/assets/projects/05-abstract-4.jpg";

import geometric1 from "@/assets/projects/06-geometric-1.jpg";
import geometric2 from "@/assets/projects/06-geometric-2.jpg";

import blazer1 from "@/assets/projects/07-blazer-1.jpg";
import blazer2 from "@/assets/projects/07-blazer-2.jpg";
import blazer3 from "@/assets/projects/07-blazer-3.jpg";
import blazer4 from "@/assets/projects/07-blazer-4.jpg";

import sketch01 from "@/assets/projects/sketches/01-sketch.png";
import sketch02 from "@/assets/projects/sketches/02-sketch.png";
import sketch03 from "@/assets/projects/sketches/03-sketch.png";
import sketch04 from "@/assets/projects/sketches/04-sketch.png";
import sketch05 from "@/assets/projects/sketches/05-sketch.png";
import sketch06 from "@/assets/projects/sketches/06-sketch.png";
import sketch07 from "@/assets/projects/sketches/07-sketch.png";

export type ProcessKind = "sketch" | "digital" | "clo3d" | "motion" | "final" | "placeholder";

export type ProcessItem = {
  image?: string;
  caption: string;
  kind: ProcessKind;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  image: string;
  imagePosition?: string;
  renderImage?: string;
  concept: string;
  details: string[];
  process: ProcessItem[];
  motionSrc?: string;
};

export const projects: Project[] = [
  {
    slug: "blue-fit-and-flare",
    number: "01",
    title: "Blue Fit-and-Flare Dress",
    category: "Eveningwear",
    year: "2024",
    image: bluePhoto,
    renderImage: blueRender,
    concept:
      "A feminine dress with a structured bodice and flowing skirt. Designed to create movement and elegance while keeping a refined silhouette. The bold cobalt brings energy and freshness.",
    details: ["Hand sketch", "Digital flat", "CLO 3D fitting", "Final garment"],
    process: [
      { image: sketch07, caption: "Digital Croquis", kind: "sketch" },
      { image: blueRender, caption: "Digital flat", kind: "digital" },
      { image: blue1, caption: "Back silhouette", kind: "final" },
      { image: blue2, caption: "Final piece, worn", kind: "final" },
    ],
  },
  {
    slug: "navy-tailored-two-piece",
    number: "02",
    title: "Navy Tailored Two-Piece",
    category: "Contemporary Set",
    year: "2026",
    image: black1,
    imagePosition: "object-top",
    concept:
      "A modern two-piece set designed with clean lines and a minimalist silhouette. The structured cropped vest creates a polished look, while the fitted trousers add balance and elegance. Silver button details bring subtle contrast and a refined finish to the design.",
    details: ["Concept development", "Hand sketch", "Pattern making", "Garment construction", "Final styling"],
    process: [
      { image: sketch01, caption: "Hand sketch", kind: "sketch" },
      { image: black2, caption: "Vest detail · silver buttons", kind: "final" },
      { image: black3, caption: "Silhouette study", kind: "final" },
      { caption: "Pattern making", kind: "placeholder" },
    ],
  },
  {
    slug: "oriental-fitted",
    number: "03",
    title: "Oriental-Inspired Fitted Dress",
    category: "Couture Study",
    year: "2025",
    image: oriental1,
    renderImage: orientalRender,
    concept:
      "A fitted design inspired by traditional forms, with an asymmetrical neckline. Cultural reference meets precise modern tailoring.",
    details: ["Cultural research", "Embroidery samples", "Tailored fit"],
    process: [
      { image: sketch06, caption: "Digital concept", kind: "sketch" },
      { image: oriental2, caption: "Back, brocade", kind: "final" },
      { image: oriental3, caption: "Side, blossom", kind: "final" },
      { caption: "Cultural research", kind: "placeholder" },
    ],
  },
  {
    slug: "tropical-floral-blouse",
    number: "04",
    title: "Structured Blazer",
    category: "Print / Daywear",
    year: "2026",
    image: tropical1,
    concept:
      "A lightweight sleeveless blouse inspired by tropical nature and vibrant summer colors. The flowing silhouette and artistic floral print create a fresh, playful look while maintaining a clean and elegant shape. Designed to combine comfort, movement, and expressive pattern details.",
    details: ["Fabric selection", "Print composition", "Hand sketch", "Pattern development", "Final garment styling"],
    process: [
      { image: sketch02, caption: "Print composition", kind: "sketch" },
      { image: tropical2, caption: "Final, in motion", kind: "final" },
      { caption: "Hand sketch", kind: "placeholder" },
      { caption: "Pattern development", kind: "placeholder" },
    ],
  },
  {
    slug: "abstract-print-shirt",
    number: "05",
    title: "Abstract Print Statement Shirt",
    category: "Wearable Art",
    year: "2026",
    image: abstract2,
    concept:
      "A contemporary short-sleeve shirt designed with expressive abstract prints and warm sun-inspired tones. The relaxed silhouette is balanced with structured tailoring details, creating a modern yet artistic aesthetic. The vibrant composition brings energy, creativity, and individuality to the garment.",
    details: ["Creative concept", "Print placement design", "Digital illustration", "Garment construction", "Final presentation"],
    process: [
      { image: sketch03, caption: "Digital illustration", kind: "sketch" },
      { image: abstract1, caption: "Cut pattern pieces", kind: "sketch" },
      { image: abstract3, caption: "Back panel", kind: "final" },
      { image: abstract4, caption: "Final, styled", kind: "final" },
    ],
  },
  {
    slug: "geometric-two-piece",
    number: "06",
    title: "Geometric Two-Piece Ensemble",
    category: "Coordinated Set",
    year: "2024",
    image: geometric1,
    imagePosition: "object-top",
    concept:
      "A coordinated two-piece set featuring soft geometric patterns and a contemporary fitted silhouette. The cropped top and matching shorts create a balanced, playful composition inspired by modern art and youthful summer styling. Muted tones and clean construction give the design a refined yet relaxed character.",
    details: ["Design research", "Pattern coordination", "Hand sketch", "Garment development", "Final styling and presentation"],
    process: [
      { image: sketch04, caption: "Hand sketch", kind: "sketch" },
      { image: geometric2, caption: "Movement, full silhouette", kind: "final" },
      { caption: "Pattern coordination", kind: "placeholder" },
      { caption: "Design research", kind: "placeholder" },
    ],
  },
  {
    slug: "minimalist-blazer",
    number: "07",
    title: "Minimalist Structured Blazer",
    category: "Tailoring",
    year: "2024",
    image: blazer3,
    concept:
      "A modern tailored blazer designed with clean construction and an elegant oversized silhouette. The deep burgundy tone adds sophistication, while the minimal details emphasize shape, proportion, and craftsmanship. Created to combine timeless tailoring with a contemporary fashion aesthetic.",
    details: ["Concept development", "Pattern drafting", "Tailoring techniques", "Garment fitting", "Final construction and finishing"],
    process: [
      { image: sketch05, caption: "Concept sketch", kind: "sketch" },
      { image: blazer1, caption: "Signature pin · gold detail", kind: "final" },
      { image: blazer2, caption: "Fitting on dressform", kind: "clo3d" },
      { image: blazer4, caption: "Pinning, atelier", kind: "sketch" },
    ],
  },
];
