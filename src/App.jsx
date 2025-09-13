import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './state/themeSlice';
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

function App() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    dispatch(setTheme(initialTheme));
    document.documentElement.classList.toggle('light', initialTheme === 'light');
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, [dispatch]);

  return (
    <main className={`font-body antialiased transition-all duration-500 relative min-h-screen ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 text-slate-900' 
        : 'bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg text-dark-text'
    }`}>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl animate-float ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-blue-200 to-indigo-200 opacity-20' 
            : 'bg-primary-500 opacity-20'
        }`} />
        <div className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl animate-float ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-violet-200 to-purple-200 opacity-15' 
            : 'bg-accent-500 opacity-15'
        }`} style={{ animationDelay: '3s' }} />
        
        {/* Grid Pattern */}
        <div className={`absolute inset-0 ${
          theme === 'light' ? 'bg-grid-pattern opacity-[0.02]' : 'bg-grid-pattern opacity-30'
        }`} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
        <AboutMeMain />
        <SkillsMain />
        <SubSkills />
        <ExperienceMain />
        <ProjectsMain />
        <ContactMeMain />
        <FooterMain />
      </div>
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </main>
  );
}

export default App;
