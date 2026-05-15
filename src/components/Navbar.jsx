function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">

        <h1 className="text-xl md:text-2xl font-semibold tracking-wide text-white text-center">
          Raviteja Cherupally
        </h1>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-white text-sm md:text-base">

          <li>
            <a href="#about" className="hover:text-gray-300 transition duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-gray-300 transition duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-gray-300 transition duration-300">
              Projects
            </a>
          </li>

           <li>
            <a href="#contact" className="hover:text-gray-300 transition duration-300">
              Internships
            </a>
          </li>

           <li>
            <a href="#contact" className="hover:text-gray-300 transition duration-300">
              Courses
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-gray-300 transition duration-300">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;