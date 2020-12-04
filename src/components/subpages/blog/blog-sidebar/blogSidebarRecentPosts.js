import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

// Query
const query = graphql`
  query BlogSidebarRecentPosts {
    blogSidebarRecentPostsInfo: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/blog/posts/" }
        name: { eq: "sidebar_info" }
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
    blogSidebarRecentPosts: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/blog/posts/list/" }
      }
      sort: { fields: [childMarkdownRemark___frontmatter___date], order: DESC }
      limit: 6
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
  }
`;

const BlogSidebarRecentPosts = () => {
  const data = useStaticQuery(query);
  const blogSidebarRecentPostsInfo =
    data.blogSidebarRecentPostsInfo.nodes[0].childMarkdownRemark;
  const blogSidebarRecentPosts = data.blogSidebarRecentPosts.nodes;

  return (
    <div className="blog-sidebar-recent-posts">
      <h3
        className="blog-sidebar__heading"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: blogSidebarRecentPostsInfo.frontmatter.heading,
        }}
      />

      <ul className="blog-sidebar-recent-posts__list">
        {blogSidebarRecentPosts.map(
          ({ childMarkdownRemark: { frontmatter } }) => (
            <li
              key={frontmatter.id}
              className="blog-sidebar-recent-posts__item"
            >
              <Link
                to={`/blog/${frontmatter.slug}`}
                className="blog-sidebar-recent-posts__link"
              >
                {frontmatter.title}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default BlogSidebarRecentPosts;
