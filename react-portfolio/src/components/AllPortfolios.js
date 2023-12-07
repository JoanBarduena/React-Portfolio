import PortfolioItem from "./portfolios/PortfolioItem.js";
import Container from "./layout/Container.js";
import PortfolioNav from "./portfolios/PortfolioNav.js";
import { PORTFOLIO_DATA } from "./data/PortfolioData.js";
import { useState } from "react";

function AllPortfolios() {
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

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

  const filterPortfolioItems =
    category === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.props.category === category);

  const navigationInfo = PORTFOLIO_DATA.map((portfolio) => ({
    category: portfolio.category,
    years: portfolio.year,
  }));

  return (
    <section>
      <Container>
        <h2>Projects</h2>
      </Container>
      <PortfolioNav
        info={navigationInfo}
        onChangeCategory={handleCategoryChange}
      />
      {filterPortfolioItems}
    </section>
  );
}

export { AllPortfolios, PORTFOLIO_DATA };
