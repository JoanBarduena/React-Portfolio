import Container from "../layout/Container.js";
import Divider from "../layout/Divider.js";

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
            <div>&#47;</div>
            <div>{props.category}</div>
          </div>
        </div>
      </div>
      <div className={classes.images}>
        <Link to={`/${encodeURIComponent(props.title.replace(/\s+/g, "-"))}`}>
          {props.images.map((image, index) =>
            image.type === "thumbnail" ? (
              <img
                src={image.url}
                alt={props.title}
                className={classes.image}
                key={index}
              />
            ) : null
          )}
        </Link>
      </div>
      <div className={classes.container}>
        <div className={classes.info}>
          <div></div>
          <Link to={`/${encodeURIComponent(props.title.replace(/\s+/g, "-"))}`}>
            <Divider text1="view the" text2="project" />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default PortfolioItem;
