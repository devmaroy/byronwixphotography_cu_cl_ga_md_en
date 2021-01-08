/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import BlogPost from '../components/subpages/blog/blog-post/blogPost';
import blogPostType, {
  blogPostNavigationType,
} from '../types/blog/blogPostType';

const BlogPostTemplate = ({ data, pageContext }) => {
  const blogPostData = data.blogPost.nodes[0].childMarkdownRemark;
  const { prev, next } = pageContext;

  return (
    <Layout>
      <SEO
        title={blogPostData.frontmatter.seo.title}
        description={blogPostData.frontmatter.seo.description}
      />

      <section className="subpage blog-post-page">
        <div className="subpage__inner blog-post-page__inner">
          <BlogPost data={blogPostData} prev={prev} next={next} />
        </div>
      </section>
    </Layout>
  );
};

// Blog Post Template Query
export const BlogPostTemplateQuery = graphql`
  query BlogPost($slug: String!) {
    blogPost: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/blog/posts/" }
        childMarkdownRemark: { frontmatter: { slug: { eq: $slug } } }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            title
            slug
            date
            formattedDate: date(formatString: "MMMM D, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            seo {
              title
              description
            }
            categories {
              id
              slug
              name
            }
            tags {
              id
              slug
              name
            }
          }
          html
        }
      }
    }
  }
`;

BlogPostTemplate.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    prev: blogPostNavigationType,
    next: blogPostNavigationType,
  }).isRequired,
  data: PropTypes.shape({
    blogPost: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          childMarkdownRemark: PropTypes.shape(blogPostType).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostTemplate;
