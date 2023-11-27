import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AllPortfolios, PORTFOLIO_DATA } from "./components/AllPortfolios.js";
import ProjectPage from "./components/pages/ProjectPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllPortfolios />} />
        <Route
          path="/:title"
          element={<ProjectPage projectData={PORTFOLIO_DATA} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
