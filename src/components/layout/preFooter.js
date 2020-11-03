import React from 'react';
import Social from '../common/social';

const PreFooter = () => {
  return (
    <div className="pre-footer">
      <div className="container">
        <div className="pre-footer__inner">
          <h3 className="pre-footer__heading">
            Topping pastry cheesecake pastry
          </h3>

          <div className="pre-footer__text">
            <p>
              Donut pie sweet roll sugar plum carrot cake sweet. Chupa chups
              donut danish icing pastry pudding sweet ice cream cheesecake.
            </p>
          </div>

          <div className="pre-footer__social">
            <Social type="square" />
          </div>

          <div className="pre-footer__newsletter">
            <h3 className="pre-footer__heading">Subscribe to newsletter</h3>

            <form className="pre-footer-form">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="pre-footer-form__control"
              />

              <div className="pre-footer-form__meta">
                <button
                  type="submit"
                  className="button button--sm button--primary"
                >
                  Send
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
