const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // Redirect
  createRedirect({
    fromPath: '/blog/1',
    toPath: '/blog',
    isPermanent: false,
    redirectInBrowser: true,
  });

  // Templates
  const blogPostTemplate = path.resolve('src/templates/blogPost.js');
  const blogPostListTemplate = path.resolve('src/templates/blogPostList.js');

  // Queries
  const result = await graphql(`
    query BlogPosts {
      blogPosts: allMarkdownRemark {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);

  // Results
  const blogPosts = result.data.blogPosts.nodes;

  // Create pages
  blogPosts.forEach(({ frontmatter }) => {
    createPage({
      path: `/blog/${frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        title: frontmatter.title,
      },
    });
  });

  // Create paginated pages
  const perPage = 6;
  const totalPages = Math.ceil(blogPosts.length / perPage);

  Array.from({ length: totalPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blog' : `/blog/${i + 1}`,
      component: blogPostListTemplate,
      context: {
        limit: perPage,
        skip: i * perPage,
        totalPages,
        currentPage: i + 1,
      },
    });
  });
};
