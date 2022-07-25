import React from 'react';
import { graphql } from 'gatsby';

const Layout = ({ data: { mdx }, children }) => {
  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
      {children}
    </div>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

export default Layout;

export function Head() {
  console.log('///// Head | layout.js');
  return <title>Hello World</title>;
}
