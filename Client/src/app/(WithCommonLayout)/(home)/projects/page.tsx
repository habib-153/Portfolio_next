import { Divider } from "@nextui-org/divider";
import { LayoutDashboard } from "lucide-react";
import React from "react";

import ProjectCards from "@/src/components/modules/project/ProjectCards";

const ProjectPage = () => {
  return (
    <div className="">
      <h2 className="text-3xl mb-4 font-semibold justify-center flex items-center gap-2">
        Projects <LayoutDashboard />
      </h2>
      <Divider />
      <ProjectCards />
    </div>
  );
};

export default ProjectPage;
