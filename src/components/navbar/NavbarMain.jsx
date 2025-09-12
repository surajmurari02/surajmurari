import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const theme = useSelector((state) => state.theme.mode);
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Main Navigation Container */}
          <div className={`flex-1 flex justify-between items-center px-6 py-4 rounded-2xl border backdrop-blur-md transition-all duration-500 ${
            theme === 'light' 
              ? 'bg-white/90 border-slate-200 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10' 
              : 'bg-gray-900/95 border-gray-800 shadow-lg shadow-black/20'
          }`}>
            <NavbarLogo />
            
            {/* Desktop Navigation */}
            <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block transition-all duration-300`}>
              <NavbarLinks />
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <NavbarBtn />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className={`lg:hidden flex items-center justify-center p-4 rounded-2xl border backdrop-blur-md transition-all duration-500 ${
            theme === 'light' 
              ? 'bg-white/90 border-slate-200 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10' 
              : 'bg-gray-900/95 border-gray-800 shadow-lg shadow-black/20'
          }`}>
            <NavbarToggler />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
