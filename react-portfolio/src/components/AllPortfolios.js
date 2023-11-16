import PortfolioItem from "./portfolios/PortfolioItem.js";
import Container from "./layout/Container.js";

const PORTFOLIO_DATA = [
  {
    id: "p1",
    title: "This is a first portfolio",
    subtitle: "First subtitle",
    category: "First category",
    image:
      "https://joanbarduena.github.io/portfolio/img/projects/portfolio_1.PNG",
    description: "This is a first portfolio description",
  },
];

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
          image={portfolio.image}
        />
      ))}
    </section>
  );
}

export default AllPortfolios;
