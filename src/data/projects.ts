import blueDress from "@/assets/projects/blue-dress.jpg";
import floral from "@/assets/projects/floral-two-piece.png";
import oriental from "@/assets/projects/oriental-dress.png";
import wrap from "@/assets/projects/wrap-skirt.jpg";
import colorblock from "@/assets/projects/colorblock-skirt.jpg";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  image: string;
  concept: string;
  details: string[];
};

export const projects: Project[] = [
  {
    slug: "blue-fit-and-flare",
    number: "01",
    title: "Blue Fit-and-Flare Dress",
    category: "Eveningwear",
    year: "2024",
    image: blueDress,
    concept:
      "A feminine silhouette with a fitted bodice and flared skirt, designed for movement and elegance. The soft neckline and cap sleeves create a refined, youthful presence, while the saturated cobalt brings freshness and versatility.",
    details: ["Hand sketch", "Digital flat", "CLO 3D fitting", "Final garment"],
  },
  {
    slug: "floral-two-piece",
    number: "02",
    title: "Floral Two-Piece Dress",
    category: "Day to Evening",
    year: "2024",
    image: floral,
    concept:
      "A modern two-piece set pairing a structured cropped top with a high-waisted pleated skirt. Painterly florals lend softness and romance, while the silhouette stays clean and contemporary.",
    details: ["Print study", "Pattern blocks", "Editorial shoot"],
  },
  {
    slug: "oriental-fitted",
    number: "03",
    title: "Oriental-Inspired Fitted Dress",
    category: "Couture Study",
    year: "2023",
    image: oriental,
    concept:
      "A fitted dress inspired by traditional oriental silhouettes — a high collar, asymmetrical neckline, and delicate embroidery. The piece blends cultural reference with modern tailoring.",
    details: ["Cultural research", "Embroidery samples", "Tailored fit"],
  },
  {
    slug: "asymmetrical-wrap-skirt",
    number: "04",
    title: "Asymmetrical Wrap Skirt",
    category: "Tailoring",
    year: "2024",
    image: wrap,
    concept:
      "A structured wrap skirt with a sharp high waist, layered front and sculptural drape. Burgundy wool and quiet button details create a bold yet restrained statement.",
    details: ["Drape study", "Construction notes", "Color trial"],
  },
  {
    slug: "asymmetrical-colorblock",
    number: "05",
    title: "Asymmetrical Color-Block Skirt",
    category: "Signature",
    year: "2025",
    image: colorblock,
    concept:
      "A minimal skirt with a flowing silhouette and decisive black-and-white contrast. The diagonal seam creates a modern, sculptural identity rooted in graphic clarity.",
    details: ["Concept sketch", "CLO 3D drape", "Final piece"],
  },
];
