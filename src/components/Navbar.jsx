import {useState, useEffect} from 'react';

const Navbar = () => {
    const [active, setActive] = useState(false);
    useEffect(()=> {
        const handleScroll = () => {
            if (window.scrollY > 150){
                setActive(true);
            } else{
                setActive(false);
            }
        };

        window.addEventListener('scroll',handleScroll);
        return () =>{
            window.removeEventListener('scroll', handleScroll)
        };
    },[]);
  return (
    <div className="navbar py-7 flex items-center justify-between px-10">
      <div className="logo">
        <h1 className="text-2xl font-bold text-white py-2 px-3 rounded-[10px] bg-gradient-to-tr from-zinc-800 to-zinc-800">
          Portofolio
        </h1>

      </div>
      <ul className={`menu flex items-center sm:gap-10 gap-4 
    md:static fixed left-1/2 -translate-x-1/2 
    md:translate-x-0 md:opacity-100 md:top-0 
    transition-all duration-500 ease-in-out bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40
    ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>

        <li><a href="#beranda" className="sm:text-lg text-base font-medium">Home</a></li>
        <li><a href="#tentang" className="sm:text-lg text-base font-medium">About</a></li>
        <li><a href="#alat" className="sm:text-lg text-base font-medium">Tools</a></li>
        <li><a href="#proyek" className="sm:text-lg text-base font-medium">Project</a></li>
        <li><a href="#kontak" className="sm:text-lg text-base font-medium">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;