import blueRender from "@/assets/projects/blue-dress.jpg";
import floral from "@/assets/projects/floral-two-piece.png";
import orientalRender from "@/assets/projects/oriental-dress.png";
import wrap from "@/assets/projects/wrap-skirt.jpg";
import colorblock from "@/assets/projects/colorblock-skirt.jpg";

import bluePhoto from "@/assets/photos/blue-flare-dress.jpg";
import orientalPhoto from "@/assets/photos/red-oriental-dress.jpg";
import paintedShirt from "@/assets/photos/painted-shirt.jpg";

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
  image: string;          // primary display image (real photo if available, else render)
  renderImage?: string;   // CLO 3D / digital flat render
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
      { caption: "Hand sketch", kind: "placeholder" },
      { image: blueRender, caption: "Digital flat", kind: "digital" },
      { caption: "CLO 3D fitting", kind: "placeholder" },
      { image: bluePhoto, caption: "Final piece, worn", kind: "final" },
    ],
  },
  {
    slug: "floral-two-piece",
    number: "02",
    title: "Floral Two-Piece Dress",
    category: "Day to Evening",
    year: "2024",
    image: floral,
    concept:
      "A modern structured set pairing a cropped top with a high-waisted pleated skirt. The floral pattern adds softness while the silhouette stays clean and architectural.",
    details: ["Print study", "Pattern blocks", "Editorial shoot"],
    process: [
      { caption: "Print study", kind: "placeholder" },
      { caption: "Pattern blocks", kind: "placeholder" },
      { image: floral, caption: "Final piece", kind: "final" },
    ],
  },
  {
    slug: "oriental-fitted",
    number: "03",
    title: "Oriental-Inspired Fitted Dress",
    category: "Couture Study",
    year: "2023",
    image: orientalPhoto,
    renderImage: orientalRender,
    concept:
      "A fitted design inspired by traditional forms, with a high collar and asymmetrical neckline. Cultural reference meets precise modern tailoring.",
    details: ["Cultural research", "Embroidery samples", "Tailored fit"],
    process: [
      { caption: "Cultural research", kind: "placeholder" },
      { image: orientalRender, caption: "Digital concept", kind: "digital" },
      { caption: "CLO 3D fitting", kind: "placeholder" },
      { image: orientalPhoto, caption: "Final piece, worn", kind: "final" },
    ],
  },
  {
    slug: "asymmetrical-wrap-skirt",
    number: "04",
    title: "Asymmetrical Wrap Skirt",
    category: "Tailoring",
    year: "2024",
    image: wrap,
    concept:
      "A high-waisted wrap skirt with layered construction and decisive lines. The structured drape and bold color create a confident modern statement.",
    details: ["Drape study", "Construction notes", "Color trial"],
    process: [
      { caption: "Drape study", kind: "placeholder" },
      { caption: "Construction notes", kind: "placeholder" },
      { image: wrap, caption: "Final piece", kind: "final" },
    ],
  },
  {
    slug: "asymmetrical-colorblock",
    number: "05",
    title: "Asymmetrical Color-Block Skirt",
    category: "Signature",
    year: "2025",
    image: colorblock,
    concept:
      "A minimal, striking design built on black-and-white contrast and asymmetry. Focused on structure, movement, and visual impact.",
    details: ["Concept sketch", "CLO 3D drape", "Final piece"],
    process: [
      { caption: "Concept sketch", kind: "placeholder" },
      { caption: "CLO 3D drape", kind: "placeholder" },
      { image: colorblock, caption: "Final piece", kind: "final" },
    ],
  },
  {
    slug: "painted-panel-shirt",
    number: "06",
    title: "Painted Panel Shirt",
    category: "Hand-Painted / Wearable Art",
    year: "2025",
    image: paintedShirt,
    concept:
      "A crisp poplin shirt extended into a hand-painted back panel — brushwork in saffron, terracotta, and sage. The piece treats the garment as canvas while the front stays sharply tailored.",
    details: ["Painting study", "Panel construction", "Final piece"],
    process: [
      { caption: "Painting study", kind: "placeholder" },
      { caption: "Panel construction", kind: "placeholder" },
      { image: paintedShirt, caption: "Final piece, worn", kind: "final" },
    ],
  },
];
