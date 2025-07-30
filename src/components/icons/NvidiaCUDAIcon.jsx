import React from "react";
import Nvidia_CUDA_Logo from " src/assets/icons/Nvidia_CUDA.svg";

const NvidiaCUDAIcon = () => {
  return (
    <img
      src={Nvidia_CUDA_Logo}
      alt="NVIDIA CUDA"
      style={{ width: "40px", height: "40px", objectFit: "contain" }}
    />
  );
};

export default NvidiaCUDAIcon;
