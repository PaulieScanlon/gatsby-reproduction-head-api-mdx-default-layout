import React from 'react';

const HeroLayout = ({ children, pageContext }) => {
  return (
    <div style={{ border: '1px solid red' }}>
      <h2>{pageContext.frontmatter.title}</h2>
      {children}
    </div>
  );
};

export default HeroLayout;
