import ContentLoader from 'react-content-loader'

const LoadingHolder = () => (
    <ContentLoader
      width={650}
      height={300}
      viewBox="0 100 450 500"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
    >
      <rect x="43" y="475" rx="4" ry="4" width="271" height="10" />
      <rect x="44" y="490" rx="3" ry="3" width="119" height="10" />
      <rect x="42" y="10" rx="10" ry="10" width="388" height="457" />
    </ContentLoader>
  )

export default LoadingHolder