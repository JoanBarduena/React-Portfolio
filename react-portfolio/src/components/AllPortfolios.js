import PortfolioItem from "./portfolios/PortfolioItem.js";
import Container from "./layout/Container.js";
import PortfolioNav from "./portfolios/PortfolioNav.js";
import { PORTFOLIO_DATA } from "./data/PortfolioData.js";

function AllPortfolios() {
  const allYears = PORTFOLIO_DATA.map((portfolio) => portfolio.year);

  return (
    <section>
      <Container>
        <h2>Projects</h2>
      </Container>
      <PortfolioNav years={allYears} />
      {PORTFOLIO_DATA.map((portfolio) => (
        <PortfolioItem
          key={portfolio.id}
          id={portfolio.id}
          title={portfolio.title}
          subtitle={portfolio.subtitle}
          category={portfolio.category}
          year={portfolio.year}
          teamSize={portfolio.teamSize}
          images={portfolio.images}
          description={portfolio.description}
        />
      ))}
    </section>
  );
}

export { AllPortfolios, PORTFOLIO_DATA };
