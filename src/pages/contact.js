import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
import SubpageHeader from '../components/common/subpageHeader';
import CustomCheckbox from '../components/common/customCheckbox';

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact me"
        description="Halvah sesame snaps sugar plum. Chocolate halvah wafer gingerbread tootsie
      roll jelly-o powder caramels powder."
      />

      <section className="subpage contact">
        <div className="container">
          <div className="subpage__inner">
            <SubpageHeader heading="Contact Me">
              <p>
                Halvah sesame snaps sugar plum. Chocolate halvah wafer
                gingerbread tootsie roll jelly-o powder caramels powder.
              </p>
            </SubpageHeader>

            <div className="contact-details">
              <h2 className="contact-details__heading">Contact details</h2>

              <div className="contact-details__text">
                <p>
                  Cookie tiramisu tiramisu sesame snaps oat cake. Ties sweet
                  roll tiramisu sugar plum. Pastry marshmallow brownie. Bear
                  claw dragée donut biscuit candy canes fruitcake jelly-o
                  croissant.
                </p>
              </div>

              <ul className="contact-details__list">
                <li className="contact-details__item">
                  <h3 className="contact-details__subheading">Address</h3>
                  <div className="contact-details__subtext">
                    <p>80 Winding Way Lane</p>
                    <p>Summerville, SC 29483</p>
                  </div>
                </li>

                <li className="contact-details__item">
                  <h3 className="contact-details__subheading">Email</h3>
                  <div className="contact-details__subtext">
                    <p>
                      <a href="/">contact@byronwix.com</a>
                    </p>
                  </div>
                </li>

                <li className="contact-details__item">
                  <h3 className="contact-details__subheading">Phone</h3>
                  <div className="contact-details__subtext">
                    <p>
                      <a href="/">202-555-0139</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <form className="form contact-details-form">
              <div className="form__group">
                <label htmlFor="name" className="form__label">
                  Name
                  <input type="text" name="name" className="form__control" />
                </label>
              </div>

              <div className="form__group">
                <label htmlFor="email" className="form__label">
                  Email
                  <input type="email" name="email" className="form__control" />
                </label>
              </div>

              <div className="form__group">
                <label htmlFor="message" className="form__label">
                  Message
                  <textarea name="message" className="form__control" />
                </label>
              </div>

              <CustomCheckbox id="acceptedTerms" name="acceptedTerms">
                I agree to the{' '}
                <Link to="/terms-of-service" className="custom-checkbox__link">
                  Terms of Service
                </Link>{' '}
                &{' '}
                <Link to="/privacy-policy" className="custom-checkbox__link">
                  Privacy policy
                </Link>
              </CustomCheckbox>

              <div className="form__meta">
                <button type="button" className="button button--secondary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
