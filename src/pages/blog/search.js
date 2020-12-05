/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import Layout from '../../components/layout/layout';
import SEO from '../../components/common/seo';
import SubpageHeader from '../../components/common/subpageHeader';
// import Pagination from '../components/common/pagination';
import BlogPostListSimple from '../../components/subpages/blog/blog-main/blogPostListSimple';
import BlogSidebar from '../../components/subpages/blog/blog-sidebar/blogSidebar';

// Query
const query = graphql`
  query BlogSearchQuery {
    blogSearchInfo: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/blog/search/" }
        name: { eq: "search_info" }
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
  }
`;

const SearchPage = ({ location }) => {
  const data = useStaticQuery(query);
  const blogSearchInfo = data.blogSearchInfo.nodes[0].childMarkdownRemark;
  const [results, setResults] = useState([]);
  const searchTerm = new URLSearchParams(location.search).get('keywords') || '';

  useEffect(() => {
    // Check if search term is empty
    if (!searchTerm) {
      navigate('/blog');
      return;
    }

    // Check if LUNR exist and if we have some query to search for

    // Load results
    if (window.__LUNR__ && !searchTerm !== '') {
      window.__LUNR__.__loaded.then((lunr) => {
        // Lunr is loaded here - get refs
        const refs = lunr.en.index.search(searchTerm);

        // Get posts based on refs
        const posts = refs.map(({ ref }) => lunr.en.store[ref]);

        // Set results to state
        setResults(posts);
      });
    }
  }, [searchTerm]);

  return (
    <Layout>
      <SEO
        title={blogSearchInfo.frontmatter.seo.title}
        description={blogSearchInfo.frontmatter.seo.description}
      />

      <section className="subpage blog-search">
        <div className="container">
          <div className="subpage__inner">
            <SubpageHeader heading={blogSearchInfo.frontmatter.info.heading}>
              {blogSearchInfo.frontmatter.info.text}
            </SubpageHeader>

            <div className="blog-layout">
              <div className="blog-main">
                <h3>
                  Results for: <strong>“cake cheesecake”</strong>
                </h3>
                {results.length !== 0 && <BlogPostListSimple posts={results} />}
              </div>

              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

SearchPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchPage;
