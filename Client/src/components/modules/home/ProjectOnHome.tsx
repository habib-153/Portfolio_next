"use client";
import React from "react";
import { Spinner } from "@nextui-org/react";

import SinglePostCard, { SinglePostCardProps } from "../project/SingleProject";

import { useGetAllProject } from "@/src/hooks/project.hook";

const ProjectOnHome = () => {
  const { data, isLoading } = useGetAllProject();
  const projectData = data?.data;

  if (isLoading) return <Spinner className="w-full text-center" />;

  return (
    <div className="my-8" id="projects">
      <h1 className="text-4xl font-bold mb-5 text-center">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:grid-cols-3">
        {projectData?.map(
          (project: SinglePostCardProps) =>
            project.featured && (
              <SinglePostCard key={project._id} project={project} />
            )
        )}
      </div>
    </div>
  );
};

export default ProjectOnHome;
