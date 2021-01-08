import { shape, string, number, arrayOf } from 'prop-types';

// Blog Post Navigation Type
export const blogPostNavigationType = shape({
  childMarkdownRemark: shape({
    frontmatter: shape({
      id: string.isRequired,
      title: string.isRequired,
      slug: string.isRequired,
    }).isRequired,
  }).isRequired,
}).isRequired;

// Blog Post Type
export default shape({
  frontmatter: shape({
    title: string.isRequired,
    slug: string.isRequired,
    date: string.isRequired,
    formattedDate: string.isRequired,
    featuredImage: shape({
      childImageSharp: shape({
        fluid: shape({
          aspectRatio: number.isRequired,
          base64: string.isRequired,
          sizes: string.isRequired,
          src: string.isRequired,
          srcSet: string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    seo: shape({
      title: string.isRequired,
      description: string.isRequired,
    }).isRequired,
    categories: arrayOf(
      shape({
        id: string.isRequired,
        slug: string.isRequired,
        name: string.isRequired,
      }).isRequired,
    ).isRequired,
    tags: arrayOf(
      shape({
        id: string.isRequired,
        slug: string.isRequired,
        name: string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  html: string.isRequired,
}).isRequired;
