import PortfolioItem from "./portfolios/PortfolioItem.js";
import Container from "./layout/Container.js";
import PortfolioNav from "./portfolios/PortfolioNav.js";
import { PORTFOLIO_DATA } from "./data/PortfolioData.js";

function AllPortfolios() {
  const portfolioItems = PORTFOLIO_DATA.map((portfolio) => (
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
  ));

  const navigationInfo = PORTFOLIO_DATA.map((portfolio) => ({
    category: portfolio.category,
    years: portfolio.year,
  }));

  return (
    <section>
      <Container>
        <h2>Projects</h2>
      </Container>
      <PortfolioNav info={navigationInfo} />
      {portfolioItems}
    </section>
  );
}

export { AllPortfolios, PORTFOLIO_DATA };
