import React from "react";
import { motion } from "framer-motion";

interface AnnexeProps {
  title?: string;
  imageUrl?: string;
  altText?: string;
}

const Annexe: React.FC<AnnexeProps> = ({ title, imageUrl, altText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 style={{ margin: "0", marginBottom: "16px" }}>Annexes</h2>
      <div className="annexe-section">
        <h2>{title}</h2>
        <img src={imageUrl} alt={altText} className="annexe-image" />
      </div>
    </motion.div>
  );
};

export default Annexe;
