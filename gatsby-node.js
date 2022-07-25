const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const { data } = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            title
          }
          parent {
            ... on File {
              name
              absolutePath
              relativeDirectory
            }
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach((node) => {
    const pagePath = getPath(node);

    createPage({
      path: pagePath,
      component: path.resolve(`src/components/default-layout.js?__contentFilePath=${node.parent.absolutePath}`),
      context: {
        id: node.id
      }
    });
  });
};

function getPath(node) {
  // sites can programmatically override slug, that takes priority
  if (node.fields && node.fields.slug) {
    return node.fields.slug;
  }

  // then a slug specified in frontmatter
  if (node.frontmatter && node.frontmatter.slug) {
    return node.frontmatter.slug;
  }

  // finally, we'll just use the path on disk
  return path
    .join(node.parent.relativeDirectory, node.parent.name === 'index' ? '/' : node.parent.name)
    .replace(/\\/g, '/'); // Windows paths to forward slashes
}
