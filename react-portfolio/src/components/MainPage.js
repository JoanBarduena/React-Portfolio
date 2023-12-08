import { AllPortfolios } from "./AllPortfolios";
import { useEffect } from "react";

function MainPage({ theme, toggleTheme }) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      "--secondary-color",
      theme === "Dark" ? "250, 250, 250" : "33,33,33"
    );
    root.style.setProperty(
      "--primary-color",
      theme === "Dark" ? "33,33,33" : "250, 250, 250"
    );
  }, [theme]);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>Main Content</div>
      <AllPortfolios />
    </div>
  );
}

export default MainPage;
