const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  // Redirect
  createRedirect({
    fromPath: '/blog/1',
    toPath: '/blog',
    isPermanent: false,
    redirectInBrowser: true,
  });

  //

  /* Get results */
  const result = await graphql(`
    {
      blogPosts: allFile(
        filter: {
          internal: { mediaType: { eq: "text/markdown" } }
          sourceInstanceName: { eq: "markdown-data" }
          relativeDirectory: { regex: "/blog/posts/list/" }
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              id
              title
              slug
            }
          }
        }
      }
      blogCategories: allFile(
        filter: {
          internal: { mediaType: { eq: "text/markdown" } }
          sourceInstanceName: { eq: "markdown-data" }
          relativeDirectory: { regex: "/blog/posts/list/" }
        }
      ) {
        group(field: childMarkdownRemark___frontmatter___categories___name) {
          name: fieldValue
          totalCategories: totalCount
        }
      }
    }
  `);
  /* END Get results */

  //

  // Check if we have errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
  }

  //

  /* Data */
  const blogPosts = result.data.blogPosts.nodes;
  const blogCategories = result.data.blogCategories.group;
  /* END Data */

  //

  /* Templates */
  const blogPostTemplate = path.resolve('src/templates/blogPost.js');
  const blogPostListTemplate = path.resolve('src/templates/blogPostList.js');
  const blogCategoryListTemplate = path.resolve(
    'src/templates/blogCategoryList.js',
  );
  /* END Templates */

  //

  /* Blog Posts */

  // Create single blog post
  blogPosts.forEach(({ childMarkdownRemark: blogPost }, index) => {
    createPage({
      path: `/blog/${blogPost.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: blogPost.frontmatter.slug,
        prev: index === 0 ? null : blogPosts[index - 1],
        next: index === blogPost.length - 1 ? null : blogPosts[index + 1],
      },
    });
  });

  // Create paginated blog posts
  const blogPostsPerPage = 6;
  const blogPostsTotalPages = Math.ceil(blogPosts.length / blogPostsPerPage);

  Array.from({ length: blogPostsTotalPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blog' : `/blog/${i + 1}`,
      component: blogPostListTemplate,
      context: {
        limit: blogPostsPerPage,
        skip: i * blogPostsPerPage,
        totalPages: blogPostsTotalPages,
      },
    });
  });

  /* END Blog Posts */

  //

  /* Blog Categories */

  // Create paginated blog categories

  blogCategories.forEach(({ name, totalCategories }) => {
    // Create
    const slug = name.replace(/ /g, '-').toLowerCase();
    const blogCategoriesPerPage = 6;
    const blogCategoriesTotalPages = Math.ceil(
      totalCategories / blogCategoriesPerPage,
    );

    // Redirect
    createRedirect({
      fromPath: `/blog/category/${slug}/1`,
      toPath: `/blog/category/${slug}`,
      isPermanent: false,
      redirectInBrowser: true,
    });

    // Create pages
    Array.from({ length: totalCategories }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/blog/category/${slug}`
            : `/blog/category/${slug}/${i + 1}`,
        component: blogCategoryListTemplate,
        context: {
          name,
          slug,
          limit: blogCategoriesPerPage,
          skip: i * blogCategoriesPerPage,
          totalPages: blogCategoriesTotalPages,
        },
      });
    });
  });
  /* END Blog Categories */

  //
};
