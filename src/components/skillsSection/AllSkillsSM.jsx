import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { fadeIn } from "../../framerMotion/variants";
import SingleSkill from "./SingleSkill";
import LoadMoreSkill from "./LoadMoreSkill";
import { portfolioConfig } from "../../config/portfolio";
import { getIconComponent } from "../../utils/iconMapper";

const AllSkillsSM = () => {
  const theme = useSelector((state) => state.theme.mode);
  const allSkills = portfolioConfig.skills.main;
  const categories = portfolioConfig.skills.categories;
  const [visibleSkills, setVisibleSkills] = useState(9);
  const skillsSectionRef = useRef(null);
  
  const skills = allSkills.slice(0, visibleSkills);
  const hasMoreSkills = visibleSkills < allSkills.length;
  const canShowLess = visibleSkills > 9;
  
  const loadMoreSkills = () => {
    setVisibleSkills(prev => Math.min(prev + 9, allSkills.length));
  };
  
  const showLessSkills = () => {
    setVisibleSkills(9);
    // Scroll to top of main skills section (same as navbar behavior)
    setTimeout(() => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        skillsSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 100);
  };

  return (
    <div ref={skillsSectionRef} className="w-full max-w-4xl mx-auto">
      {/* Skills Grid for Mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {skills.map((skill, index) => {
            const IconComponent = getIconComponent(skill.icon);
            
            return (
              <motion.div
                key={`skill-${index}`}
                variants={fadeIn("up", index * 0.05)}
                initial="hidden"
                animate="show"
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  transition: { duration: 0.3 }
                }}
                layout
                className="flex justify-center"
              >
                <SingleSkill
                  text={skill.name}
                  imgSvg={<IconComponent />}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {/* Load More / Show Less Button in Grid for Mobile */}
        {(hasMoreSkills || canShowLess) && (
          <motion.div
            key="load-more-button"
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            layout
            className="flex justify-center"
          >
            <LoadMoreSkill
              onClick={hasMoreSkills ? loadMoreSkills : showLessSkills}
              isLoadMore={hasMoreSkills}
              remainingCount={allSkills.length - visibleSkills}
            />
          </motion.div>
        )}
      </div>

      {/* Dynamic Skills Categories for Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category, index) => {
            const colorClasses = {
              primary: theme === 'light' 
                ? 'bg-primary-100 text-primary-700' 
                : 'bg-primary-900/20 text-primary-300',
              accent: theme === 'light' 
                ? 'bg-accent-100 text-accent-700' 
                : 'bg-accent-900/20 text-accent-300',
              secondary: theme === 'light' 
                ? 'bg-purple-100 text-purple-700' 
                : 'bg-purple-900/20 text-purple-300'
            };

            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${colorClasses[category.color]}`}
              >
                {category.name}
              </motion.span>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default AllSkillsSM;