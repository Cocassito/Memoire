import React from "react";
import { motion } from "framer-motion";


const Settings: React.FC = () => {
  return (

    <div className="dashboard">
       <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }} >
      <h2 style={{ margin: "0", marginBottom: "16px" }}>Paramètres</h2>
      <p>Options de personnalisation à venir...</p>
    </motion.div>
    </div>
  );
};

export default Settings;
