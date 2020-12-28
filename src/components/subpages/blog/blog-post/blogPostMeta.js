import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Social from '../../../common/social';

// TODO: Remove after
import authorImg from '../../../../images/subpages/about/about.jpg';

const BlogPostMeta = ({ tags }) => {
  return (
    <footer className="blog-post-meta">
      <ul className="blog-post-meta-tags">
        {tags.map(({ id, slug, name }) => (
          <li key={id} className="blog-post-meta-tags__item">
            <Link
              to={`/blog/tag/${slug}`}
              className="blog-post-meta-tags__link"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="blog-post-meta-author">
        <div className="blog-post-meta-author__wrapper">
          <div className="blog-post-meta-author-image">
            <img
              src={authorImg}
              alt="Byron Wix"
              className="blog-post-meta-author-image__img"
            />
          </div>

          <div className="blog-post-meta-author__info">
            <h3 className="blog-post-meta-author__name">Byron Wix</h3>

            <div className="blog-post-meta-author__bio">
              <p>
                Tart chocolate powder gingerbread carrot cake croissant jujubes
                apple pie. Dragée apple pie chocolate bar powder cookie bonbon
                cookie muffin. Cookie jelly-o cupcake caramels caramels cotton
                candy gummies lemon drops. Wafer jelly-o pastry soufflé cake
                lollipop. Dragée tart gummies muffin carrot cake tart tiramisu
                cake. Gummies soufflé icing. Lemon drops icing sweet roll
                pudding.
              </p>
            </div>

            <div className="blog-post-meta-author__social">
              <Social />
            </div>
          </div>
        </div>
      </div>

      <div className="blog-post-meta-controls">
        <div className="blog-post-meta-controls__control">
          <span className="blog-post-meta-controls__subheading">
            Previous post
          </span>

          <h4 className="blog-post-meta-controls__heading">
            <Link to="/" className="blog-post-meta-controls__link">
              Cake snaps cheesecake pastry tiramisu
            </Link>
          </h4>
        </div>

        <div className="blog-post-meta-controls__control">
          <span className="blog-post-meta-controls__subheading">
            Following post
          </span>

          <h4 className="blog-post-meta-controls__heading">
            <Link to="/" className="blog-post-meta-controls__link">
              Lollipop topping cake cheesecake gummi
            </Link>
          </h4>
        </div>
      </div>
    </footer>
  );
};

BlogPostMeta.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BlogPostMeta;
