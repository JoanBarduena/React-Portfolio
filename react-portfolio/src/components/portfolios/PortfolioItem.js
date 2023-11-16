import Container from "../layout/Container.js";

import classes from "./PortfolioItem.module.css";

function PortfolioItem(props) {
  return (
    <Container className={classes.portfolio}>
      <div className={classes.title}>
        <h4>{props.title}</h4>
      </div>
      <div className={classes.container}>
        <div className={classes.info}>
          <div>{props.subtitle}</div>
          <div className={classes.inline}>
            <div>2020</div>
            <div>{props.category}</div>
          </div>
        </div>
      </div>
      <div className={classes.mediaImage}>
        <button>
          <img src={props.image} alt={props.title} />
        </button>
      </div>
      <div className={classes.container}>
        <div className={classes.info}>
          <div></div>
          <button className={classes.view}>View the project</button>
        </div>
      </div>
    </Container>
  );
}

export default PortfolioItem;
