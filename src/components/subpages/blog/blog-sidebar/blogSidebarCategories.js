import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

// Query
const query = graphql`
  query BlogSidebarCategoriesQuery {
    blogSidebarCategoriesInfo: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/blog/categories/" }
        name: { eq: "categories_info" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            heading
          }
        }
      }
    }
    blogSidebarCategories: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/blog/categories/list/" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

const BlogSidebarCategories = () => {
  const data = useStaticQuery(query);
  const blogSidebarCategoriesInfo =
    data.blogSidebarCategoriesInfo.nodes[0].childMarkdownRemark;
  const blogSidebarCategories = data.blogSidebarCategories.nodes;

  return (
    <div className="blog-sidebar-categories">
      <h3
        className="blog-sidebar__heading"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: blogSidebarCategoriesInfo.frontmatter.heading,
        }}
      />

      <ul className="blog-sidebar-categories__list">
        {blogSidebarCategories.map(
          ({ childMarkdownRemark: { frontmatter } }) => (
            <li key={frontmatter.id} className="blog-sidebar-categories__item">
              <Link
                to={`/blog/category/${frontmatter.slug}`}
                className="blog-sidebar-categories__link"
              >
                {frontmatter.name}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default BlogSidebarCategories;
