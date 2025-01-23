import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import Chapter from "./Chapter";
import TxtIntroduction from "./TxtIntroduction";
import TxtMotivation from "./TxtMotivation";
import TxtProgression from "./TxtProgression";
import TxtAction from "./TxtAction";
import TxtConclusion from "./TxtConclusion";

interface DashboardProps {
  updateReadingTime: React.Dispatch<React.SetStateAction<number>>;
  currentChapter: number;
  setCurrentChapter: React.Dispatch<React.SetStateAction<number>>;
}


const chapters = [
  { title: "Introduction", content: <TxtIntroduction /> },
  { title: "La motivation dans l’investissement", content: <TxtMotivation /> },
  { title: "La progression comme moteur d'engagement", content: <TxtProgression /> },
  { title: "Action et incitation", content: <TxtAction /> },
  { title: "Conclusion", content: <TxtConclusion /> },
];

const Dashboard: React.FC<DashboardProps> = ({ updateReadingTime, currentChapter, setCurrentChapter }) => {
  const [readingTime, setReadingTime] = useState<number>(0);
  useEffect(() => {
    console.log("Temps de lecture:", readingTime);
  }, [readingTime]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setReadingTime((prevTime) => prevTime + 1);
      updateReadingTime((prevTime) => prevTime + 1);
    }, 1000);

  

    return () => clearInterval(interval);
  }, [updateReadingTime]);

  const handleNext = (): void => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const handlePrevious = (): void => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  return (
    <div className="dashboard">

      <ProgressBar progress={(currentChapter + 1) / chapters.length * 100} />
      {readingTime >= 60 && <p style={{color:"red", zIndex:9999, fontSize:"50px"}}>Bravo ! Vous avez lu pendant plus d'une minute ! 🎉</p>}
      <Chapter 
        title={chapters[currentChapter].title} 
        content={chapters[currentChapter].content} 
        handleNext={handleNext} 
        handlePrevious={handlePrevious} 
        currentChapter={currentChapter}
        totalChapters={chapters.length}
      />
    </div>
  );
};

export default Dashboard;
