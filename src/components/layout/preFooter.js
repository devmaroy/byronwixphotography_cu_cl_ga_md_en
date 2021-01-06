import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Social from '../common/social';

// Query
const query = graphql`
  query PreFooterQuery {
    preFooter: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/prefooter/" }
        base: { regex: "/index/" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            heading
            newsletterHeading
            newsletterFormField {
              id
              placeholder
              type
              name
            }
            newsletterFormButtonText
          }
          html
        }
      }
    }
  }
`;

const PreFooter = () => {
  const data = useStaticQuery(query);
  const preFooterData = data.preFooter.nodes[0].childMarkdownRemark;

  return (
    <div className="pre-footer">
      <div className="container">
        <div className="pre-footer__inner">
          <div className="pre-footer__info">
            <h3
              className="pre-footer__heading"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: preFooterData.frontmatter.heading,
              }}
            />

            <div
              className="pre-footer__text"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: preFooterData.html,
              }}
            />

            <div className="pre-footer__social">
              <Social type="square" />
            </div>
          </div>

          <div className="pre-footer__newsletter">
            <h3
              className="pre-footer__heading"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: preFooterData.frontmatter.newsletterHeading,
              }}
            />

            <form className="pre-footer-form">
              <input
                type={preFooterData.frontmatter.newsletterFormField.type}
                name={preFooterData.frontmatter.newsletterFormField.name}
                placeholder={
                  preFooterData.frontmatter.newsletterFormField.placeholder
                }
                className="pre-footer-form__control"
              />

              <div className="pre-footer-form__meta">
                <button
                  type="button"
                  className="button button--sm button--primary pre-footer-form__button"
                >
                  {preFooterData.frontmatter.newsletterFormButtonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
