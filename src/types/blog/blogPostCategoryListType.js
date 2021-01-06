import { shape, string, number, arrayOf } from 'prop-types';

// Blog Post Category List Type

export default shape({
  childMarkdownRemark: shape({
    frontmatter: shape({
      id: string.isRequired,
      title: string.isRequired,
      slug: string.isRequired,
      author: string.isRequired,
      date: string.isRequired,
      formattedDate: string.isRequired,
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
  }).isRequired,
}).isRequired;
