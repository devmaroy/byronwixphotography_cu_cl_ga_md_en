import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// Query
const query = graphql`
  {
    site {
      siteMetadata {
        lang
        locale
        title
        titleSimplified
        description
        twitterHandle
        siteUrl
        siteName
        image
        author
      }
    }
  }
`;

const SEO = ({
  lang,
  title,
  description,
  twitterHandle,
  siteUrl,
  image,
  author,
}) => {
  const data = useStaticQuery(query);
  const { siteMetadata } = data.site;

  // Prepare data for SEO -> Helmet

  // HTML Attributes
  const helmetHtmlAttributes = {
    lang: lang || siteMetadata.lang,
  };

  // Title field
  const helmetTitle = title || siteMetadata.title;
  const helmetTitleTemplate =
    helmetTitle === siteMetadata.title
      ? null
      : `%s - ${siteMetadata.titleSimplified}`;

  // Meta fields
  const metaDescription = description || siteMetadata.description;
  const metaLocale = siteMetadata.locale;
  const metaTwitterHandle = twitterHandle || siteMetadata.twitterHandle;
  const metaUrl = siteUrl || siteMetadata.siteUrl;
  const metaName = siteUrl || siteMetadata.siteName;
  const metaImage = image || siteMetadata.image;
  const metaAuthor = author || siteMetadata.author;

  return (
    <Helmet
      htmlAttributes={helmetHtmlAttributes}
      title={helmetTitle}
      titleTemplate={helmetTitleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `og:locale`,
          content: metaLocale,
        },
        {
          name: `og:type`,
          content: `website`,
        },
        {
          name: `og:url`,
          content: metaUrl,
        },
        {
          name: `og:site_name`,
          content: metaName,
        },
        {
          name: `og:title`,
          content: helmetTitle,
        },
        {
          name: `og:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: metaUrl + metaImage,
        },
        {
          name: `og:image:alt`,
          content: ``,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: helmetTitle,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: metaUrl + metaImage,
        },
        {
          name: `twitter:creator`,
          content: metaTwitterHandle,
        },
        {
          name: `author`,
          content: metaAuthor,
        },
      ]}
    />
  );
};

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  twitterHandle: PropTypes.string,
  siteUrl: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
};

export default SEO;
