import { useParams } from "react-router-dom";
import classes from "./ProjectPage.module.css";

function ProjectPage({ projectData }) {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title.replace(/-/g, " "));
  const portfolio = projectData.find((item) => item.title === decodedTitle);

  if (!portfolio) {
    return <div>Project not found</div>;
  }

  return (
    <div className={classes.project}>
      <button>Back</button>
      <div className={classes.projectLeft}>
        <div className={classes.info}>
          <div className={classes.title}>
            <div>{portfolio.title}</div>
            <div className={classes.icons}></div>
          </div>
          <div className={classes.data}>
            <div>
              <strong>Category: </strong>
              {portfolio.category}
            </div>
            <div>
              <strong>Year: </strong>
              {portfolio.year}
            </div>
            <div>
              <strong>Team Size:</strong>
              {portfolio.teamSize}
            </div>
          </div>
          <div className={classes.text}>{portfolio.description}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
