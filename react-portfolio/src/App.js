import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AllPortfolios, PORTFOLIO_DATA } from "./components/AllPortfolios.js";
import ProjectPage from "./components/pages/projects/ProjectPage.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AllPortfolios />} />
          <Route
            path="/:title"
            element={<ProjectPage portfolioData={PORTFOLIO_DATA} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
