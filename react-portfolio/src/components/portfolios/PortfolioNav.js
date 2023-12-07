import YearRange from "../functions/YearRange.js";
import Container from "../layout/Container.js";
import classes from "./PortfolioNav.module.css";

function PortfolioNav({ info, onChangeCategory }) {
  const allYears = info.map((item) => item.years).flat();
  const categories = Array.from(new Set(info.map((item) => item.category)));

  return (
    <Container className={classes.portfolioNav}>
      <nav>
        <ul>
          <li onClick={() => onChangeCategory("All")}>All</li>
          {categories.map((category) => (
            <li onClick={() => onChangeCategory(category)}>{category}</li>
          ))}
        </ul>
      </nav>
      <YearRange years={allYears} />
    </Container>
  );
}

export default PortfolioNav;
