import React from 'react';
import BlogSidebarAuthor from './blogSidebarAuthor';
import BlogSidebarCategories from './blogSidebarCategories';
import BlogSidebarSearch from './blogSidebarSearch';
import BlogSidebarRecentPosts from './blogSidebarRecentPosts';

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">
      <BlogSidebarAuthor />
      <BlogSidebarCategories />
      <BlogSidebarSearch />
      <BlogSidebarRecentPosts />
    </div>
  );
};

export default BlogSidebar;
