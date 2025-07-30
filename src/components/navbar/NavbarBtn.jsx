import { Link } from "react-scroll";
import { LuArrowDownRight, LuDownload } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Download Resume Button */}
      <a
        href="/Suraj_Murari_Resume_ML_Engineer.pdf"
        download
        className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-2 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
      >
        <LuDownload />
        Download Resume
      </a>

      {/* Contact Me Button (Scrolls to contact section) */}
      <button className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="contact"
        >
          Contact Me
        </Link>
        <div className="sm:hidden md:block">
          <LuArrowDownRight />
        </div>
      </button>
    </div>
  );
};

export default NavbarBtn;
