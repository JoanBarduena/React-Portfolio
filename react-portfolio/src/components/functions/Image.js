import React, { useState } from "react";

const Image = ({ src, alt, className }) => {
  // IMAGE NOT FOUND HANDLER
  const [imageSource, setImageSource] = useState(src);

  const handleImageError = () => {
    setImageSource(
      "https://github.com/JoanBarduena/portfolio/blob/main/img/projects/image_not_available.png?raw=true"
    );
  };

  return (
    <img
      src={imageSource}
      alt={alt}
      className={className}
      onError={handleImageError}
    />
  );
};

export default Image;
