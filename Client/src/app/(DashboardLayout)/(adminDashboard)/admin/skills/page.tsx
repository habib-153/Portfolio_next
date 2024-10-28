"use client";
import React, { useCallback, useState } from "react";
import { Button } from "@nextui-org/button";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";
import { User } from "@nextui-org/user";
import { Tooltip } from "@nextui-org/tooltip";
import { Edit2, Trash2 } from "lucide-react";
import { Spinner } from "@nextui-org/react";
import Swal from "sweetalert2";

import CustomTitle from "@/src/components/modules/dashboard/CustomTitle";
import AddSkillModal from "@/src/components/UI/Modals/AddSkillModal";
import { ISkill } from "@/src/types";
import { useDeleteSkills, useGetAllSkills } from "@/src/hooks/skill.hook";
import UpdateSkillModal from "@/src/components/UI/Modals/UpdateSkillModal";

const SkillManagement = () => {
  const [openAddSkillModal, setOpenAddSkillModal] = useState(false);
  const [openUpdateSkillModal, setOpenUpdateSkillModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<ISkill | null>(null);

  const { data } = useGetAllSkills();
  const { mutate: deleteSkill } = useDeleteSkills();

  const skills = data?.data 
  
  const columns = [
    { name: "LOGO", uid: "logo" },
    { name: "NAME", uid: "name" },
    { name: "TYPE", uid: "type" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const handleUpdate = (skill : ISkill ) => {
    setSelectedSkill(skill);
    setOpenUpdateSkillModal(true);
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
        deleteSkill({ id: Id });
      }
    });
  };


  const renderCell = useCallback(
    (skill: ISkill, columnKey: React.Key) => {
      const cellValue = skill[columnKey as keyof ISkill];

      switch (columnKey) {
        case "logo":
          return (
            <User
              avatarProps={{ radius: "lg", src: skill.logo }}
              className=" text-xl"
              name=''
            />
          );
        case "name":
          return (
            <div className="flex flex-col">
              <p className=" text-sm">{String(cellValue)}</p>
            </div>
          );
        case "type":
          return (
            <div className="flex flex-col">
              <p className=" text-sm capitalize">{String(cellValue)}</p>
            </div>
          );
        case "actions":
          return (
            <div className="relative flex justify-center items-center gap-2">
              <Tooltip content={<span>Delete Skill</span>}>
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onPress={() => handleDelete(skill?._id)}
                >
                  <Trash2 className="h-4 w-4 text-danger" />
                </Button>
              </Tooltip>

              <Tooltip content={<span>Update Skill</span>}>
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onPress={() => handleUpdate(skill)}
                >
                  <Edit2 className="h-4 w-4 text-primary" />
                </Button>
              </Tooltip>
            </div>
          );

        default:
          return <span>{String(cellValue)}</span>;
      }
    },
    []
  );

  return (
    <div>
      <CustomTitle
        description="Monitor your website's key metrics"
        title="Manage Skills"
      />
      <div>
        <div className="w-full text-right">
          <Button
            className="text-lg font-medium"
            onPress={() => setOpenAddSkillModal(true)}
          >
            Add Skill
          </Button>
        </div>
        <div className="my-4">
        <div className="overflow-x-auto">
          {skills?.length > 0 ? (
            <Table
              aria-label="Skills table with custom cells"
              className="min-w-full"
            >
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn
                    key={column.uid}
                    align={
                      // column.uid === "logo" ||
                       column.uid === "name"
                        ? "start"
                        : "center"
                    }
                  >
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={skills}>
                {(item: ISkill) => (
                  <TableRow key={item._id}>
                    {(columnKey) => (
                      <TableCell key={columnKey}>
                        {renderCell(item, columnKey)}
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          ) : (
            <Table aria-label="Example empty table">
              <TableHeader>
                <TableColumn>LOGO</TableColumn>
                <TableColumn>NAME</TableColumn>
                <TableColumn>TYPE</TableColumn>
                <TableColumn>ACTION</TableColumn>
              </TableHeader>
              <TableBody emptyContent={<Spinner />}>{[]}</TableBody>
            </Table>
          )}
          </div>
        </div>
      </div>
      {openAddSkillModal && (
        <AddSkillModal
          isOpen={openAddSkillModal}
          onOpenChange={setOpenAddSkillModal}
        />
      )}
      {openUpdateSkillModal && selectedSkill && (
        <UpdateSkillModal
          isOpen={openUpdateSkillModal}
          skill={selectedSkill}
          onOpenChange={setOpenUpdateSkillModal}
        />
      )}
    </div>
  );
};

export default SkillManagement;