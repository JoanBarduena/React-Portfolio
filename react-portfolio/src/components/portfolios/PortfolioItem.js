import Container from "../layout/Container.js";

function PortfolioItem(props) {
  return (
    <Container>
      <div>
        <h4>{props.text}</h4>
      </div>
    </Container>
  );
}

export default PortfolioItem;
