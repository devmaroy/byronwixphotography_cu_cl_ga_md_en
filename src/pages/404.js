import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SEO from '../components/common/seo';

const NotFoundPage = () => {
  return (
    <>
      <SEO title="Page not found" />

      <div className="page-error">
        <div className="container">
          <div className="page-error__inner">
            <h1 className="page-error__heading">404</h1>
            <h2 className="page-error__subheading">
              I&apos;m so sorry! Something went wrong.
            </h2>

            <div className="page-error__text">
              <p>
                Why? It&apos;s because the page you are looking for doesn&apos;t
                exists. Maybe you have a typo or something else went wrong.
              </p>
              <p>
                Don&apos;t worry if you feel a little bit lost! You can always
                go back to my homepage and try again.
              </p>
            </div>

            <Link to="/" className="page-error__link">
              <FontAwesomeIcon icon="angle-double-left" fixedWidth /> Back to
              home!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
