import { AllPortfolios } from "./AllPortfolios";
import { useEffect } from "react";

function MainPage({ theme, toggleTheme }) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      "--secondary-color",
      theme === "Dark" ? "#fafafa" : "#212121"
    );
    root.style.setProperty(
      "--main-color",
      theme === "Dark" ? "#212121" : "#fafafa"
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
