/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import Layout from '../../components/layout/layout';
import SEO from '../../components/common/seo';
import SubpageHeader from '../../components/common/subpageHeader';
import BlogPostListSimple from '../../components/subpages/blog/blogPostListSimple';
import BlogSidebar from '../../components/subpages/blog/blog-sidebar/blogSidebar';
import blogSearchType from '../../types/blog/blogSearchType';

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
    // Check if Lunr exists and if we have query to search for
    if (!window.__LUNR__ || !searchTerm) {
      navigate('/blog');
      return;
    }

    // Look for results
    window.__LUNR__.__loaded.then((lunr) => {
      // Lunr is loaded at this point - get refs
      const refs = lunr.en.index.search(searchTerm);

      // Get the data based on the refs
      const lunrData = refs.map(({ ref }) => lunr.en.store[ref]);

      // Update state with the data
      setResults(lunrData);
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
  ...blogSearchType,
};

export default SearchPage;
