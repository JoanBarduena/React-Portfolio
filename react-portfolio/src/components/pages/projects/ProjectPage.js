import { useParams } from "react-router-dom";

function ProjectPage({ portfolioData }) {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title.replace(/-/g, " "));
  const portfolio = portfolioData.find((item) => item.title === decodedTitle);

  if (!portfolio) {
    return <div>Project not found</div>;
  }

  return <div>{portfolio.title}</div>;
}

export default ProjectPage;
