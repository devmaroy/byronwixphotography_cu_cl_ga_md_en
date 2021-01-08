import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { blogPostNavigationType } from '../../../../types/blog/blogPostType';
import blogPostMetaType from '../../../../types/blog/blogPostMetaType';
import Social from '../../../common/social';

// Query
const query = graphql`
  query BlogPostMetaQuery {
    blogPostMetaAuthor: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "markdown-data" }
        relativeDirectory: { regex: "/subpages/blog/author/" }
        name: { eq: "author_info" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            id
            name
            image {
              childImageSharp {
                fixed(width: 152, height: 152, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;

const BlogPostMeta = ({ tags, prev, next }) => {
  const data = useStaticQuery(query);
  const blogPostMetaAuthor =
    data.blogPostMetaAuthor.nodes[0].childMarkdownRemark;

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
            <Img
              fixed={blogPostMetaAuthor.frontmatter.image.childImageSharp.fixed}
              className="blog-post-meta-author-image__img"
              alt={`${blogPostMetaAuthor.frontmatter.name} portrait`}
            />
          </div>

          <div className="blog-post-meta-author__info">
            <h3
              className="blog-post-meta-author__name"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: blogPostMetaAuthor.frontmatter.name,
              }}
            />

            <div
              className="blog-post-meta-author__bio"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: blogPostMetaAuthor.html }}
            />

            <div className="blog-post-meta-author__social">
              <Social />
            </div>
          </div>
        </div>
      </div>

      <div
        className={classNames('blog-post-meta-controls', {
          'blog-post-meta-controls--right': !prev,
        })}
      >
        {prev && (
          <div className="blog-post-meta-controls__control">
            <span className="blog-post-meta-controls__subheading">
              Previous post
            </span>

            <h4 className="blog-post-meta-controls__heading">
              <Link
                to={`/blog/${prev.childMarkdownRemark.frontmatter.slug}`}
                className="blog-post-meta-controls__link"
              >
                {prev.childMarkdownRemark.frontmatter.title}
              </Link>
            </h4>
          </div>
        )}

        {next && (
          <div className="blog-post-meta-controls__control">
            <span className="blog-post-meta-controls__subheading">
              Following post
            </span>

            <h4 className="blog-post-meta-controls__heading">
              <Link
                to={`/blog/${next.childMarkdownRemark.frontmatter.slug}`}
                className="blog-post-meta-controls__link"
              >
                {next.childMarkdownRemark.frontmatter.title}
              </Link>
            </h4>
          </div>
        )}
      </div>
    </footer>
  );
};

BlogPostMeta.propTypes = {
  ...blogPostMetaType,
  prev: blogPostNavigationType,
  next: blogPostNavigationType,
};

export default BlogPostMeta;
