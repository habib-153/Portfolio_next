'use client';
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/react";

import CustomTitle from "@/src/components/modules/dashboard/CustomTitle";
import ProjectModal from "@/src/components/UI/Modals/AddProjectModal";
import { useGetAllProject } from "@/src/hooks/project.hook";
import SinglePostCard, { SinglePostCardProps } from "@/src/components/modules/project/SingleProject";

const ProjectManagement = () => {
    const [openAddProjectModal, setOpenAddProjectModal] = useState(false);
    const { data, isLoading } = useGetAllProject();
    const projectData = data?.data;
  
    if (isLoading) return <Spinner className="w-full text-center" />;

  return (
    <div>
      <CustomTitle
        description="Monitor your website's key metrics"
        title="Manage Projects"
      />
      <div>
        <div className="w-full text-right">
            <Button className="text-lg font-medium" onPress={() => setOpenAddProjectModal(true)}>Add Project</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 mt-3 lg:grid-cols-3">
        {projectData?.map(
          (project: SinglePostCardProps) =>
            project.featured && (
              <SinglePostCard key={project._id} project={project} />
            )
        )}
      </div>
      </div>
      {openAddProjectModal && (
        <ProjectModal
          isOpen={openAddProjectModal}
          onOpenChange={setOpenAddProjectModal}
        />
      )}
    </div>
  );
};

export default ProjectManagement;
