import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import ProjectInfo from "./project_components/ProjectInfo.js";
import classes from "./ProjectPage.module.css";

function ProjectPage({ projectData }) {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title.replace(/-/g, " "));
  const portfolio = projectData.find((item) => item.title === decodedTitle);

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setSelectedImage(null);
    setOpenModal(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  if (!portfolio) {
    return <div>Project not found</div>;
  }

  return (
    <div className={classes.project}>
      <div className={classes.back}>
        <Link to="/">&#8592;</Link>
      </div>
      <ProjectInfo project={portfolio} />
      <div className={classes.carrousel}>
        {portfolio.images.map((image, index) => (
          <img
            onClick={() => handleOpenModal(image)}
            key={index}
            src={image}
            alt={portfolio.title + " image " + (index + 1)}
            className={classes.image}
          />
        ))}
      </div>
      {openModal && (
        <div className={classes.modal} onClick={handleCloseModal}>
          <div className={classes.modalContent} onClick={handleModalClick}>
            {selectedImage && (
              <img
                src={selectedImage}
                alt={selectedImage}
                className={classes.modalImage}
              />
            )}
          </div>
          <div className={classes.close}>&times;</div>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
