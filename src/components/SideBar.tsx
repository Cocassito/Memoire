import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <span className={`arrow ${isCollapsed ? "rotated" : ""}`}>
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: "16px" }} />
        </span>
      </button>
      {!isCollapsed && (
        <div
          style={{
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            margin: " 24px 0 ",
          }}
        >
          <h2 style={{ margin: "0", marginBottom: "8px" }}>
            Gamification <span style={{ display: "block" }}>et trading</span>
          </h2>
          <p style={{ margin: "0" }}>par Alan King</p>
        </div>
      )}

      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <LibraryBooksRoundedIcon className="icon" />
        {!isCollapsed && "Lire le Mémoire"}
      </NavLink>

      <NavLink
        to="/board"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <BarChartRoundedIcon className="icon" />
        {!isCollapsed && "Tableau de Suivi"}
      </NavLink>

      <NavLink
        to="/bibliograhie"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <FindInPageRoundedIcon className="icon" />
        {!isCollapsed && "Bibliographie"}
      </NavLink>

      <NavLink
        to="/annexes/:id"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <InfoRoundedIcon className="icon" />
        {!isCollapsed && "Annexes"}
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <SettingsRoundedIcon className="icon" />
        {!isCollapsed && "Paramètres"}
      </NavLink>
    </nav>
  );
};

export default Sidebar;
