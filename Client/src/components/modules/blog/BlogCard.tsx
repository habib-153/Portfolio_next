import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import Swal from "sweetalert2";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Edit, MoreVertical, Trash } from "lucide-react";
import { useState } from "react";

import UpdateBlogModal from "./UpdateBlogModal";

import { IBlog } from "@/src/types";
import { useDeleteBlog } from "@/src/hooks/blog.hook";
import { useUser } from "@/src/context/user.provider";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  const date = new Date(blog?.createdAt);
  const formattedDate = format(date, "MMM dd");
  const year = format(date, "yyyy");
  const [openEditModal, setOpenEditModal] = useState(false);


  const { user } = useUser();
  const isAdmin = user?.role === "ADMIN";
  const { mutate: deleteBlog } = useDeleteBlog();

  const handleDelete = (Id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        deleteBlog({ id: Id });
      }
    });
  };

  return (
    <Card className="w-full relative bg-background/60 dark:bg-default-100/50 backdrop-blur-lg">
      <div className="grid grid-cols-12 md:gap-6">
        {/* Date Display */}
        <div className="relative col-span-12 md:col-span-4 min-h-[200px]">
          <Image
            alt={blog.title}
            className="object-contain w-full h-full"
            height={200}
            src={blog.images[0]}
            width={200}
          />
          <div className="absolute top-0 left-0 rounded-br-large dark:bg-default-100 p-2 flex flex-row  items-center justify-between w-[calc(100%-50px)] md:w-full">
            <span className="text-lg font-semibold">{formattedDate}</span>
            <span className="text-lg font-semibold">{year}</span>
          </div>
        </div>

        {/* Content */}
        <div className="col-span-12 md:col-span-8 p-4">
          <CardHeader className="flex-col items-start px-0 pb-0">
            <h1 className="text-xl font-bold mb-2">{blog.title}</h1>
            <div className="flex gap-2 flex-wrap mb-4">
              {blog.category.map((tag: string, index: number) => (
                <Chip key={index} color="primary" size="sm" variant="flat">
                  {tag.replace("#", "")}
                </Chip>
              ))}
            </div>
          </CardHeader>

          <CardBody className="px-0 py-2">
            <div className="text-default-600 line-clamp-3">
              {blog.description.replace(/<[^>]*>/g, "")}
            </div>
            <Link href={`/blog/${blog._id}`}>
              <Button className="mt-4" color="primary" size="sm" variant="flat">
                Read more
              </Button>
            </Link>
          </CardBody>
        </div>
        <div className="absolute top-0 right-1">
        {isAdmin && (
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    isIconOnly
                    variant="light"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Post actions">
                  <DropdownItem
                    key="edit"
                    startContent={<Edit className="w-4 h-4" />}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenEditModal(true);
                    }}
                  >
                    Edit post
                  </DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    startContent={<Trash className="w-4 h-4" />}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(blog?._id as string);
                    }}
                  >
                    Delete post
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
        </div>
      </div>
      {
        <UpdateBlogModal
          blog={blog}
          isOpen={openEditModal}
          onOpenChange={setOpenEditModal}
        />
      }
    </Card>
  );
};

export default BlogCard;
