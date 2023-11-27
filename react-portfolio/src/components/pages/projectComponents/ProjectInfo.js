import classes from "./ProjectInfo.module.css";

function ProjectInfo({ project }) {
  return (
    <section>
      <div className={classes.info}>
        <div className={classes.title}>
          <div>{project.title}</div>
          <div className={classes.icons}></div>
        </div>
        <div className={classes.data}>
          <div>
            <strong>Category: </strong>
            {project.category}
          </div>
          <div>
            <strong>Year: </strong>
            {project.year}
          </div>
          <div>
            <strong>Team Size: </strong>
            {project.teamSize}
          </div>
        </div>
        <div className={classes.description}>{project.description}</div>
      </div>
    </section>
  );
}

export default ProjectInfo;
