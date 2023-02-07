import ContentLoader from "react-content-loader";

const MainImageLoader = () => (
  <ContentLoader
    speed={2}
    width={454}
    height={400}
    viewBox="0 0 454 400"
    backgroundColor="#e2e4e2"
    foregroundColor="#f5f5f5"
  >
    <rect x="8" y="0" rx="3" ry="3" width="417" height="266" />
    <rect x="12" y="279" rx="3" ry="3" width="96" height="64" />
    <rect x="169" y="279" rx="3" ry="3" width="96" height="64" />
    <rect x="328" y="279" rx="3" ry="3" width="96" height="64" />
  </ContentLoader>
);

export default MainImageLoader;
