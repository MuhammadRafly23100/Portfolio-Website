import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/php.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },

  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "PHP",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/porto1.webp";
import Proyek2 from "/assets/proyek/porto2.webp";
import Proyek3 from "/assets/proyek/porto3.webp";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Monitoring MBG",
    desk: "Website yang dirancang untuk memonitoring distribusi Makan Bergizi Gratis (MBG)",
    tools: ["HTML", "CSS", "PHP Native", "Bootstrap"],
    dad: "200",
    link:"https://monitoringmbg.my.id/",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Sites Craft",
    desk: "Design Aplikasi Marketplace produk daur ulang berkualitas tinggi",
    tools: ["Figma"],
    dad: "300",
    link: "https://www.figma.com/proto/pEvZsQN2RbvQPB2ceR4Wyz/Sides-Craft?page-id=0%3A1&node-id=13-149&p=f&viewport=667%2C57%2C0.56&t=KPuTIEtZCRyQNJZE-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=13%3A149&show-proto-sidebar=1",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "SiLapor",
    desk: "Sebuah Website yang dibuat untuk wadah untuk mahasiswa Fakultas Ilmu Komputer Unsika melaporkan aspirasinya",
    tools: ["HTML", "CSS", "PHP Native", "Bootstrap"],
    dad: "400",
    link: "https://github.com/DithaAlfariz/Kelompok2PBW.git",
  },
  
];
