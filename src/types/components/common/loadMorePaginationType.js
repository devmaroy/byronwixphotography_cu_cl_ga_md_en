import { number, arrayOf, object, func } from 'prop-types';

// Load More Pagination Type
export default {
  perPage: number.isRequired,
  items: arrayOf(object).isRequired,
  children: func.isRequired,
  onReset: func,
};
