import { bool, string, node } from 'prop-types';

// Subpage Header Type
export default {
  heading: string.isRequired,
  subheading: string,
  showDescription: bool,
  children: node,
};
