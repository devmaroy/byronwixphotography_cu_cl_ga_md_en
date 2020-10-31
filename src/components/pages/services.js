import React from 'react';
import Service from '../common/service';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services__inner">
          <h2 className="section__heading services__heading">
            What do I offer
          </h2>

          <div className="services__list">
            <Service icon="camera-alt">
              <p>
                Pudding pie lemon drops brownie sugar plum candy chupa chups
                lemon tarts pie drops.
              </p>
            </Service>

            <Service icon="camera-movie">
              <p>
                Gingerbread dragée chocolate cake sweet roll cake sweet
                chocolate cake gummi bears brow.
              </p>
            </Service>

            <Service icon="users">
              <p>
                Halvah cake carrot cake powder ice cream cake biscuit
                gingerbread pudding macaroon.
              </p>
            </Service>

            <Service icon="question-circle">
              <p>
                Carrot cake carrot cake wafer donut chocolate pie tootsie roll
                cake cotton gingerbread candy canes.
              </p>
            </Service>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
