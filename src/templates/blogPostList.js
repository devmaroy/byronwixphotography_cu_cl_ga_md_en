import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';
import Pagination from '../components/common/pagination';
import BlogPostList from '../components/subpages/blog/blogPostList';
import BlogSidebar from '../components/subpages/blog/blog-sidebar/blogSidebar';
import pageInfoType from '../types/components/common/pageInfoType';
import blogPostListType from '../types/blog/blogPostListType';

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
                fluid(maxWidth: 1000, quality: 100) {
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
      nodes: PropTypes.arrayOf(pageInfoType).isRequired,
    }).isRequired,
    blogPosts: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          childMarkdownRemark: blogPostListType,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostListTemplate;
