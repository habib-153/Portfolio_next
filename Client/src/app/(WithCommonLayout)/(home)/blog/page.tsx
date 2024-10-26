"use client";
import { Divider } from "@nextui-org/divider";
import React from "react";

import { useGetAllBlog } from "@/src/hooks/blog.hook";
import BlogCard from "@/src/components/modules/blog/BlogCard";
import { IBlog } from "@/src/types";
import BlogCardSkeleton from "@/src/components/modules/blog/BlogCardSkeleton";

const BlogPage = () => {
  const { data, isLoading } = useGetAllBlog();

  const blogs = data?.data;

  return (
    <div className="max-w-screen-md mx-auto">
      <h2 className="text-4xl mb-4 font-semibold text-center">Blogs 📑</h2>
      <Divider />
      <div className="my-4">
        {isLoading
          ? [...Array(3)].map((_, index) => <BlogCardSkeleton key={index} />)
          : blogs.map((blog: IBlog) => <BlogCard key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
};

export default BlogPage;
