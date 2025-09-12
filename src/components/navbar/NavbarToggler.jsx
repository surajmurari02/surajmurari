import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import { HiMenu, HiX } from "react-icons/hi";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <motion.button
      onClick={setToggleMenu}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan/50 ${
        theme === 'light'
          ? 'border-orange text-lightText hover:bg-lightCard'
          : 'border-orange text-white hover:bg-lightBrown/50'
      }`}
      aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={menuOpen}
    >
      <motion.div
        animate={{ rotate: menuOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-6 flex items-center justify-center"
      >
        {menuOpen ? (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HiX className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HiMenu className="w-5 h-5" />
          </motion.div>
        )}
      </motion.div>
    </motion.button>
  );
};

export default NavbarToggler;
