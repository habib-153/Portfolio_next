"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";

import CustomTitle from "@/src/components/modules/dashboard/CustomTitle";
import AddBlogModal from "@/src/components/UI/Modals/AddBlogModal";
import { useGetAllBlog } from "@/src/hooks/blog.hook";
import BlogCardSkeleton from "@/src/components/modules/blog/BlogCardSkeleton";
import { IBlog } from "@/src/types";
import BlogCard from "@/src/components/modules/blog/BlogCard";

const BlogManagement = () => {
  const [openAddBlogModal, setOpenAddBlogModal] = useState(false);
  const { data, isLoading } = useGetAllBlog();

  const blogs = data?.data;

  return (
    <div>
      <CustomTitle
        description="Monitor your website's key metrics"
        title="Manage Blogs"
      />
      <div>
        <div className="w-full text-right">
          <Button
            className="text-lg font-medium"
            onPress={() => setOpenAddBlogModal(true)}
          >
            Add Blog
          </Button>
        </div>
        <div className="my-4">
          {isLoading
            ? [...Array(3)].map((_, index) => <BlogCardSkeleton key={index} />)
            : blogs.map((blog: IBlog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
        </div>
      </div>
      {openAddBlogModal && (
        <AddBlogModal
          isOpen={openAddBlogModal}
          onOpenChange={setOpenAddBlogModal}
        />
      )}
    </div>
  );
};

export default BlogManagement;
