import { Link } from "react-scroll";
import { useSelector } from "react-redux";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <ul className={`flex lg:flex-row sm:flex-col gap-6 font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl lg:bg-transparent sm:w-full py-4 transition-colors duration-300 sm:z-40 ${
      theme === 'light' ? 'text-slate-700' : 'text-gray-200'
    } ${
      theme === 'light' ? 'sm:bg-white/95 sm:border sm:border-slate-200 sm:rounded-2xl sm:shadow-lg sm:shadow-slate-900/5' : 'sm:bg-gray-900/95'
    } backdrop-blur-lg`}>
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={800}
              offset={-130}
              to={link.section}
              className={`cursor-pointer transition-all duration-500 focus:outline-none focus:ring-2 rounded px-2 py-1 ${
                theme === 'light' 
                  ? 'text-slate-700 hover:text-blue-600 focus:text-blue-600 focus:ring-blue-500/50' 
                  : 'text-gray-200 hover:text-blue-400 focus:text-blue-400 focus:ring-blue-500/50'
              }`}
              tabIndex={0}
              role="button"
              aria-label={`Navigate to ${link.link} section`}
            >
              {link.link}
            </Link>
            <div className={`mx-auto w-0 group-hover:w-full group-focus-within:w-full h-[2px] transition-all duration-500 ${
              theme === 'light' ? 'bg-blue-600' : 'bg-blue-400'
            }`}></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
