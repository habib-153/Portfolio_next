import React, { ChangeEvent, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Controller, FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { ImageIcon, Trash2 } from "lucide-react";
import { Input } from "@nextui-org/input";

import FXInput from "../../form/FXInput";

import { useUpdateBlog } from "@/src/hooks/blog.hook";
import { IBlog } from "@/src/types";

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    blog: IBlog
  }
  
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  
  interface FormValues {
    title: string;
    description: string;
    category: string[];
  }
  
  const UpdateBlogModal = ({ isOpen, onOpenChange, blog }: ModalProps) => {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreviews, setImagePreviews] = useState<string[] | []>(blog.images || []);
    const [content, setContent] = useState(blog.description || "");
    const [tag, setTags] = useState<string[]>(blog.category || []);
    const { mutate: updateBlog } = useUpdateBlog();
  
    const methods = useForm<FormValues>({
      defaultValues: {
        title: blog.title || "",
        description: blog.description || "",
        category: blog.category || [],
      },
    });
  
    const quillModules = {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        ["clean"],
      ],
    };
  
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
  
      if (files) {
        const newFiles = Array.from(files);
  
        setImageFiles((prev) => [...prev, ...newFiles]);
  
        newFiles.forEach((file) => {
          const reader = new FileReader();
  
          reader.onloadend = () => {
            setImagePreviews((prev) => [...prev, reader.result as string]);
          };
          reader.readAsDataURL(file);
        });
      }
    };
  
    const removeImage = (index: number) => {
      setImageFiles((prev) => prev.filter((_, i) => i !== index));
      setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    };
  
    const handleSubmit: SubmitHandler<FieldValues> = (data) => {
      const formData = new FormData();
  
      const payload = {
        title: data.title,
        description: data.description,
        category: tag,
        isDeleted: false,
      };
  
      formData.append("data", JSON.stringify(payload));
  
      imageFiles.forEach((file) => {
        formData.append(`Images`, file);
      });
  
      updateBlog({ id: blog._id, data: formData });
      onOpenChange(false);
    };
  
    return (
      <Modal
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-white dark:bg-[#19172c]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
        }}
        isOpen={isOpen}
        scrollBehavior="inside"
        size="3xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update Blog
              </ModalHeader>
              <ModalBody>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(handleSubmit)}>
                    <div className="space-y-6">
                      {/* Basic Info Section */}
                      <div className="space-y-4">
                        <FXInput required label="Blog Title" name="title" />
                      </div>
                      <div className="min-h-60">
                        <Controller
                          control={methods.control}
                          name="description"
                          render={({ field }) => (
                            <div className="w-full space-y-3">
                              <label
                                className="font-semibold"
                                htmlFor="description"
                              >
                                Blog Description
                              </label>
                              <ReactQuill
                                {...field}
                                className="h-[110px]"
                                modules={quillModules}
                                value={content}
                                onChange={(value) => {
                                  setContent(value);
                                  field.onChange(value);
                                }}
                              />
                            </div>
                          )}
                          rules={{
                            required: "Please provide post description",
                          }}
                        />
                      </div>
                      <Divider />
                      {/* Image Upload Section */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium">Images</h3>
                          <label className="cursor-pointer">
                            <Button
                              as="span"
                              startContent={<ImageIcon size={20} />}
                            >
                              Upload Images
                            </Button>
                            <input
                              multiple
                              accept="image/*"
                              className="hidden"
                              type="file"
                              onChange={handleImageChange}
                            />
                          </label>
                        </div>
  
                        {imagePreviews.length > 0 && (
                          <div className="flex flex-wrap gap-4">
                            {imagePreviews.map((preview, index) => (
                              <div key={index} className="relative group">
                                <div className="relative size-48 rounded-xl border-2 border-dashed border-default-300 p-2">
                                  <img
                                    alt={`Blog preview ${index + 1}`}
                                    className="h-full w-full object-cover object-center rounded-md"
                                    src={preview}
                                  />
                                  <Button
                                    isIconOnly
                                    className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                    color="danger"
                                    size="sm"
                                    variant="flat"
                                    onClick={() => removeImage(index)}
                                  >
                                    <Trash2 size={16} />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
  
                      <Divider />
                      {/* Tags Section */}
                      <div>
                        <div className="">
                          <h3 className="text-lg font-medium">
                            Categories/ Tags
                          </h3>
                          <div className="mb-4 items-center space-x-3">
                            <Input
                              required
                              className="flex-grow"
                              defaultValue={tag.join(", ")}
                              label="Add technology(Add Comma(,) after each tag)"
                              size="sm"
                              type="text"
                              variant="bordered"
                              onChange={(e) =>
                                setTags(
                                  e.target.value
                                    .split(",")
                                    .map((tag) => tag.trim())
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </FormProvider>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onClick={methods.handleSubmit(handleSubmit)}
                >
                  Update Blog
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  };
  
  export default UpdateBlogModal;