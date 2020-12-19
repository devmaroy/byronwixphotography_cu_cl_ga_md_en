import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// TODO: Remove after
import authorImg from '../../../../images/subpages/about/about.jpg';

const BlogPostMeta = ({ tags }) => {
  return (
    <footer className="blog-article-meta">
      <ul className="blog-article-meta-tags">
        {tags.map(({ id, slug, name }) => (
          <li key={id} className="blog-article-meta-tags__item">
            <Link to={`/blog/tag/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <div className="blog-article-meta-author">
        <div className="blog-article-meta-author__wrapper">
          <div className="blog-article-meta-author__image">
            <img src={authorImg} alt="Byron Wix" />
          </div>

          <div className="blog-article-meta-author__info">
            <h3 className="blog-article-meta-author__name">Byron Wix</h3>

            <div className="blog-article-meta-author__bio">
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

            <div className="blog-article-meta-author__social">
              <ul>
                <li>facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-article-meta-controls">
        <div className="blog-article-meta-controls__control">
          <span className="blog-article-meta-controls__subheading">
            Previous post
          </span>

          <h4 className="blog-article-meta-controls__heading">
            <Link to="/" className="blog-article-meta-controls__link">
              Cake snaps cheesecake pastry tiramisu
            </Link>
          </h4>
        </div>

        <div className="blog-article-meta-controls__control">
          <span className="blog-article-meta-controls__subheading">
            Following post
          </span>

          <h4 className="blog-article-meta-controls__heading">
            <Link to="/" className="blog-article-meta-controls__link">
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
