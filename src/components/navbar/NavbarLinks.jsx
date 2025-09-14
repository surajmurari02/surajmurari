import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FEATURE_FLAGS } from "../../config/features";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const theme = useSelector((state) => state.theme.mode);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname.startsWith('/blog');

  return (
    <ul className={`flex xl:flex-row sm:flex-col gap-8 xl:gap-10 font-body font-medium xl:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] xl:text-lg lg:text-xl sm:text-lg bg-transparent sm:w-full py-4 transition-colors duration-300 sm:z-40 ${
      theme === 'light' ? 'text-slate-700' : 'text-gray-200'
    }`}>
      {/* Portfolio Navigation Links - Always show all sections */}
      {isHomePage ? (
        // On home page, portfolio sections use scroll links
        <>
          {links.map((link, index) => (
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
          ))}
        </>
      ) : (
        // On blog pages, portfolio sections link back to home
        <>
          {links.map((link, index) => (
            <li key={index} className="group">
              <a
                href={`/#${link.section}`}
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
              </a>
              <div className={`mx-auto w-0 group-hover:w-full group-focus-within:w-full h-[2px] transition-all duration-500 ${
                theme === 'light' ? 'bg-blue-600' : 'bg-blue-400'
              }`}></div>
            </li>
          ))}
        </>
      )}
      
      {/* Blog Link - Show only if enabled */}
      {FEATURE_FLAGS.SHOW_BLOG && (
        <li className="group">
          <RouterLink
            to="/blog"
            className={`cursor-pointer transition-all duration-500 focus:outline-none focus:ring-2 rounded px-2 py-1 ${
              theme === 'light' 
                ? 'text-slate-700 hover:text-blue-600 focus:text-blue-600 focus:ring-blue-500/50' 
                : 'text-gray-200 hover:text-blue-400 focus:text-blue-400 focus:ring-blue-500/50'
            }`}
            tabIndex={0}
            role="button"
            aria-label="Navigate to Blog"
          >
            Blog
          </RouterLink>
          <div className={`mx-auto w-0 group-hover:w-full group-focus-within:w-full h-[2px] transition-all duration-500 ${
            theme === 'light' ? 'bg-blue-600' : 'bg-blue-400'
          }`}></div>
        </li>
      )}
    </ul>
  );
};

export default NavbarLinks;
