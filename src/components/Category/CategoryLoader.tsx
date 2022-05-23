import React from "react";
import ContentLoader from "react-content-loader";

const CategoryLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={225}
      height={40}
      viewBox="0 0 225 38"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="0" rx="20" ry="20" width="205" height="38" />
    </ContentLoader>
  );
};

export default CategoryLoader;
