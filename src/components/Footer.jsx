

const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center px-10 animate__animated animate__fadeInUp animate__delay-3s">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div  className="flex gap-7">
            <a href="#beranda">Home</a>
            <a href="#tentang">About</a>
            <a href="#alat">Tools</a>
            <a href="#proyek">Project</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/zibeonjonriano">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/zibeonjonriano?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
            <a href="https://instagram.com/zibeonn">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="https://line.me/ti/p/DkVIG4_Nzi">
                <i className="ri-line-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer