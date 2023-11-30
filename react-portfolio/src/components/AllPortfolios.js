import PortfolioItem from "./portfolios/PortfolioItem.js";
import Container from "./layout/Container.js";
import { PORTFOLIO_DATA } from "./data/PortfolioData.js";

function AllPortfolios() {
  return (
    <section>
      <Container>
        <h2>Projects</h2>
      </Container>
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
