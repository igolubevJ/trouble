const searchIndex = require('./data/SearchIndex.json');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  if (page.path === '/') {
    deletePage(page);

    createPage({
      ...page,
      context: {
        ...page.context,
        searchIndex
      }
    })
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const { nodes } = result.data.allMarkdownRemark;
  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(nodes.length / itemsPerPage);

  Array.from({length: numberOfPages}).forEach((_, idx) => {
    const page = idx + 1;

    actions.createPage({
      path: page === 1 ? `/blogs` : `/blogs/${page}`,
      component: require.resolve('./src/templates/blogsPaginated.js'),
      context: {
        limit: itemsPerPage,
        skip: idx * itemsPerPage,
        currentPage: page,
        numberOfPages
      }
    });
  });

  nodes.forEach(node => {
    actions.createPage({
      path: `/blogs/${node.frontmatter.slug}`,
      component: require.resolve('./src/templates/blog.js'),
      context: {
        slug: node.frontmatter.slug
      }
    });
  });
}

