import React from "react";
import { motion } from "framer-motion";

interface ChapterProps {
  title: string;
  content: React.ReactNode;  // Type React.ReactNode permet d'accepter n'importe quel élément JSX ou composant
  handleNext: () => void;
  handlePrevious: () => void;
  currentChapter: number;
  totalChapters: number;
}

const Chapter: React.FC<ChapterProps> = ({ title, content, handleNext, handlePrevious, currentChapter, totalChapters }) => {
  return (
    <motion.div 
      className="chapter"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{title}</h2>
      {content}
      <div className="buttons">
        <button onClick={handlePrevious} disabled={currentChapter === 0}>⬅ Précédent</button>
        <button onClick={handleNext} disabled={currentChapter === totalChapters - 1}>Suivant ➡</button>
      </div>
    </motion.div>
  );
};

export default Chapter;
