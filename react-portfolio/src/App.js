import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage.js";
import { PORTFOLIO_DATA } from "./components/data/PortfolioData.js";
import ProjectPage from "./components/pages/ProjectPage.js";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/:title"
          element={<ProjectPage projectData={PORTFOLIO_DATA} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
