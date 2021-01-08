import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// Query
const query = graphql`
  query BlogSidebarAuthorQuery {
    blogSidebarAuthor: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/blog/author/" }
        name: { eq: "author_info" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            heading
            teaser
            image {
              childImageSharp {
                fixed(width: 210, height: 264, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;

const BlogSidebarAuthor = () => {
  const data = useStaticQuery(query);
  const blogSidebarAuthor = data.blogSidebarAuthor.nodes[0].childMarkdownRemark;

  return (
    <div className="blog-sidebar-author">
      <div className="blog-sidebar-author__image-wrapper">
        <Img
          fixed={blogSidebarAuthor.frontmatter.image.childImageSharp.fixed}
          className="blog-sidebar-author__image"
        />
      </div>

      <h3
        className="blog-sidebar__heading"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: blogSidebarAuthor.frontmatter.heading,
        }}
      />

      <div
        className="blog-sidebar-author__content"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: blogSidebarAuthor.frontmatter.teaser,
        }}
      />
    </div>
  );
};

export default BlogSidebarAuthor;
