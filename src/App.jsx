import React, { useState } from "react";
import DataImage, { listTools, listProyek } from "./data";

// KOMONEN PROYEK
function ProyekBox({ proyek }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}  data-aos-once="true">
      <img src={proyek.gambar} alt="Project Image" loading="lazy" className="rounded-[5px]" />
      <div>
        <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
        <p className={`text-base/loose mb-4 ${readMore ? "" : "line-clamp-3"}`}>
          {proyek.desk}
        </p>
        <button
          onClick={() => setReadMore(!readMore)}
          className="text-violet-500 font-semibold"
        >
          {readMore ? "Close" : "Read More..."}
        </button>

        <div className="flex flex-wrap gap-2 mt-4">
          {proyek.tools.map((tool, index) => (
            <p
              className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
              key={index}
            >
              {tool}
            </p>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
            href="#">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-0 px-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>Turning ideas into delightful experiences💫</q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">Hi, I'm Zibeon Jonriano</h1>
          <p className="text-base/loose mb-6 opacity-50">
            An Information Systems undergraduate passionate about crafting user-centered digital products.
            This portfolio showcases my work in UI/UX design, web development, and collaborative tech-driven projects.
            With a growth mindset and strong attention to detail, I strive to build meaningful, functional, and user-friendly solutions.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a 
              href="https://drive.google.com/uc?export=download&id=1wD-Yhb0SfdUTWpY5tE-VgZJY76ekQH33"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500 text-sm sm:text-base"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>

            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500 text-sm sm:text-base">
              View Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={isHovered ? DataImage.HeroImageHover : DataImage.HeroImage}
          alt="Hero Image"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-[375px] rounded-[80px] md:ml-auto transition duration-300 animate__animated animate__fadeInUp animate__delay-4s"
        />
      </div>

      {/* tentang */}
      <div className="tentang mt-20 py-5 px-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
          <p className="text-base/loose mb-10">
            Hey there! I’m Zibeon, a curious soul who enjoys designing and building digital products that
            not only look good, but also feel right. I believe great design is about empathy and simplicity.
            Outside of pixels and prototypes, I love learning new things, diving into creative side projects,
            and enjoying good conversations over coffee.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex flex-col sm:flex-row gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  5<span className="text-violet-500">+</span>
                </h1>
                <p>Completed Projects</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-violet-500">+</span>
                </h1>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32" id="alat">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true">Tools I Usually Use</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"  data-aos-once="true">
            Here are some of the tools I commonly use for web development and design.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.td} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}  data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* proyek */}
      <div className="proyek mt-32 py-10 px-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50 lg:mt-7 sm:mt-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"  data-aos-once="true">
          Here are some of the projects and designs I have worked on.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <ProyekBox key={proyek.id} proyek={proyek} />
          ))}
        </div>
      </div>

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0 p-10" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Let's connect with me...</p>
        <form action="https://formsubmit.co/zibeonjonriano21@gmail.com" method="POST"  className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input type="text" name="nama" placeholder="Enter your full name" className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Enter your email" className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Message</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" className="border border-zinc-500 p-2 rounded-md" placeholder="Write message..." required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer block border border-zinc-600 hover:bg-violet-600">
              Send Message</button>
            </div>
          </div>
        </form>
      </div>
      {/* kontak */} 
    </>
  );
}

export default App;
