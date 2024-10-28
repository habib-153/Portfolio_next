import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Edit, Github, Globe, MoreVertical, Trash } from "lucide-react";
import parse from "html-react-parser";
import Swal from "sweetalert2";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import ProjectDetailsModal from "./ProjectDetailsModal.";
import UpdateProjectModal from "./UpdateProjectModal";

import { useUser } from "@/src/context/user.provider";
import { useDeleteProject } from "@/src/hooks/project.hook";

export interface SinglePostCardProps {
  _id: string;
  type: string;
  title: string;
  description: string;
  images: string[];
  incomplete: boolean;
  featured: boolean;
  tags: string[];
  published: string;
  githubUrl?: string[];
  githubUrl1?: string;
  githubUrl2?: string;
  githubUrl3?: string;
  liveUrl?: string;
}

const SinglePostCard = ({ project }: { project: SinglePostCardProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { user } = useUser();
  const isAdmin = user?.role === "ADMIN";
  const { mutate: deleteProject } = useDeleteProject();

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

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
        deleteProject({ id: Id });
      }
    });
  };

  return (
    <>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <Card
          isPressable
          className="w-full bg-content1 hover:shadow-lg transition-shadow"
          onPress={handleCardClick}
        >
          <CardHeader className="flex gap-3 p-4">
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-foreground">
                {project.title}
              </h3>
              <p className="text-small text-default-500">
                {new Date(project.published).toLocaleDateString()}
              </p>
            </div>
            {project.featured && (
              <Chip className="bg-warning-100 text-warning-800" size="sm">
                Featured
              </Chip>
            )}
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
                      handleDelete(project?._id as string);
                    }}
                  >
                    Delete post
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </CardHeader>

          {project.images?.length > 0 && (
            <div
              className="relative w-full h-64 overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence>
                <motion.div
                  animate={
                    isHovered
                      ? {
                          y: [0, "-70%"],
                          transition: {
                            y: {
                              duration: 8,
                              ease: "linear",
                            },
                          },
                        }
                      : {
                          y: 0,
                          transition: {
                            duration: 0.5,
                            ease: "easeOut",
                          },
                        }
                  }
                  className="w-full absolute top-0 left-0"
                  initial={{ y: 0 }}
                >
                  <img
                    alt={project.title}
                    className="w-full object-contain"
                    src={project.images[1]}
                    style={{
                      minHeight: "170%",
                      maxHeight: "1000px",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-background/50 via-background/30 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background/50 via-background/30 to-transparent pointer-events-none" />

              <div
                className={`absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
              >
                <div className="px-3 py-1 rounded-full bg-background/80 text-tiny">
                  Hover to scroll
                </div>
              </div>
            </div>
          )}

          <CardBody className="px-4 py-3 text-default-700">
            <div className="line-clamp-3">{parse(project.description)}</div>
          </CardBody>

          <CardFooter className="flex flex-col gap-3 px-4 pb-4">
            <div className="flex flex-wrap gap-2">
              {project.incomplete && (
                <Chip color="danger" size="sm">
                  Incomplete
                </Chip>
              )}
              {project.tags?.slice(0, 3).map((tag, index) => (
                <Chip
                  key={index}
                  className="bg-primary-100 text-primary-800"
                  size="sm"
                >
                  {tag}
                </Chip>
              ))}
              {project.tags?.length > 3 && (
                <Chip className="bg-default-100 text-default-800" size="sm">
                  +{project.tags.length - 3}
                </Chip>
              )}
            </div>

            <div className="flex gap-3 mt-2">
              {project.githubUrl?.[0] && (
                <Button
                  as={Link}
                  href={project.githubUrl[0]}
                  size="sm"
                  startContent={<Github size={16} />}
                  target="_blank"
                  variant="flat"
                  onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking GitHub button
                >
                  GitHub
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  as={Link}
                  href={project.liveUrl}
                  size="sm"
                  startContent={<Globe size={16} />}
                  target="_blank"
                  variant="flat"
                  onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking Live Demo button
                >
                  Live Demo
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Project Modal */}
      <ProjectDetailsModal
        isOpen={isModalOpen}
        project={project}
        onClose={() => setIsModalOpen(false)}
      />
      {
        <UpdateProjectModal
          isOpen={openEditModal}
          project={project}
          onOpenChange={setOpenEditModal}
        />
      }
    </>
  );
};

export default SinglePostCard;