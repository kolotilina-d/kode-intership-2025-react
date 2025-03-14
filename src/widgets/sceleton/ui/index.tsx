import React from "react";
import ContentLoader from "react-content-loader";

interface IProps {}
export const Skeleton: React.FC<IProps> = (props) => {
  return (
    <>
      <ContentLoader
        speed={2}
        width={600}
        height={100}
        viewBox="0 0 600 100"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="82" y="18" rx="3" ry="3" width="144" height="16" />
        <rect x="79" y="44" rx="3" ry="3" width="80" height="12" />
        <circle cx="35" cy="35" r="36" />
      </ContentLoader>
    </>
  );
};
