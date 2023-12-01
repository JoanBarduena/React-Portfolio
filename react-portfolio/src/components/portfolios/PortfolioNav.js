import YearRange from "../functions/YearRange.js";
import Container from "../layout/Container.js";
import classes from "./PortfolioNav.module.css";

function PortfolioNav({ years }) {
  return (
    <Container className={classes.portfolioNav}>
      <nav>
        <ul>
          <li>All</li>
          <li>Web Design</li>
          <li>Videogames</li>
          <li>3D Art</li>
        </ul>
      </nav>
      <YearRange years={years} />
    </Container>
  );
}

export default PortfolioNav;
