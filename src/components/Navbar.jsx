import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-4 md:py-8 flex flex-col md:flex-row items-center justify-between px-10 ">
      {/* Logo mobile */}
      <div className="logo mb-4 md:hidden">
        <h1
          className="text-2xl font-semibold text-white 
               py-2 px-3 
               bg-white/10 backdrop-blur-sm 
               border-[0.1px] border-white/30 
               shadow-[inset_0_0_8px_1px_hsl(0,0%,1%)] 
               rounded-4xl"
        >
          Portofolio
        </h1>
      </div>

      {/* Navbar */}
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 
          fixed left-1/2 -translate-x-1/2 px-4 md:px-6 
          md:top-[20px] md:opacity-100 md:bg-white/10 md:backdrop-blur-md md:p-4 md:rounded-4xl md:border-[0.1px] md:border-white/30 
          transition-all duration-500 ease-in-out
          bg-white/10 backdrop-blur-md p-4 rounded-4xl border-[0.1px] border-white/30
          z-40 shadow-[inset_0_0_8px_1px_hsl(0,0%,1%)] 
          ${active ? "top-[10px] opacity-100" : "top-[-10px] opacity-0"}
        `}
      >
        {/* Logo desktop di dalam navbar */}
        <li className="hidden md:block mr-6">
          <h1
            className="text-2xl font-semibold text-white 
             l"
          >
            Portofolio
          </h1>
        </li>

        <li>
          <a href="#beranda" className="sm:text-lg text-base font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#tentang" className="sm:text-lg text-base font-medium">
            About
          </a>
        </li>
        <li>
          <a href="#alat" className="sm:text-lg text-base font-medium">
            Tools
          </a>
        </li>
        <li>
          <a href="#proyek" className="sm:text-lg text-base font-medium">
            Project
          </a>
        </li>
        <li>
          <a href="#kontak" className="sm:text-lg text-base font-medium">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
