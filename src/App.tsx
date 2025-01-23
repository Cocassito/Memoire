import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Board from "./components/Board";
import Settings from "./components/Settings";
import "./styles/main.css";
import Sidebar from "./components/SideBar";
import Bibliographie from "./components/Bibliographie";
import Annexes from "./components/Annexes";

const App: React.FC = () => {
  const [readingTime, setReadingTime] = useState<number>(0);
  const [currentChapter, setCurrentChapter] = useState<number>(0);

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  updateReadingTime={setReadingTime}
                  currentChapter={currentChapter}
                  setCurrentChapter={setCurrentChapter}
                />
              }
            />
            <Route
              path="/board"
              element={
                <Board
                  totalTime={readingTime}
                  chaptersRead={currentChapter + 1}
                />
              }
            />
            <Route path="/annexes/:id" element={<Annexes />} />
            <Route path="/bibliograhie" element={<Bibliographie />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
