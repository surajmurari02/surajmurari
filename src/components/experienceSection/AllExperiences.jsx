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
    responsibilities:
    [
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
    responsibilities: 
    [
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
    responsibilities: 
    [
      "Optimizing CV models with hardware acceleration.",
      "Deploying real-time AI pipelines on edge & cloud.",
      "Building LLMs, RAG workflows, and GenAI APIs.",
    ],

  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
