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
          id: 'cbf7b2bd-d10e-4089-9d2d-34dcce8c54a7',
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
          id: '3a8b94c1-6749-49d5-97f5-23d3a831f27d',
          name: 'Cupcakes',
          slug: 'cupcakes',
        },
        {
          id: 'c463b089-7a43-4658-b793-020a242681b6',
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
          id: '',
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
          id: '20ae4ec1-e32f-4632-8e1d-693d2ffe98d7',
          name: 'Sesame',
          slug: 'sesame',
        },
        {
          id: '6e216705-58bb-4335-aed6-d3472d464ea8',
          name: 'Bear',
          slug: 'bear',
        },
        {
          id: 'a6226b23-1b6a-42b6-a8d6-bd760cb98323',
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
          id: '35e997ff-3226-41d3-96d9-29155b529f5a',
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
          id: 'c6ddb933-6e0b-4e16-8af7-39f4254170af',
          name: 'Liquorice',
          slug: 'liquorice',
        },
      ],
    },
    {
      id: 'e03fb245-b1e59-4fb7-82fb-31d8ae5dd09c',
      content: '<p>Chocolate cake sesame snaps dragée danish bear</p>',
      image: images[6].childImageSharp.fluid,
      categories: [
        {
          id: '1742dc2f-d0b5-43a3-bee5-187bd6057760',
          name: 'Bear',
          slug: 'bear',
        },
        {
          id: 'e67f536c-d870-4d59-a39f-4104369c6555',
          name: 'Cupcakes',
          slug: 'cupcakes',
        },
      ],
    },
    {
      id: 'e03fb245-rb159-4fb7-82fb-31d8ae5dd09c',
      content: '<p>Biscuit marshmallow gummi bears soufflé bonbon</p>',
      image: images[7].childImageSharp.fluid,
      categories: [
        {
          id: 'b8a17910-ab53-45f5-9014-bf1b9f2e9342',
          name: 'Muffin',
          slug: 'muffin',
        },
        {
          id: '220c4696-db38-43fe-94b4-8138625ccfcf',
          name: 'Bear',
          slug: 'bear',
        },
      ],
    },
    {
      id: 'e03fb245-b15t9-4fb7-82fb-31d8ae5dd09c',
      content: '<p>Gummies danish gingerbread tart jujubes tart halvah</p>',
      image: images[8].childImageSharp.fluid,
      categories: [
        {
          id: '709e42f7-e06a-4908-8528-0f5c73b2d014',
          name: 'Tarts',
          slug: 'tarts',
        },
      ],
    },
    {
      id: 'e03fb245-b1y59-4fb7-82fb-31d8ae5dd09c',
      content: '<p>Powder croissant chocolate bar liquorice marzipan</p>',
      image: images[9].childImageSharp.fluid,
      categories: [
        {
          id: '11c0a3cb-d6e0-4153-bdec-8de4a83519ff',
          name: 'Liquorice',
          slug: 'liquorice',
        },
      ],
    },
    {
      id: 'e03fb245-bz159-4fb7-82fb-31d8ae5dd09c',
      content: '<p>Toffee cotton candy cupcake lemon drops</p>',
      image: images[10].childImageSharp.fluid,
      categories: [
        {
          id: 'aae6e211-4063-4154-a01d-85d643530c79',
          name: 'Bear',
          slug: 'bear',
        },
        {
          id: '9e05efcf-7902-4de7-a32b-95b98b53cbeb',
          name: 'Sesame',
          slug: 'sesame',
        },
      ],
    },
    {
      id: 'e03fb245-bz159-4fb7-82feb-31d8ae5dd09c',
      content: '<p>Marzipan gummies pie soufflé biscuit</p>',
      image: images[11].childImageSharp.fluid,
      categories: [
        {
          id: '6c183693-8b38-4797-9d57-21300659dbec',
          name: 'Cupcakes',
          slug: 'cupcakes',
        },
      ],
    },
    {
      id: 'e03fb245-bz159-4fb7-82feb-31d8a5dd09c',
      content: '<p>Chocolate cake toffee chocolate macaroon</p>',
      image: images[12].childImageSharp.fluid,
      categories: [
        {
          id: 'bcf708e3-c8f3-417e-8c47-27136c8293c0',
          name: 'Sesame',
          slug: 'sesame',
        },
        {
          id: 'fd7aeddd-586c-4dc3-9e1e-406ef41a3aff',
          name: 'Bear',
          slug: 'bear',
        },
      ],
    },
    {
      id: 'e03fb245-bz159-4fb7-82feb-31d81a5dd09c',
      content: '<p>Sweet brownie candy canes bear claw sesame snaps</p>',
      image: images[13].childImageSharp.fluid,
      categories: [
        {
          id: '8da78710-333e-490b-a185-c1fbf2a21372',
          name: 'Muffin',
          slug: 'muffin',
        },
      ],
    },
    {
      id: 'e03fb245-bz959-4fb7-82feb-31d81a5dd09c',
      content: '<p>Fruitcake macaroon danish liquorice cheesecake macaroon</p>',
      image: images[14].childImageSharp.fluid,
      categories: [
        {
          id: '0ee629a6-9f40-49a1-8554-f08ef0a91019',
          name: 'Liquorice',
          slug: 'liquorice',
        },
      ],
    },
    {
      id: 'e03fb245-bz159-4fb7-82feb-31d81a5dd09',
      content: '<p>Apple pie gingerbread powder sesame snaps</p>',
      image: images[15].childImageSharp.fluid,
      categories: [
        {
          id: '9e00a2fb-2e5c-4547-a2ee-3dc38db6ab98',
          name: 'Bonbon pie',
          slug: 'bonbon-pie',
        },
      ],
    },
    {
      id: 'b420c39e-79a7-405a-a6d3-f93b941f3957',
      content: '<p>Gummies sesame snaps jelly tiramisu apple</p>',
      image: images[16].childImageSharp.fluid,
      categories: [
        {
          id: 'f2402b62-c566-45f5-9775-ef11bd4562f4',
          name: 'Sesame',
          slug: 'sesame',
        },
      ],
    },
  ];
};
