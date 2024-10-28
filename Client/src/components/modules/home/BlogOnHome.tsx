'use client';
import React from 'react';

import BlogCardSkeleton from '../blog/BlogCardSkeleton';
import BlogCard from '../blog/BlogCard';

import { useGetAllBlog } from '@/src/hooks/blog.hook';
import { IBlog } from '@/src/types';

const BlogOnHome = () => {
    const { data, isLoading } = useGetAllBlog();

    const blogs = data?.data;

    return (
        <div className="my-8" id="blogOnHome">
            <h1 className="text-4xl font-bold mb-5 text-center">Featured Blogs 📑</h1>
            <div className="grid grid-cols-1 gap-4 px-4">
                {isLoading
                    ? [...Array(2)].map((_, index) => <BlogCardSkeleton key={index} />)
                    : blogs.slice(0, 3).map((blog: IBlog) => <BlogCard key={blog._id} blog={blog} />)}
            </div>
        </div>
    );
};

export default BlogOnHome;