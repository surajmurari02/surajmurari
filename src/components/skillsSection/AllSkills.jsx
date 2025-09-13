import SingleSkill from "./SingleSkill";
import LoadMoreSkill from "./LoadMoreSkill";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { fadeIn } from "../../framerMotion/variants";
import { portfolioConfig } from "../../config/portfolio";
import { getIconComponent } from "../../utils/iconMapper";

const AllSkills = () => {
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
    <div ref={skillsSectionRef} className="w-full max-w-6xl mx-auto">
      {/* Skills Grid - Dynamic Loading */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
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
        
        {/* Load More / Show Less Button in Grid */}
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

      {/* Dynamic Skills Categories - Larger Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category, index) => {
            const colorClasses = {
              primary: theme === 'light' 
                ? 'bg-primary-100 text-primary-700 border border-primary-200 hover:bg-primary-200' 
                : 'bg-primary-900/20 text-primary-300 border border-primary-800/30 hover:bg-primary-800/30',
              accent: theme === 'light' 
                ? 'bg-accent-100 text-accent-700 border border-accent-200 hover:bg-accent-200' 
                : 'bg-accent-900/20 text-accent-300 border border-accent-800/30 hover:bg-accent-800/30',
              secondary: theme === 'light' 
                ? 'bg-purple-100 text-purple-700 border border-purple-200 hover:bg-purple-200' 
                : 'bg-purple-900/20 text-purple-300 border border-purple-800/30 hover:bg-purple-800/30'
            };

            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${colorClasses[category.color]}`}
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

export default AllSkills;
