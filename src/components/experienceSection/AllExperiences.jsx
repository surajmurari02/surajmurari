// import SingleExperience from "./SingleExperience";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const experiences = [
//   {
//     job: "Front-End Developer",
//     company: "Alex Apps",
//     date: "2022 - Present",
//     responsibilities: [
//       "Implementing reusable components.",
//       "Participating in large scale application.",
//       "Working on the performance of web applications.",
//       "Generating new ideas for better user experience.",
//     ],
//   },
//   {
//     job: "Course Instructor",
//     company: "Nucamp",
//     date: "2023 - Present",
//     responsibilities: [
//       "Explaining and facilitating web development concepts.",
//       "Help students with their assignments and grade them weekly.",
//       "Provide support for students through their learning journey.",
//     ],
//   },
//   {
//     job: "Course Instructor",
//     company: "Sprints",
//     date: "2024 - Present",
//     responsibilities: [
//       "Teaching JavaScript, React and TailwindCSS.",
//       "Participating in preparing course materials.",
//       "Helping students through their way in learning web development technologies.",
//     ],
//   },
// ];

// const AllExperiences = () => {
//   return (
//     <div className="flex md:flex-row sm:flex-col items-center justify-between">
//       {experiences.map((experience, index) => {
//         return (
//           <>
//             <SingleExperience key={index} experience={experience} />
//             {index < 2 ? (
//               <motion.div
//                 variants={fadeIn("right", 0)}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: false, amount: 0.7 }}
//               >
//                 <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
//               </motion.div>
//             ) : (
//               ""
//             )}
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default AllExperiences;

import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "BCA Student",
    company: "D.S.B. Campus, Nainital",
    date: "2020 - 2023",
    responsibilities: [
      "Studied programming, data structures, and DBMS.",
      "Built AI mini projects with Python and OpenCV.",
      "Developed 'SmartVision AI' for object detection.",
      "Applied concepts through collaborative projects.",
    ],
  },
  {
    job: "MCA Student",
    company: "Bennett University, Greater Noida",
    date: "2023 - 2025",
    responsibilities: [
      "Specialized in DL, CV, and LLMs.",
      "Built ML pipelines with PyTorch & TensorRT.",
      "Created 'TrackNetX' for vehicle re-ID.",
      "Deployed real-world AI solutions.",
    ],
  },
  {
    job: "Machine Learning Engineer Intern",
    company: "Samajh.ai, Noida",
    date: "Aug 2024 - Present",
    responsibilities: [
      "Optimizing CV models with hardware acceleration.",
      "Deploying real-time AI pipelines on edge & cloud.",
      "Building LLMs, RAG workflows, and GenAI APIs.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="w-full">
      {/* Desktop Layout - Horizontal */}
      <div className="hidden lg:block">
        <div className="relative flex items-center justify-center gap-0">
          {experiences.map((experience, index) => (
            <div key={index} className="flex items-center">
              {/* Experience Card */}
              <motion.div
                variants={fadeIn("up", index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="w-72 flex-shrink-0 relative z-20 hover:z-30"
              >
                <SingleExperience experience={experience} />
              </motion.div>
              
              {/* Enhanced Connection Arrow */}
              {index < experiences.length - 1 && (
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.7 }}
                  className="flex flex-col items-center justify-center px-4 py-4 group"
                >
                  {/* Timeline connector */}
                  <div className="flex items-center relative">
                    {/* Dotted line before arrow */}
                    <div className="w-8 h-0.5 bg-gradient-to-r from-orange/30 via-orange/60 to-transparent relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange/50 to-orange animate-pulse" />
                    </div>
                    
                    {/* Enhanced arrow with background */}
                    <div className="relative mx-2">
                      <div className="absolute inset-0 bg-orange/20 rounded-full blur-lg scale-150 group-hover:scale-175 transition-transform duration-500" />
                      <div className="relative bg-white dark:bg-dark-card p-3 rounded-full shadow-lg border-2 border-orange/30 group-hover:border-orange/60 transition-all duration-300">
                        <FaArrowRightLong className="text-2xl text-orange group-hover:text-lightOrange transition-all duration-300 group-hover:scale-110" />
                      </div>
                    </div>
                    
                    {/* Dotted line after arrow */}
                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-orange/60 to-orange/30 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange to-orange/50 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-2 text-xs font-medium text-orange/80 uppercase tracking-wider">
                    {index === 0 ? 'Foundation' : index === 1 ? 'Growth' : 'Current'}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Layout - Vertical */}
      <div className="lg:hidden">
        <div className="flex flex-col items-center space-y-0">
          {experiences.map((experience, index) => (
            <div key={index} className="flex flex-col items-center w-full max-w-md">
              {/* Experience Card */}
              <motion.div
                variants={fadeIn("up", index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="w-full relative z-20 hover:z-30"
              >
                <SingleExperience experience={experience} />
              </motion.div>
              
              {/* Enhanced Mobile Connection Arrow */}
              {index < experiences.length - 1 && (
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.7 }}
                  className="flex items-center justify-center py-6 group"
                >
                  <div className="flex flex-col items-center">
                    {/* Vertical dotted line before arrow */}
                    <div className="w-0.5 h-8 bg-gradient-to-b from-orange/30 via-orange/60 to-transparent relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-orange/50 to-orange animate-pulse" />
                    </div>
                    
                    {/* Enhanced mobile arrow */}
                    <div className="relative my-2">
                      <div className="absolute inset-0 bg-orange/20 rounded-full blur-lg scale-150 group-hover:scale-175 transition-transform duration-500" />
                      <div className="relative bg-white dark:bg-dark-card p-2.5 rounded-full shadow-lg border-2 border-orange/30 group-hover:border-orange/60 transition-all duration-300">
                        <div className="transform rotate-90">
                          <FaArrowRightLong className="text-xl text-orange group-hover:text-lightOrange transition-all duration-300 group-hover:scale-110" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Vertical dotted line after arrow */}
                    <div className="w-0.5 h-8 bg-gradient-to-b from-transparent via-orange/60 to-orange/30 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-orange to-orange/50 animate-pulse" />
                    </div>
                    
                    {/* Mobile progress indicator */}
                    <div className="mt-2 px-2 py-1 bg-orange/10 rounded-full">
                      <div className="text-xs font-medium text-orange uppercase tracking-wider">
                        {index === 0 ? 'Next' : index === 1 ? 'Then' : 'Now'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllExperiences;
