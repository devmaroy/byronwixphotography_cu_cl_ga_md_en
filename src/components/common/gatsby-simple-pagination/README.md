# Gatsby Simple Pagination

<br>

## Installation

Use these commands to install the dependencies and start the server so you can try and explore.

1. **Clone from Github**

   ```
   $ git clone git@github.com:devmaroy/gatsby-simple-pagination.git
   ```

2. **Copy the folder into your components folder**

3. **Use the pagination where you need like this:**

   ```
   import GatsbySimplePagination from "./gatsby-simple-pagination/gsp"
   ```

   ```
   <GatsbySimplePagination
      totalPages={data.length}
      prefix="blog"
    />
   ```

<br />

## Demo

**[Download example](https://github.com/devmaroy/gatsby-simple-pagination_example/)** which uses gatsby default boilerplate and explore.

<br />

## Props

| Name                    | Type   | Description                                               | Default                  |
| ----------------------- | ------ | --------------------------------------------------------- | ------------------------ |
| totalPages              | Number | **Required**. The total number of pages.                  |
| prefix                  | String | Prefix for the link                                       | blog                     |
| containerClassName      | String | The classname of the pagination container.                | gsp                      |
| listClassName           | String | The classname of the pagination list.                     | gsp-list                 |
| listItemClassName       | String | The classname of the pagination list item.                | gsp-list\_\_item         |
| listLinkClassName       | String | The classname of the pagination list link.                | gsp-list\_\_link         |
| listLinkActiveClassName | String | The classname of the pagination list link - active state. | gsp-list\_\_link--active |
