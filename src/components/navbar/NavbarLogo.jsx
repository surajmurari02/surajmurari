import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <div>
      <Link
        to="hero"
        spy={true}
        smooth={true}
        duration={800}
        offset={-130}
        className="cursor-pointer"
      >
        <h1 className="text-white text-2xl sm:hidden md:block hover:text-cyan transition-colors duration-300">
          Suraj Murari
        </h1>
      </Link>
      <Link
        to="hero"
        spy={true}
        smooth={true}
        duration={800}
        offset={-130}
        className="cursor-pointer"
      >
        <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block hover:text-cyan transition-colors duration-300">
          AQ
        </h1>
      </Link>
    </div>
  );
};

export default NavbarLogo;
