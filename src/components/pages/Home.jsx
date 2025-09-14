import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutMeMain from "../aboutMeSection/AboutMeMain";
import ContactMeMain from "../contactMeSection/ContactMeMain";
import ExperienceMain from "../experienceSection/ExperienceMain";
import FooterMain from "../footer/FooterMain";
import HeroGradient from "../heroSection/HeroGradient";
import HeroMain from "../heroSection/HeroMain";
import ProjectsMain from "../projectsSection/ProjectsMain";
import SkillsMain from "../skillsSection/SkillsMain";
import SubSkills from "../skillsSection/SubSkills";
import SubHeroMain from "../subHeroSection/SubHeroMain";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when component mounts or location changes
    if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the # symbol
      const element = document.getElementById(elementId);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          const navbarHeight = 130; // Account for fixed navbar height
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <HeroMain />
      <HeroGradient />
      <div id="about"><AboutMeMain /></div>
      <div id="skills">
        <SkillsMain />
        <SubSkills />
      </div>
      <div id="experience"><ExperienceMain /></div>
      <div id="projects"><ProjectsMain /></div>
      <div id="contact"><ContactMeMain /></div>
      <FooterMain />
    </>
  );
};

export default Home;