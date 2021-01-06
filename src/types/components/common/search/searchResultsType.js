import { string, bool, shape, arrayOf } from 'prop-types';

// Search Results Type
export default {
  searchTerm: string.isRequired,
  showMore: bool,
  results: arrayOf(
    shape({
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
    }).isRequired,
  ).isRequired,
};
