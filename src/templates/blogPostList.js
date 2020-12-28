import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';
import Pagination from '../components/common/pagination';
import BlogPostList from '../components/subpages/blog/blogPostList';
import BlogSidebar from '../components/subpages/blog/blog-sidebar/blogSidebar';

const BlogPostListTemplate = ({ pageContext, data }) => {
  const { totalPages } = pageContext;
  const blogPostsInfo = data.blogPostsInfo.nodes[0].childMarkdownRemark;
  const blogPosts = data.blogPosts.nodes;

  return (
    <Layout>
      <SEO
        title={blogPostsInfo.frontmatter.seo.title}
        description={blogPostsInfo.frontmatter.seo.description}
      />

      <section className="subpage blog-page">
        <div className="container">
          <div className="subpage__inner">
            <SubpageHeader heading={blogPostsInfo.frontmatter.info.heading}>
              {blogPostsInfo.frontmatter.info.text}
            </SubpageHeader>

            <div className="blog-layout">
              <div className="blog-main">
                <BlogPostList posts={blogPosts} />
                <Pagination pageCount={totalPages} />
              </div>

              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Blog Post List Template Query
export const BlogPostListTemplateQuery = graphql`
  query BlogPosts($skip: Int!, $limit: Int!) {
    blogPostsInfo: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/blog/posts/" }
        name: { eq: "posts_info" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            seo {
              title
              description
            }
            info {
              heading
              text
            }
          }
        }
      }
    }
    blogPosts: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/blog/posts/list/" }
      }
      sort: { fields: [childMarkdownRemark___frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            title
            slug
            formattedDate: date(formatString: "MMMM D, YYYY")
            date
            author
            teaser
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            categories {
              id
              name
              slug
            }
          }
        }
      }
    }
  }
`;

BlogPostListTemplate.propTypes = {
  pageContext: PropTypes.shape({
    limit: PropTypes.number.isRequired,
    skip: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    blogPostsInfo: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          childMarkdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
              id: PropTypes.string.isRequired,
              info: PropTypes.shape({
                heading: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
              }).isRequired,
              seo: PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
              }).isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    blogPosts: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          childMarkdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
              id: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
              author: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              formattedDate: PropTypes.string.isRequired,
              teaser: PropTypes.string.isRequired,
              categories: PropTypes.arrayOf(
                PropTypes.shape({
                  id: PropTypes.string.isRequired,
                  name: PropTypes.string.isRequired,
                  slug: PropTypes.string.isRequired,
                }).isRequired,
              ).isRequired,
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
            }).isRequired,
          }).isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostListTemplate;
