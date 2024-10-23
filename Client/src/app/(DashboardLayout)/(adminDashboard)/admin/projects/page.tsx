'use client';
import React, { useState } from "react";
import { Button } from "@nextui-org/button";

import CustomTitle from "@/src/components/modules/dashboard/CustomTitle";
import ProjectModal from "@/src/components/UI/Modals/AddProjectModal";

const ProjectManagement = () => {
    const [openAddProjectModal, setOpenAddProjectModal] = useState(false);

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
