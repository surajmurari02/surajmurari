// import ExperienceInfo from "./ExperienceInfo";

// const ExperienceTopLeft = () => {
//   return (
//     <div className="flex flex-col gap-6 w-[300px]">
//       <p className="text-orange font-bold uppercase text-3xl font-special text-center">
//         Since 2023
//       </p>
//       <div className="flex justify-center items-center gap-4">
//         <ExperienceInfo number="2" text="Years" />
//         <p className="font-bold text-6xl text-lightBrown">-</p>
//         <ExperienceInfo number="23" text="Websites" />
//       </div>
//       <p className="text-center">
//         With 3 years of experience building dynamic and user-friendly web
//         applications.
//       </p>
//       <ExperienceInfo number="$100k" text="Max Budget" />
//     </div>
//   );
// };

// export default ExperienceTopLeft;

import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Year" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="5+" text="AI Models" />
      </div>
      <p className="text-center">
        Optimised & deployed real-world AI solutions using PyTorch, CUDA, YOLO,
        TensorRT, and LLMs across cloud and edge environments.
      </p>
      <ExperienceInfo number="360%" text="Speed Boost" />
    </div>
  );
};

export default ExperienceTopLeft;
