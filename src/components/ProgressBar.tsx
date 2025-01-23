import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="progress-container">
      <motion.div 
        className="progress-bar"
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
      <span>{Math.round(progress)}% lu</span>
    </div>
  );
};

export default ProgressBar;
