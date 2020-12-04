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
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
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
          fluid={blogSidebarAuthor.frontmatter.image.childImageSharp.fluid}
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
        dangerouslySetInnerHTML={{ __html: blogSidebarAuthor.html }}
      />
    </div>
  );
};

export default BlogSidebarAuthor;
