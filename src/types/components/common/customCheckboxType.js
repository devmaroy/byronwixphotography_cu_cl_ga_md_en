import { node, string } from 'prop-types';

// Custom Checkbox Type
export default {
  id: string,
  name: string,
  children: node.isRequired,
};
