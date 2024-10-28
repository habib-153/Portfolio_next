"use client";
import React, { useState, ChangeEvent } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
  Input,
} from "@nextui-org/react";
import {
  FormProvider,
  useForm,
  SubmitHandler,
  FieldValues,
  Controller,
} from "react-hook-form";
import { Trash2, ImageIcon } from "lucide-react";
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";
import FXInput from "../../form/FXInput";

import { SinglePostCardProps } from "./SingleProject";

import { useUpdateProject } from "@/src/hooks/project.hook";

interface ModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  project: SinglePostCardProps // Replace with appropriate type
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const UpdateProjectModal = ({ isOpen, onOpenChange, project }: ModalProps) => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>(project?.images || []);
  const [content, setContent] = useState(project.description || "");
  const [tag, setTags] = useState<string[]>(project.tags || []);
  const { mutate: updateProject } = useUpdateProject();

  //console.log(project?.githubUrl)
  const methods = useForm<SinglePostCardProps>({
    defaultValues: {
      type: project.type || "",
      title: project.title || "",
      description: project.description || "",
      //githubUrl: project.githubUrl || [],
      githubUrl1: project.githubUrl?.[0] || "",
        githubUrl2: project.githubUrl?.[1] || "",
        githubUrl3: project.githubUrl?.[2] || "",
      liveUrl: project.liveUrl || "",
      tags: project.tags || [],
      incomplete: project.incomplete || false,
      featured: project.featured || false,
      published: project.published
        ? new Date(project.published).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
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

    // Convert date to ISO string
    data.published = new Date(data.published).toISOString();

    const payload = {
      title: data.title,
      type: data.type,
      description: data.description,
      liveUrl: data.liveUrl,
      tags: tag,
      incomplete: data.incomplete,
      featured: data.featured,
      published: data.published,
      githubUrl: [data.githubUrl1, data.githubUrl2, data.githubUrl3],
    };

    formData.append("data", JSON.stringify(payload));

    imageFiles.forEach((file) => {
      formData.append(`Images`, file);
    });

    updateProject({ id: project._id, data: formData });
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
      scrollBehavior="outside"
      size="3xl"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Update Project
            </ModalHeader>
            <ModalBody>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleSubmit)}>
                  <div className="space-y-6">
                    {/* Basic Info Section */}
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <FXInput required label="Project Title" name="title" />
                        <FXInput required label="Project Type" name="type" />
                      </div>
                    </div>
                    <div className="min-h-56">
                      <Controller
                        control={methods.control}
                        name="description"
                        render={({ field }) => (
                          <div className="w-full space-y-3">
                            <label
                              className="font-semibold"
                              htmlFor="description"
                            >
                              Post Description
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

                    <FXInput
                      required
                      label="Live URL"
                      name="liveUrl"
                      type="url"
                    />

                    <FXInput
                      required
                      label="Published Date"
                      name="published"
                      type="date"
                    />

                    <Divider />

                    {/* Image Upload Section */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Project Images</h3>
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
                                  alt={`Project preview ${index + 1}`}
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

                    {/* GitHub URLs Section */}
                    <div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">GitHub URLs</h3>
                        <FXInput label="GitHub Client URL" name="githubUrl1" />
                        <FXInput label="GitHub Server URL" name="githubUrl2" />
                        <FXInput label="GitHub ReadME URL" name="githubUrl3" />
                      </div>
                    </div>
                    <Divider />

                    {/* Tags Section */}
                    <div>
                      <div className="">
                        <h3 className="text-lg font-medium">
                          Technologies Used
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
                                e.target.value.split(",").map((tag) => tag.trim())
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <Divider />

                    {/* Project Status */}
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          {...methods.register("incomplete")}
                          className="rounded border-gray-300"
                        />
                        <span>Incomplete Project</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          {...methods.register("featured")}
                          className="rounded border-gray-300"
                        />
                        <span>Featured Project</span>
                      </label>
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
                Update Project
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default UpdateProjectModal;