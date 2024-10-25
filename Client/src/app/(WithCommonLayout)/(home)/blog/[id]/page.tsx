"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import parse from "html-react-parser";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Bookmark, ChevronLeft, ChevronRight, Share2, X } from "lucide-react";
import Image from "next/image";
import { Spinner } from "@nextui-org/react";
import { format } from "date-fns";

import { useGetSingleBlog } from "@/src/hooks/blog.hook";

const BlogDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleBlog(id as string);

  const blog = data?.data;

  const date = new Date(blog?.createdAt);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if(isLoading) return <Spinner />
  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === blog.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? blog.images.length - 1 : prev - 1
    );
  };

  const ImageGallery = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
      {/* Main featured image */}
      <div
        className={`relative h-[500px] rounded-xl overflow-hidden ${
          blog.images.length === 1 ? "md:col-span-2" : ""
        }`}
      >
        <Image
          fill
          alt={`${blog.title} - Image 1`}
          className="object-cover cursor-pointer hover:opacity-95 transition-opacity"
          sizes="(max-width: 768px) 100vw, 50vw"
          src={blog.images[0]}
          onClick={() => setShowGallery(true)}
        />
      </div>

      {/* Additional images grid */}
      {blog.images.length > 1 && (
        <div className="grid grid-cols-2 gap-4">
          {blog.images.slice(1, 5).map((image: string, index: number) => (
            <div
              key={index}
              className="relative h-[240px] rounded-xl overflow-hidden"
            >
              <Image
                fill
                alt={`${blog.title} - Image ${index + 2}`}
                className="object-cover cursor-pointer hover:opacity-95 transition-opacity"
                sizes="(max-width: 768px) 50vw, 25vw"
                src={image}
                onClick={() => {
                  setCurrentImageIndex(index + 1);
                  setShowGallery(true);
                }}
              />
              {index === 3 && blog.images.length > 5 && (
                <div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => setShowGallery(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setShowGallery(true);
                    }
                  }}
                >
                  <span className="text-white text-xl font-bold">
                    +{blog.images.length - 5} more
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const FullScreenGallery = () => (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors" style={{zIndex: 60}}
          title="Close"
          onClick={() => setShowGallery(false)}
        >
          <X size={24} />
        </button>
  
        {/* Navigation buttons */}
        <button
          className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-60" style={{zIndex: 60}}
          title="Previous Image"
          onClick={handlePrevImage}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-60" style={{zIndex: 60}}
          title="Next Image"
          onClick={handleNextImage}
        >
          <ChevronRight size={24} />
        </button>
  
        {/* Current image */}
        <div className="relative w-full h-full p-12 flex items-center justify-center">
          <Image
            fill
            alt={`${blog.title} - Image ${currentImageIndex + 1}`}
            className="object-contain"
            sizes="100vw"
            src={blog.images[currentImageIndex]}
          />
        </div>
  
        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 ">
          {currentImageIndex + 1} / {blog.images.length}
        </div>
      </div>
    </div>
  );

  return (
    <Card className="max-w-4xl mx-auto bg-background/60 dark:bg-background/80 p-6">
      <CardBody>
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-small text-default-500 mb-4">
            <time dateTime={blog?.createdAt}>
              {format(date, "MMMM d, yyyy")}
            </time>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <h1 className="text-4xl font-bold mb-6">{blog?.title}</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {blog?.category?.map((tag: string, index: string) => (
              <Chip
                key={index}
                color="primary"
                radius="full"
                size="sm"
                variant="flat"
              >
                {tag.replace("#", "")}
              </Chip>
            ))}
          </div>
        </div>

        {/* Image Gallery Component would go here */}
        <ImageGallery />

        {/* Full Screen Gallery Modal would go here */}
        {showGallery && <FullScreenGallery />}

        {/* Article Content */}
        <div>{parse(blog?.description)}</div>
      </CardBody>

      <Divider className="my-6" />

      <CardFooter>
        <div className="w-full flex justify-between items-center">
          {/* Share and Bookmark Buttons */}
          <div className="flex gap-2">
            <Button isIconOnly aria-label="Share" size="sm" variant="light">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button isIconOnly aria-label="Bookmark" size="sm" variant="light">
              <Bookmark className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation Buttons
          <div className="flex gap-2">
            <Button
              size="sm"
              startContent={<ChevronLeft className="w-4 h-4" />}
              variant="flat"
            >
              Previous
            </Button>
            <Button
              endContent={<ChevronRight className="w-4 h-4" />}
              size="sm"
              variant="flat"
            >
              Next
            </Button>
          </div> */}
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogDetails;