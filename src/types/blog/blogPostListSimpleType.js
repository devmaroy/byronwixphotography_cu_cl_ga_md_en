import { shape, string, arrayOf } from 'prop-types';

// Blog Post List Simple Type
export default shape({
  id: string.isRequired,
  title: string.isRequired,
  slug: string.isRequired,
  excerpt: string.isRequired,
  date: string.isRequired,
  formattedDate: string.isRequired,
  author: string.isRequired,
  categories: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      slug: string.isRequired,
    }).isRequired,
  ).isRequired,
}).isRequired;
