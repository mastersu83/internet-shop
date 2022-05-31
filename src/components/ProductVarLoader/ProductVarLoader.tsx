import React from "react";
import ContentLoader from "react-content-loader";

const ProductVarLoader = () => (
  <ContentLoader
    speed={2}
    width={240}
    height={295}
    viewBox="0 0 240 295"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="240" height="34" />
    <rect x="0" y="44" rx="5" ry="5" width="240" height="34" />
    <rect x="0" y="88" rx="5" ry="5" width="240" height="34" />
    <rect x="0" y="132" rx="5" ry="5" width="240" height="34" />
    <rect x="0" y="176" rx="5" ry="5" width="240" height="34" />
    <rect x="0" y="220" rx="5" ry="5" width="240" height="34" />
    <rect x="0" y="264" rx="5" ry="5" width="240" height="34" />
  </ContentLoader>
);

export default ProductVarLoader;
