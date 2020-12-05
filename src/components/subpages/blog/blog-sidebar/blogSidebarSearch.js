import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SearchForm from '../../../common/search/searchForm';

// Query
const query = graphql`
  query BlogSidebarSearch {
    blogSidebarSearchInfo: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/blog/search/" }
        name: { eq: "sidebar_info" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            heading
          }
        }
      }
    }
  }
`;

const BlogSidebarSearch = () => {
  const data = useStaticQuery(query);
  const blogSidebarSearchInfo =
    data.blogSidebarSearchInfo.nodes[0].childMarkdownRemark;

  return (
    <div className="blog-sidebar-search">
      <h3
        className="blog-sidebar__heading"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: blogSidebarSearchInfo.frontmatter.heading,
        }}
      />

      <SearchForm />
    </div>
  );
};

export default BlogSidebarSearch;
