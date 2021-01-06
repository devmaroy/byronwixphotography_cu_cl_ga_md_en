import { shape, string, arrayOf } from 'prop-types';

// Blog Post Meta
export default {
  tags: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      slug: string.isRequired,
    }).isRequired,
  ).isRequired,
};
