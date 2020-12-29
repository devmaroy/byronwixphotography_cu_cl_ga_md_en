import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Service from './service';

// Query
const query = graphql`
  query ServicesPageQuery {
    services: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/pages/services/" }
        base: { regex: "/index/" }
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
    servicesItems: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/pages/services/items/" }
      }
      sort: { fields: [base], order: ASC }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            icon
          }
          html
        }
      }
    }
  }
`;

const Services = () => {
  const data = useStaticQuery(query);
  const servicesData = data.services.nodes[0].childMarkdownRemark;
  const servicesItemsData = data.servicesItems.nodes;

  console.log(servicesItemsData);

  return (
    <section className="services">
      <div className="container">
        <div className="services__inner">
          <h2
            className="section__heading services__heading"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: servicesData.frontmatter.heading,
            }}
          />

          <div className="services__list">
            {servicesItemsData.map(
              ({
                childMarkdownRemark: {
                  frontmatter: { id, icon },
                  html,
                },
              }) => (
                <Service key={id} icon={icon}>
                  {html}
                </Service>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
