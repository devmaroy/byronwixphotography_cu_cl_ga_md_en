import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';
import CustomCheckbox from '../components/common/customCheckbox';

// Query
const query = graphql`
  query ContactSubpageQuery {
    contact: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/contact/" }
        base: { regex: "/index/" }
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
            contactHeading
            contactDetails {
              id
              heading
              content {
                id
                type
                url
                text
              }
            }
            contactFormFields {
              id
              label
              type
              name
            }
            contactFormCheckbox {
              name
              text
            }
            contactFormButtonText
          }
          html
        }
      }
    }
  }
`;

const Contact = () => {
  const data = useStaticQuery(query);
  const contactData = data.contact.nodes[0].childMarkdownRemark;

  return (
    <Layout>
      <SEO
        title={contactData.frontmatter.seo.title}
        description={contactData.frontmatter.seo.description}
      />

      <section className="subpage contact">
        <div className="container">
          <div className="subpage__inner">
            <SubpageHeader heading={contactData.frontmatter.info.heading}>
              {contactData.frontmatter.info.text}
            </SubpageHeader>

            <div className="contact__wrapper">
              <div className="contact-details">
                <h2
                  className="contact-details__heading"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: contactData.frontmatter.contactHeading,
                  }}
                />

                <div
                  className="contact-details__text"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: contactData.html }}
                />

                <ul className="contact-details__list">
                  {contactData.frontmatter.contactDetails.map(
                    ({ id, heading, content }) => (
                      <li key={id} className="contact-details__item">
                        <h3 className="contact-details__subheading">
                          {heading}
                        </h3>

                        <div className="contact-details__subtext">
                          {content.map(({ id: cid, type, url, text }) => {
                            return type === 'text' ? (
                              <p key={cid}>{text}</p>
                            ) : (
                              <p key={cid}>
                                <a href={url}>{text}</a>
                              </p>
                            );
                          })}
                        </div>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <form className="form contact-details-form">
                {contactData.frontmatter.contactFormFields.map(
                  ({ id, label, type, name }) => (
                    <div key={id} className="form__group">
                      <label htmlFor="name" className="form__label">
                        {label}

                        {type === 'textarea' ? (
                          <textarea name={name} className="form__control" />
                        ) : (
                          <input
                            type={type}
                            name={name}
                            className="form__control"
                          />
                        )}
                      </label>
                    </div>
                  ),
                )}

                <div className="form__meta-group">
                  <CustomCheckbox
                    id={contactData.frontmatter.contactFormCheckbox.id}
                    name={contactData.frontmatter.contactFormCheckbox.name}
                  >
                    {contactData.frontmatter.contactFormCheckbox.text}
                  </CustomCheckbox>

                  <div className="form__meta">
                    <button type="button" className="button button--secondary">
                      {contactData.frontmatter.contactFormButtonText}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
