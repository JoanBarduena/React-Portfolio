import PortfolioItem from "./portfolios/PortfolioItem.js";
import Container from "./layout/Container.js";

const PORTFOLIO_DATA = [
  {
    id: "p1",
    title: "Stylized Medieval Village",
    subtitle: "First subtitle",
    category: "First category",
    year: "2020",
    teamSize: "3",
    images: [
      "https://joanbarduena.github.io/portfolio/img/projects/portfolio_1.PNG",
      "https://joanbarduena.github.io/portfolio/img/projects/portfolio_2.PNG",
    ],
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
