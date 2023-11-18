import Container from "../layout/Container.js";
import { Link } from "react-router-dom";
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
            <div>{props.year}</div>
            <div>{props.category}</div>
          </div>
        </div>
      </div>
      <div className={classes.mediaImage}>
        <Link to={`/${encodeURIComponent(props.title.replace(/\s+/g, "-"))}`}>
          <img src={props.image} alt={props.title} />
        </Link>
      </div>
      <div className={classes.container}>
        <div className={classes.info}>
          <div></div>
          <Link
            to={`/${encodeURIComponent(props.title.replace(/\s+/g, "-"))}`}
            className={classes.view}
          >
            View the project
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default PortfolioItem;
