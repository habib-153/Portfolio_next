'use client';
import React, { useState } from "react";
import { Button } from "@nextui-org/button";

import CustomTitle from "@/src/components/modules/dashboard/CustomTitle";
import AddSkillModal from "@/src/components/UI/Modals/AddSkillModal";
import Skills from "@/src/components/modules/home/Skills";

const SkillManagement = () => {
    const [openAddSkillModal, setOpenAddSkillModal] = useState(false);

  return (
    <div>
      <CustomTitle
        description="Monitor your website's key metrics"
        title="Manage Skills"
      />
      <div>
        <div className="w-full text-right">
            <Button className="text-lg font-medium" onPress={() => setOpenAddSkillModal(true)}>Add Skill</Button>
        </div>
        <div className="my-4">
          <Skills />
        </div>
      </div>
      {openAddSkillModal && (
        <AddSkillModal
          isOpen={openAddSkillModal}
          onOpenChange={setOpenAddSkillModal}
        />
      )}
    </div>
  );
};

export default SkillManagement;
