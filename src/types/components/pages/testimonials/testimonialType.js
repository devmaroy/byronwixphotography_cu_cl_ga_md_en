import { shape, number, string, node } from 'prop-types';

// Testimonial Type
export default {
  authorImage: shape({
    base64: string.isRequired,
    width: number.isRequired,
    height: number.isRequired,
    src: string.isRequired,
    srcSet: string.isRequired,
  }).isRequired,
  authorName: string.isRequired,
  authorPosition: string,
  children: node.isRequired,
};
