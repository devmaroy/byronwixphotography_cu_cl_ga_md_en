/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import Layout from '../../components/layout/layout';
import SEO from '../../components/common/seo';
import SubpageHeader from '../../components/common/subpageHeader';
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
    if (!window.__LUNR__ || !searchTerm) {
      navigate('/blog');
      return;
    }

    // Load results
    window.__LUNR__.__loaded.then((lunr) => {
      // Lunr is loaded here - get refs
      const refs = lunr.en.index.search(searchTerm);

      // Get posts based on refs
      const posts = refs.map(({ ref }) => lunr.en.store[ref]);

      // Set results to state
      setResults(posts);
    });
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
                <h3 className="blog-search__heading">
                  Results ({results.length}) for:{' '}
                  <span className="blog-search__term">{searchTerm}</span>
                </h3>

                {results.length !== 0 && (
                  <div className="blog-search__results">
                    <BlogPostListSimple posts={results} />
                  </div>
                )}
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
