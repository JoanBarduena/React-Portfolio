import classes from "./Divider.module.css";

function Divider({ text1, text2 }) {
  return (
    <div className={classes.view_project}>
      <div>{text1}</div>
      <div className={classes.divider}></div>
      <div>{text2}</div>
    </div>
  );
}

export default Divider;
