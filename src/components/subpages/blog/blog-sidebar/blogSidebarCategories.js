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
        relativeDirectory: { regex: "/blog/posts/list/" }
      }
    ) {
      group(field: childMarkdownRemark___frontmatter___categories___name) {
        name: fieldValue
        totalCategories: totalCount
      }
    }
  }
`;

const BlogSidebarCategories = () => {
  const data = useStaticQuery(query);
  const blogSidebarCategoriesInfo =
    data.blogSidebarCategoriesInfo.nodes[0].childMarkdownRemark;
  const blogSidebarCategories = data.blogSidebarCategories.group;

  const getCategories = () => {
    return blogSidebarCategories
      .map(({ name, totalCategories }) => {
        const slug = name.replace(/ /g, '-').toLowerCase();
        const updatedCategory = { slug, name, totalCategories };

        return updatedCategory;
      })
      .sort((a, b) => b.totalCategories - a.totalCategories);
  };

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
        {getCategories().map(({ slug, name, totalCategories }) => (
          <li key={slug} className="blog-sidebar-categories__item">
            <Link
              to={`/blog/category/${slug}`}
              className="blog-sidebar-categories__link"
            >
              {name} ({totalCategories})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSidebarCategories;
