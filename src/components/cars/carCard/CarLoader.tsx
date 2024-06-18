import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={369}
    height={224}
    viewBox="0 0 369 224"
    backgroundColor="#c4c4c4"
    foregroundColor="#ffffff"
  >
    <circle cx="571" cy="202" r="20" />
    <rect x="6" y="3" rx="5" ry="5" width="91" height="13" />
    <rect x="6" y="28" rx="5" ry="5" width="162" height="13" />
    <rect x="110" y="107" rx="5" ry="5" width="227" height="112" />
  </ContentLoader>
)

export default MyLoader
