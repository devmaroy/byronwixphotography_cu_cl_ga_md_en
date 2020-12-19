import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import BlogPost from '../components/subpages/blog/blog-post/blogPost';

const BlogPostTemplate = ({ data }) => {
  const blogPostData = data.blogPost.nodes[0].childMarkdownRemark;

  return (
    <Layout>
      <SEO
        title="Oat cake lemon drops topping gingerbread"
        description="oat-cake-lemon-drops-topping-gingerbread"
      />

      <section className="blog-post">
        <div className="blog-post__inner">
          <BlogPost data={blogPostData} />
        </div>
      </section>
    </Layout>
  );
};

// Blog Post Template Query
export const BlogPostQueryTemplate = graphql`
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
            title
            slug
            date
            formattedDate: date(formatString: "MMMM D, YYYY")
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
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
  }).isRequired,
  data: PropTypes.shape({
    blogPost: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          childMarkdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              formattedDate: PropTypes.string.isRequired,
              featuredImage: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  fluid: PropTypes.shape({
                    aspectRatio: PropTypes.number.isRequired,
                    base64: PropTypes.string.isRequired,
                    sizes: PropTypes.string.isRequired,
                    src: PropTypes.string.isRequired,
                    srcSet: PropTypes.string.isRequired,
                  }).isRequired,
                }).isRequired,
              }).isRequired,
              categories: PropTypes.arrayOf(
                PropTypes.shape({
                  id: PropTypes.string.isRequired,
                  slug: PropTypes.string.isRequired,
                  name: PropTypes.string.isRequired,
                }).isRequired,
              ).isRequired,
            }).isRequired,
            html: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostTemplate;
