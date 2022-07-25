import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const Layout = ({ children, pageContext }) => {
  return (
    <div>
      <h1>{pageContext.frontmatter.title}</h1>
      <MDXProvider>{children}</MDXProvider>
    </div>
  );
};

export default Layout;

export function Head() {
  console.log('///// Head | layout.js');
  return <title>Hello World</title>;
}
