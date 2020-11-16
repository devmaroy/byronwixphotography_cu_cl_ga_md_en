export const categories = [
  {
    id: 'f98ac1dc-d04c-4b21-b1d6-1b1d1a4dd6bf',
    slug: 'all',
    name: 'All',
  },
  {
    id: '6e4cb51f-e069-48cb-9f3c-79d78523d1e4',
    slug: 'muffin',
    name: 'Muffin',
  },
  {
    id: 'e5b40e2e-e620-41ed-8fdf-2a6945a1d84b',
    slug: 'cupcakes',
    name: 'Cupcakes',
  },
  {
    id: '5435ebb0-c988-4a50-af10-7a8a505537f6',
    slug: 'bonbon-pie',
    name: 'Bonbon pie',
  },
  {
    id: 'b037bf04-9415-4ea6-ae8c-0c1c8cfe55b5',
    slug: 'tarts',
    name: 'Tarts',
  },
  {
    id: 'f986cb26-894c-4fb4-9735-3b6700d91de4',
    slug: 'sesame',
    name: 'Sesame',
  },
  {
    id: '36865d72-03bc-42b8-be43-83cf4505ff47',
    slug: 'bear',
    name: 'Bear',
  },
  {
    id: '2c50a691-a407-4d2e-86f0-7667db380fdf',
    slug: 'liquorice',
    name: 'Liquorice',
  },
];

export const getItems = (images) => {
  return [
    {
      id: 'e03fb245-b159-4fb7-82fb-31d8ae5dd09c',
      content: '<p>Pudding bear claw jelly beans chupa chups marzipan</p>',
      image: images[0].childImageSharp.fluid,
      categories: [
        {
          id: 'e302e8d9-20e3-4c5b-8370-3b7aaf6d0e08',
          name: 'Muffin',
          slug: 'muffin',
        },
      ],
    },
    {
      id: '3ac4a004-4f1d-4523-a2aa-700f72afd95b',
      content: '<p>Icing sesame snaps tiramisu cookie jelly-o</p>',
      image: images[1].childImageSharp.fluid,
      categories: [
        {
          id: 'f327024a-b139-4aca-bb64-42ed8236c717',
          name: 'Cupcakes',
          slug: 'cupcakes',
        },
        {
          id: '68520066-e520-4d41-8cab-e09e84396116',
          name: 'Bonbon pie',
          slug: 'bonbon-pie',
        },
      ],
    },
    {
      id: 'cb9aa524-5e1b-4d67-b21f-209858c9fba1',
      content: '<p>Cupcake cake cookie muffin chocolate candy</p>',
      image: images[2].childImageSharp.fluid,
      categories: [
        {
          id: '237682a0-79aa-449a-98a4-25eb018bc17a',
          name: 'Tarts',
          slug: 'tarts',
        },
      ],
    },
    {
      id: 'c33f9055-0367-4468-bde6-f0736d64e855',
      content: '<p>Jujubes cheesecake gummi bears jujubes lollipop apple</p>',
      image: images[3].childImageSharp.fluid,
      categories: [
        {
          id: 'b1af4c59-090e-490b-bc78-a2f5914e41c9',
          name: 'Sesame',
          slug: 'sesame',
        },
        {
          id: 'b2bd56cd-6d28-4e11-ace8-148bfc331f92',
          name: 'Bear',
          slug: 'bear',
        },
        {
          id: '7309d7f5-ab58-4313-a747-8f43f2fc584e',
          name: 'Liquorice',
          slug: 'liquorice',
        },
      ],
    },
    {
      id: '3d73f86b-2d9c-4a5e-9065-15e1508850e3',
      content: '<p>Marzipan donut tootsie roll bonbon</p>',
      image: images[4].childImageSharp.fluid,
      categories: [
        {
          id: 'b3ccbc3d-86ae-4d7f-a0a4-98f53660eb94',
          name: 'Muffin',
          slug: 'muffin',
        },
      ],
    },
    {
      id: '51c5b901-988b-4c23-973b-4058c3b90048',
      content: '<p>Pudding jelly beans icing bonbon danish gummies</p>',
      image: images[5].childImageSharp.fluid,
      categories: [
        {
          id: '96646db9-06c9-4289-b18b-ad98976d8870',
          name: 'Liquorice',
          slug: 'liquorice',
        },
      ],
    },
    {
      id: 'e03fb245-b1e59-4fb7-82fb-31d8ae5dd09c',
      content: '<p>Pudding bear claw jelly beans chupa chups marzipan</p>',
      image: images[6].childImageSharp.fluid,
      categories: [
        {
          id: 'e302e8d9-20e3-4c5b-8370-3b7aaf6d0e08',
          name: 'Muffin',
          slug: 'muffin',
        },
      ],
    },
    {
      id: 'e03fb245-rb159-4fb7-82fb-31d8ae5dd09c',
      content: '<p>Pudding bear claw jelly beans chupa chups marzipan</p>',
      image: images[7].childImageSharp.fluid,
      categories: [
        {
          id: 'e302e8d9-20e3-4c5b-8370-3b7aaf6d0e08',
          name: 'Muffin',
          slug: 'muffin',
        },
      ],
    },
    {
      id: 'e03fb245-b15t9-4fb7-82fb-31d8ae5dd09c',
      content: '<p>Pudding bear claw jelly beans chupa chups marzipan</p>',
      image: images[8].childImageSharp.fluid,
      categories: [
        {
          id: 'e302e8d9-20e3-4c5b-8370-3b7aaf6d0e08',
          name: 'Muffin',
          slug: 'muffin',
        },
      ],
    },
    {
      id: 'e03fb245-b1y59-4fb7-82fb-31d8ae5dd09c',
      content: '<p>Pudding bear claw jelly beans chupa chups marzipan</p>',
      image: images[9].childImageSharp.fluid,
      categories: [
        {
          id: 'e302e8d9-20e3-4c5b-8370-3b7aaf6d0e08',
          name: 'Muffin',
          slug: 'muffin',
        },
      ],
    },
    {
      id: 'e03fb245-bz159-4fb7-82fb-31d8ae5dd09c',
      content: '<p>Pudding bear claw jelly beans chupa chups marzipan</p>',
      image: images[10].childImageSharp.fluid,
      categories: [
        {
          id: 'e302e8d9-20e3-4c5b-8370-3b7aaf6d0e08',
          name: 'Muffin',
          slug: 'muffin',
        },
      ],
    },
    {
      id: 'e03fb245-bz159-4fb7-82feb-31d8ae5dd09c',
      content: '<p>Pudding bear claw jelly beans chupa chups marzipan</p>',
      image: images[11].childImageSharp.fluid,
      categories: [
        {
          id: 'e302e8d9-20e3-4c5b-8370-3b7aaf6d0e08',
          name: 'Muffin',
          slug: 'muffin',
        },
      ],
    },
    {
      id: 'e03fb245-bz159-4fb7-82feb-31d8a5dd09c',
      content: '<p>Pudding bear claw jelly beans chupa chups marzipan</p>',
      image: images[12].childImageSharp.fluid,
      categories: [
        {
          id: 'e302e8d9-20e3-4c5b-8370-3b7aaf6d0e08',
          name: 'Muffin',
          slug: 'muffin',
        },
      ],
    },
    {
      id: 'e03fb245-bz159-4fb7-82feb-31d81a5dd09c',
      content: '<p>Pudding bear claw jelly beans chupa chups marzipan</p>',
      image: images[13].childImageSharp.fluid,
      categories: [
        {
          id: 'e302e8d9-20e3-4c5b-8370-3b7aaf6d0e08',
          name: 'Muffin',
          slug: 'muffin',
        },
      ],
    },
    {
      id: 'e03fb245-bz959-4fb7-82feb-31d81a5dd09c',
      content: '<p>Pudding bear claw jelly beans chupa chups marzipan</p>',
      image: images[14].childImageSharp.fluid,
      categories: [
        {
          id: 'e302e8d9-20e3-4c5b-8370-3b7aaf6d0e08',
          name: 'Muffin',
          slug: 'muffin',
        },
      ],
    },
    {
      id: 'e03fb245-bz159-4fb7-82feb-31d81a5dd09',
      content: '<p>Pudding bear claw jelly beans chupa chups marzipan</p>',
      image: images[15].childImageSharp.fluid,
      categories: [
        {
          id: 'e302e8d9-20e3-4c5b-8370-3b7aaf6d0e08',
          name: 'Muffin',
          slug: 'muffin',
        },
      ],
    },
  ];
};
