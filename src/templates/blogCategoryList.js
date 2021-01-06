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
import blogPostCategoryListType from '../types/blog/blogPostCategoryListType';

const BlogCategoryListTemplate = ({ pageContext, data }) => {
  const { name, slug, totalPages } = pageContext;
  const blogCategoryPostsInfo =
    data.blogCategoryPostsInfo.nodes[0].childMarkdownRemark;
  const blogCategoryPosts = data.blogCategoryPosts.nodes;

  return (
    <Layout>
      <SEO
        title={blogCategoryPostsInfo.frontmatter.seo.title}
        description={blogCategoryPostsInfo.frontmatter.seo.description}
      />

      <section className="subpage blog">
        <div className="container">
          <div className="subpage__inner">
            <SubpageHeader
              heading={blogCategoryPostsInfo.frontmatter.info.heading}
              subheading={name}
              showDescription={false}
            />

            <div className="blog-layout">
              <div className="blog-main">
                <BlogPostList posts={blogCategoryPosts} />
                <Pagination
                  prefix={`blog/category/${slug}`}
                  pageCount={totalPages}
                />
              </div>

              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Blog Category List Template Query
export const BlogCategoryListTemplateQuery = graphql`
  query BlogCategoryPosts($skip: Int!, $limit: Int!, $slug: String!) {
    blogCategoryPostsInfo: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/blog/category/" }
        name: { eq: "category_info" }
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
            }
          }
        }
      }
    }
    blogCategoryPosts: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/blog/posts/list/" }
        childMarkdownRemark: {
          frontmatter: { categories: { elemMatch: { slug: { eq: $slug } } } }
        }
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

BlogCategoryListTemplate.propTypes = {
  pageContext: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    skip: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    blogCategoryPostsInfo: PropTypes.shape({
      nodes: PropTypes.arrayOf(pageInfoType).isRequired,
    }).isRequired,
    blogCategoryPosts: PropTypes.shape({
      nodes: PropTypes.arrayOf(blogPostCategoryListType).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogCategoryListTemplate;
