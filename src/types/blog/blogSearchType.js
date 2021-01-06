import { shape, string } from 'prop-types';

// Blog Search Type
export default {
  location: shape({
    search: string.isRequired,
  }).isRequired,
};
