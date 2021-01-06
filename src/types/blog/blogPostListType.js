import { shape, string, number, arrayOf } from 'prop-types';

// Blog Post List Type
export default shape({
  frontmatter: shape({
    id: string.isRequired,
    title: string.isRequired,
    slug: string.isRequired,
    author: string.isRequired,
    date: string.isRequired,
    formattedDate: string.isRequired,
    teaser: string.isRequired,
    categories: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
        slug: string.isRequired,
      }).isRequired,
    ).isRequired,
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
  }).isRequired,
}).isRequired;
