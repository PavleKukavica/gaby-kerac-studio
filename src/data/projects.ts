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

import pBlueHero from "@/assets/portfolio/ChatGPT_Image_Oct_1_2026_11_03_35_PM.png.asset.json";
import pNavyHero from "@/assets/portfolio/ChatGPT_Image_Oct_1_2026_11_04_42_PM.png.asset.json";
import pGeoHero from "@/assets/portfolio/ChatGPT_Image_Oct_1_2026_11_08_04_PM.png.asset.json";
import pBlazerHero from "@/assets/portfolio/DVA09513.jpeg.asset.json";
import p09296 from "@/assets/portfolio/DVA09296.jpeg.asset.json";
import p09413 from "@/assets/portfolio/DVA09413.jpeg.asset.json";
import p09418 from "@/assets/portfolio/DVA09418.jpeg.asset.json";
import p09433 from "@/assets/portfolio/DVA09433.jpeg.asset.json";
import p09204 from "@/assets/portfolio/DVA09204.jpeg.asset.json";
import p09241 from "@/assets/portfolio/DVA09241.jpeg.asset.json";
import p09254 from "@/assets/portfolio/DVA09254.jpeg.asset.json";
import p09482 from "@/assets/portfolio/DVA09482.jpeg.asset.json";
import p09460 from "@/assets/portfolio/DVA09460.jpeg.asset.json";
import pBotHero from "@/assets/portfolio/zfezd.jpg.asset.json";
import pBotSketch from "@/assets/portfolio/UOj44.jpg.asset.json";
import pBotRender from "@/assets/portfolio/4C18W.jpg.asset.json";
import p09334 from "@/assets/portfolio/DVA09334.jpeg.asset.json";
import p09324 from "@/assets/portfolio/DVA09324.jpeg.asset.json";
import pCobHero from "@/assets/portfolio/112.png.asset.json";
import pCobSketch from "@/assets/portfolio/9YRIO.jpg.asset.json";
import pCobSkirt from "@/assets/portfolio/ChatGPT_Image_Oct_1_2026_10_52_13_PM.png.asset.json";
import p09343 from "@/assets/portfolio/DVA09343.jpeg.asset.json";
import p09361 from "@/assets/portfolio/DVA09361.jpeg.asset.json";
import pRivHero from "@/assets/portfolio/ChatGPT_Image_Oct_1_2026_11_00_44_PM.png.asset.json";
import pRivTech from "@/assets/portfolio/ChatGPT_Image_Oct_1_2026_10_58_48_PM.png.asset.json";
import pRivSketch from "@/assets/portfolio/ChatGPT_Image_Oct_1_2026_10_57_47_PM.png.asset.json";
import p09103 from "@/assets/portfolio/DVA09103.jpeg.asset.json";
import pRivPortrait from "@/assets/portfolio/1.jpeg.asset.json";

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
  imageScale?: "contain" | "cover";
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
    image: pBlueHero.url,
    imagePosition: "object-[center_32%]",
    renderImage: blueRender,
    concept:
      "A feminine dress with a structured bodice and flowing skirt. Designed to create movement and elegance while keeping a refined silhouette. The bold cobalt brings energy and freshness.",
    details: ["Hand sketch", "Digital flat", "CLO 3D fitting", "Final garment"],
    process: [
      { image: sketch07, caption: "Digital Croquis", kind: "sketch" },
      { image: blueRender, caption: "Digital flat", kind: "digital" },
      { image: blue2, caption: "Final piece, worn", kind: "final" },
      { image: p09296.url, caption: "Back silhouette", kind: "final" },
    ],
  },
  {
    slug: "navy-tailored-two-piece",
    number: "02",
    title: "Navy Tailored Two-Piece",
    category: "Contemporary Set",
    year: "2026",
    image: pNavyHero.url,
    imagePosition: "object-[center_30%]",
    concept:
      "A modern two-piece set designed with clean lines and a minimalist silhouette. The structured cropped vest creates a polished look, while the fitted trousers add balance and elegance. Silver button details bring subtle contrast and a refined finish to the design.",
    details: ["Concept development", "Hand sketch", "Pattern making", "Garment construction", "Final styling"],
    process: [
      { image: sketch01, caption: "Hand sketch", kind: "sketch" },
      { image: p09418.url, caption: "Pattern making", kind: "final" },
      { image: p09413.url, caption: "Silhouette study", kind: "final" },
      { image: black2, caption: "Vest detail · silver buttons", kind: "final" },
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
      { image: p09433.url, caption: "Cultural research", kind: "final" },
    ],
  },
  {
    slug: "tropical-floral-blouse",
    number: "04",
    title: "Structured Blazer",
    category: "Print / Daywear",
    year: "2026",
    image: tropical1,
    imageScale: "contain",
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
      { image: p09204.url, caption: "Cut pattern pieces", kind: "final" },
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
    image: pGeoHero.url,
    concept:
      "A coordinated two-piece set featuring soft geometric patterns and a contemporary fitted silhouette. The cropped top and matching shorts create a balanced, playful composition inspired by modern art and youthful summer styling. Muted tones and clean construction give the design a refined yet relaxed character.",
    details: ["Design research", "Pattern coordination", "Hand sketch", "Garment development", "Final styling and presentation"],
    process: [
      { image: sketch04, caption: "Hand sketch", kind: "sketch" },
      { image: geometric2, caption: "Movement, full silhouette", kind: "final" },
      { image: p09241.url, caption: "Back view · print alignment across seams", kind: "final" },
      { image: p09254.url, caption: "Seated study · proportion and ease", kind: "final" },
    ],
  },
  {
    slug: "minimalist-blazer",
    number: "07",
    title: "Minimalist Structured Blazer",
    category: "Tailoring",
    year: "2024",
    image: pBlazerHero.url,
    concept:
      "A modern tailored blazer designed with clean construction and an elegant oversized silhouette. The deep burgundy tone adds sophistication, while the minimal details emphasize shape, proportion, and craftsmanship. Created to combine timeless tailoring with a contemporary fashion aesthetic.",
    details: ["Concept development", "Pattern drafting", "Tailoring techniques", "Garment fitting", "Final construction and finishing"],
    process: [
      { image: sketch05, caption: "Concept sketch", kind: "sketch" },
      { image: blazer1, caption: "Signature pin · gold detail", kind: "final" },
      { image: p09482.url, caption: "Fitting on dressform", kind: "final" },
      { image: p09460.url, caption: "Pinning, atelier", kind: "final" },
    ],
  },
  {
    slug: "botanical-halter-sundress",
    number: "08",
    title: "Botanical Halter Sundress",
    category: "Resort / Summer",
    year: "2026",
    image: pBotHero.url,
    concept:
      "A halter-neck midi sundress cut from navy-and-white botanical print. The open back and soft neck tie bring lightness, while the gathered skirt moves freely with every step. Designed for warm garden afternoons, balancing romance with clean, modern lines.",
    details: ["Print research", "Fashion illustration", "Digital render", "Pattern making", "Final garment"],
    process: [
      { image: pBotSketch.url, caption: "Illustration · front, back & swatch", kind: "sketch" },
      { image: pBotRender.url, caption: "Digital render", kind: "digital" },
      { image: p09334.url, caption: "Skirt volume, in motion", kind: "final" },
      { image: p09324.url, caption: "Open back · neck tie", kind: "final" },
    ],
  },
  {
    slug: "cobalt-skater-skirt",
    number: "09",
    title: "Cobalt Skater Skirt & Poplin Shirt",
    category: "Contemporary Daywear",
    year: "2026",
    image: pCobHero.url,
    concept:
      "A crisp white sleeveless poplin top paired with a high-waisted cobalt skater skirt. The contrast of clean white and saturated blue creates a confident, graphic look, while the circle cut of the skirt adds playful movement to an otherwise minimal silhouette.",
    details: ["Color study", "Fashion illustration", "Skirt development", "Garment construction", "Final styling"],
    process: [
      { image: pCobSketch.url, caption: "Illustration · front, back & swatch", kind: "sketch" },
      { image: pCobSkirt.url, caption: "Skirt render · front & back", kind: "digital" },
      { image: p09343.url, caption: "Full look, studio", kind: "final" },
      { image: p09361.url, caption: "Side profile · styled", kind: "final" },
    ],
  },
  {
    slug: "riviera-polka-dot",
    number: "10",
    title: "Riviera Polka Dot & Mauve Ensemble",
    category: "Resort Set",
    year: "2026",
    image: pRivHero.url,
    imageScale: "contain",
    concept:
      "A two-piece resort ensemble combining a navy polka-dot crop top with a paneled mauve-and-navy skirt. Inspired by lakeside summers on the Riviera, the design plays with retro print and soft color blocking for a look that feels nostalgic yet fresh.",
    details: ["Mood & location research", "Technical flats", "Fabric selection", "Garment construction", "Editorial styling"],
    process: [
      { image: pRivTech.url, caption: "Technical sheet · flats & swatches", kind: "digital" },
      { image: pRivSketch.url, caption: "Fashion croquis · side & back", kind: "sketch" },
      { image: p09103.url, caption: "Studio silhouette", kind: "final" },
      { image: pRivPortrait.url, caption: "Atmosphere & texture", kind: "final" },
    ],
  },
];
