import { shape, string } from 'prop-types';

// Page Info Type
export default shape({
  childMarkdownRemark: shape({
    frontmatter: shape({
      id: string.isRequired,
      info: shape({
        heading: string.isRequired,
        text: string,
      }).isRequired,
      seo: shape({
        title: string.isRequired,
        description: string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}).isRequired;
