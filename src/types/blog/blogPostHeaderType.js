import { shape, string, number, arrayOf } from 'prop-types';

// Blog Post Header
export default {
  categories: arrayOf(
    shape({
      id: string.isRequired,
      slug: string.isRequired,
      name: string.isRequired,
    }).isRequired,
  ).isRequired,
  date: string.isRequired,
  formattedDate: string.isRequired,
  title: string.isRequired,
  featuredImage: shape({
    fluid: shape({
      aspectRatio: number.isRequired,
      base64: string.isRequired,
      sizes: string.isRequired,
      src: string.isRequired,
      srcSet: string.isRequired,
    }).isRequired,
  }).isRequired,
};
