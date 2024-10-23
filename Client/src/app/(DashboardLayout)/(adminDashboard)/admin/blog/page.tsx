'use client';
import React, { useState } from "react";
import { Button } from "@nextui-org/button";

import CustomTitle from "@/src/components/modules/dashboard/CustomTitle";
import AddBlogModal from "@/src/components/UI/Modals/AddBlogModal";

const BlogManagement = () => {
    const [openAddBlogModal, setOpenAddBlogModal] = useState(false);

  return (
    <div>
      <CustomTitle
        description="Monitor your website's key metrics"
        title="Manage Blogs"
      />
      <div>
        <div className="w-full text-right">
            <Button className="text-lg font-medium" onPress={() => setOpenAddBlogModal(true)}>Add Blog</Button>
        </div>
      </div>
      {openAddBlogModal && (
        <AddBlogModal
          isOpen={openAddBlogModal}
          onOpenChange={setOpenAddBlogModal}
        />
      )}
    </div>
  );
};

export default BlogManagement;
