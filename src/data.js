import HeroImage from "/assets/hero-img.webp";
import HeroImageHover from "/assets/hero-img-hover.webp";
import React, { useState } from "react";


const Image = {
  HeroImage,
  HeroImageHover,
};

export default Image;


import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/python.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/css.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/java.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/html.png";
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
    id: 3,
    gambar: Tools3,
    nama: "Python",
    ket: "Language",
    dad: "300",
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
    nama: "CSS",
    ket: "Language",
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
    nama: "Java",
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
    id: 9,
    gambar: Tools9,
    nama: "HTML",
    ket: "Language",
    dad: "900",
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

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "UrbanHome Prototype Website Design",
    desk: "UrbanHome Website is an e-commerce platform dedicated to offering a wide range of home decor products. It enables customers to easily browse various items, add them to their shopping cart, and complete secure purchases online. The website features well-organized product categories to help users find exactly what they need, along with a simple blog section that provides inspiration, tips, and ideas for decorating their homes. Designed with a clean and user-friendly interface, UrbanHome aims to deliver a seamless shopping experience that makes furnishing and beautifying any living space both convenient and enjoyable.",
    tools: ["Figma","Canva"],
    dad: "200",
    link: "https://ristek.link/UrbanHome_HiFi_Zibeon",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "SoyLearn Prototype Mobile App Design",
    desk: "SoyLearn is a Learning Management System (LMS) designed to enhance the efficiency of digital learning. This application offers features such as an interactive dashboard, a task management system with automatic notifications, access to learning materials in various formats, real-time discussion forums, and multi-device support. With a student-centered learning approach, SoyLearn aims to provide a more flexible, structured, and interactive learning experience for both students and lecturers.",
    tools: ["Figma","Canva"],
    dad: "300",
    link: "https://ristek.link/SoyLearn_HiFi_Zibeon",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "PitPet Prototype Website Design",
    desk: "PitPet is a marketing website for an IoT wearable product designed specifically for pets. This platform provides comprehensive information for pet owners about PitPet’s features and benefits, including real-time health, activity, and location monitoring through a companion app. With its intuitive and user-friendly design, PitPet makes it easy for users to explore the product, understand the technology behind it, and complete purchases through a seamless and interactive experience. This prototype was developed as part of a university course project.",
    tools: ["Figma","Canva"],
    dad: "400",
    link: "https://ristek.link/PitPetWeb_HiFi_Zibeon",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "IACP Prototype Website Design",
    desk: "Integrated Anti-Corruption Platform (IACP) is a web platform designed to enhance transparency and accountability in the education sector through an integrated system for corruption reporting and audit management. Developed using a Design Thinking approach, its design prioritizes security, intuitive navigation, and informative data visualizations to support efficient reporting and investigation processes.",
    tools: ["Figma","Canva"],
    dad: "500",
    link: "https://ristek.link/IACP_HiFi_Zibeon"
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Compfest 17 Prototype Website Design",
    desk: "Comfest 17 Competition Landing Page is a prototype design for the main page of Indonesia’s largest annual technology competition website. Using a Design Thinking approach, this design focuses on delivering clear information, an intuitive user experience, and visually engaging elements to attract participants from diverse backgrounds. The landing page highlights key event features, competition categories, and prominent registration call-to-actions with a modern, responsive layout to maximize engagement and boost competition sign-ups.",
    tools: ["Figma","Canva"],
    dad: "600",
    link: "https://ristek.link/Compfest17_HiFi_Zibeon",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "TerraStock Prototype Website Design",
    desk: "Terrastock is a B2B e-commerce web platform that streamlines the distribution of aquaculture and livestock products directly to businesses, reducing dependency on middlemen. It enables suppliers, fish farmers, and livestock breeders to efficiently market their products while receiving support in animal health management through the TerraStock AI consultation feature. Additionally, an AI-powered chatbot assists both suppliers and buyers throughout transactions and overall platform usage, ensuring a seamless and transparent experience.",
    tools: ["Figma","Canva"],
    dad: "700",
    link: "https://ristek.link/TerraStock_HiFi_Zibeon",
  },
];