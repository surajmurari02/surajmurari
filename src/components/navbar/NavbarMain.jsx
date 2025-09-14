import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import ThemeToggle from "./ThemeToggle";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarMain = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="max-w-[1400px] mx-auto">
          <div className={`flex items-center justify-between px-4 sm:px-8 py-4 rounded-2xl border backdrop-blur-md transition-all duration-500 ${
            theme === 'light' 
              ? 'bg-white/90 border-slate-200 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10' 
              : 'bg-gray-900/95 border-gray-800 shadow-lg shadow-black/20'
          }`}>
            <NavbarLogo />
            
            {/* Desktop Navigation */}
            <div className="hidden xl:block">
              <NavbarLinks />
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="hidden xl:block">
                <NavbarBtn />
              </div>
              {/* Mobile Menu Toggle */}
              <div className="xl:hidden">
                <NavbarToggler />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => dispatch(toggleMenu())}
          />
          
          {/* Mobile Menu */}
          <div className={`absolute top-24 left-4 right-4 rounded-2xl border backdrop-blur-md shadow-2xl ${
            theme === 'light' 
              ? 'bg-white/95 border-slate-200' 
              : 'bg-gray-900/95 border-gray-800'
          }`}>
            <div className="p-6">
              <NavbarLinks />
              <div className={`mt-6 pt-6 border-t ${
                theme === 'light' ? 'border-gray-200' : 'border-gray-700'
              }`}>
                <NavbarBtn />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMain;
