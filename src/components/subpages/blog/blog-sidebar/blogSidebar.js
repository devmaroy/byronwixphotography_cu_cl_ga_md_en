import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogSidebarAuthor from './blogSidebarAuthor';
import BlogSidebarCategories from './blogSidebarCategories';
import BlogSidebarSearch from './blogSidebarSearch';
import BlogSidebarRecentPosts from './blogSidebarRecentPosts';

// Query
const query = graphql`
  {
    aboutPhoto: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "subpages/about" }
        name: { eq: "about" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const BlogSidebar = () => {
  const data = useStaticQuery(query);
  const aboutPhoto = data.aboutPhoto.nodes[0].childImageSharp;

  return (
    <div className="blog-sidebar">
      <BlogSidebarAuthor heading="About" image={aboutPhoto.fluid}>
        <p>
          Halvah macaroon marzipan sugar plum powder cotton candy cheesecake.
        </p>
      </BlogSidebarAuthor>

      <BlogSidebarCategories
        heading="Categories"
        categories={[
          {
            id: 'ca0ade99-aa0d-4bf7-8066-e732489f6cce',
            name: 'Toffee',
            slug: 'toffee',
          },
          {
            id: 'a182adfe-9ace-4af6-a20e-477dfaa5cbde',
            name: 'Pudding',
            slug: 'pudding',
          },
          {
            id: '2cbc4d8d-6700-4742-b1d4-3504031aa2c5',
            name: 'Cupcake pie',
            slug: 'cupcake-pie',
          },
          {
            id: '2f1bb2e8-8c05-4603-b57a-9787c1568bb3',
            name: 'Sugar plum',
            slug: 'sugar-plum',
          },
          {
            id: '230d4d63-ef1f-4dac-9fd5-02f9b4e1b242',
            name: 'Topping',
            slug: 'topping',
          },
          {
            id: 'f992fea8-5625-43ec-941b-d5a03562a087',
            name: 'Lemon',
            slug: 'lemon',
          },
          {
            id: 'd58c5bc3-2491-4b24-a934-97dafeff7ca8',
            name: 'Gingerbread',
            slug: 'gingerbread',
          },
          {
            id: '5a867019-02c3-4b87-a02f-ebf0a6aaec5c',
            name: 'Cupcake',
            slug: 'cupcake',
          },
        ]}
      />

      <BlogSidebarSearch heading="Search" />

      <BlogSidebarRecentPosts
        heading="Recent articles"
        posts={[
          {
            id: '6e445562-75c8-461b-b504-fd77b4b454be',
            heading: 'Danish cookie chocolate bar brownie sesame',
            slug: 'danish-cookie-chocolate-bar-brownie-sesame',
          },
          {
            id: '9cfef70a-f726-44e3-8f0d-142611c1ad8c',
            heading: 'Oat cake lemon drops topping gingerbread',
            slug: 'oat-cake-lemon-drops-topping-gingerbread',
          },
          {
            id: 'ffb21a03-162f-4846-9f06-493ee4f05e50',
            heading: 'Halvah danish candy jelly cookie',
            slug: 'halvah-danish-candy-jelly-cookie',
          },
          {
            id: '9a72ffa5-0479-42bc-be96-f4a3ec0a5ae1',
            heading: 'Jelly beans toffee macaroon oat cake',
            slug: 'jelly-beans-toffee-macaroon-oat-cake',
          },
          {
            id: 'ad5d2a7f-0c00-48af-a928-dfb84c13c002',
            heading: 'Chocolate dragée halvah jelly-o muffin tart',
            slug: 'chocolate-dragee-halvah-jelly-o-muffin-tart',
          },
          {
            id: 'c64206da-ba78-4043-9b3d-606ee3375085',
            heading: 'Candy canes cotton marzipan',
            slug: 'candy-canes-cotton-marzipan',
          },
        ]}
      />
    </div>
  );
};

export default BlogSidebar;
