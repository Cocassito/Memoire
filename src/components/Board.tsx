import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import ActivityRings from "react-activity-rings";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PieController,
} from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PieController
);

interface BoardProps {
  totalTime: number;
  chaptersRead: number;
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return minutes > 0
    ? `${minutes} min ${remainingSeconds} sec`
    : `${remainingSeconds} sec`;
};

const Board: React.FC<BoardProps> = ({ totalTime, chaptersRead }) => {
  const [chartKey, setChartKey] = useState(0);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setChartKey((prevKey) => prevKey + 1);
    });

    if (chartContainerRef.current) {
      resizeObserver.observe(chartContainerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const safeChaptersRead = Math.min(chaptersRead, 5);

  const chaptersData = {
    labels: ["Chapitres Lus", "Chapitres Restants"],
    datasets: [
      {
        data: [safeChaptersRead, 5 - safeChaptersRead],
        backgroundColor: ["#00E148", "#007BFF"],
        borderWidth: 0,  // Ajout de l'espace entre les segments
        borderColor: "#fff", //
      },
    ],
  };

  const lineChartData = {
    labels: ["Jour 1", "Jour 2", "Jour 3", "Jour 4", "Jour 5"],
    datasets: [
      {
        label: "Progression quotidienne",
        data: [1, 2, 3, safeChaptersRead, 5],
        borderColor: "#00E148",
        backgroundColor: "#00E148",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#00E148",
      },
    ],
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "bottom" as const },  // Ici vous définissez la position de la légende
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: true } },
      y: { beginAtZero: true },
    },
  };

  const maxTime = 300;
  const timeInSeconds = Math.min(totalTime, maxTime);
  const totalTimePercent = (timeInSeconds / maxTime) * 100; // Calculer le pourcentage par rapport à 60 secondes

  const activityData = [
    {
      value: totalTimePercent / 100, // La valeur est entre 0 et 1
      backgroundColor: "#d0d0d0",  // Couleur de fond de l'anneau (gris clair)
      color: "#00E148",             // Couleur de la progression (orange)
    },
  ];

  const activityConfig = {
    width: 200,
    height: 200,
    ringSize: 26, // Taille de l'anneau
    radius: 64,   // Rayon du cercle
  };

  return (
    <div className="dashboard" ref={chartContainerRef}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ margin: "0", marginBottom: "16px" }}>Suivi de la lecture</h2>
        <div className="summary">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p> Objectif : 5 min </p>
            <div className="activity-ring-container">
              <ActivityRings data={activityData} config={activityConfig} />
              <p className="time-text" style={{ fontSize: "16px" }}>
                {formatTime(timeInSeconds)}
              </p>
            </div>
          </div>

          {/* Désactiver temporairement la Pie Chart */}
          {/* <div className="chart-container">
            <Pie
              data={chaptersData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                    position: "top",
                    align: "start",
                    labels: {
                      font: {
                        size: 14,
                      },
                      color: "#F1F1F1",
                      padding: 10,
                    },
                  },
                  tooltip: { enabled: true },
                },
                elements: {
                  arc: {
                    borderWidth: 0, // Pas de bordure supplémentaire
                  },
                },
                cutout: 40, // Ajoute de l'espace au centre du Pie chart (effet donut)
              }}
            />
          </div> */}
        </div>

        <div className="chart-line-container">
          <div className="chart-line-wrapper">
            <Line key={chartKey} data={lineChartData} options={commonOptions} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Board;
