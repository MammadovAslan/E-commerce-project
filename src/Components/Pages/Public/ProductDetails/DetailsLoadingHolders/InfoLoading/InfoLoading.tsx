import ContentLoader from "react-content-loader";

const InfoLoading = () => (
  <ContentLoader
    speed={2}
    width={290}
    height={367}
    viewBox="0 0 290 367"
    backgroundColor="#e2e4e2"
    foregroundColor="#f5f5f5"
  >
    <rect x="6" y="5" rx="3" ry="3" width="276" height="36" />
    <rect x="45" y="139" rx="3" ry="3" width="21" height="18" />
    <rect x="7" y="202" rx="3" ry="3" width="186" height="29" />
    <rect x="7" y="50" rx="3" ry="3" width="68" height="10" />
    <rect x="7" y="96" rx="3" ry="3" width="120" height="14" />
    <circle cx="20" cy="148" r="14" />
    <circle cx="92" cy="148" r="14" />
  </ContentLoader>
);

export default InfoLoading;
