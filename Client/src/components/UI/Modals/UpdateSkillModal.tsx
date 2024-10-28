import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
  } from "@nextui-org/modal";
  import React, { useRef } from "react";
  import { Button } from "@nextui-org/button";
  import { FieldValues, SubmitHandler } from "react-hook-form";
  import { PressEvent } from "@react-types/shared";
  
  import FXInput from "../../form/FXInput";
  import FXForm from "../../form/FXForm";
  
  import { ISkill } from "@/src/types";
import { useUpdateSkills } from "@/src/hooks/skill.hook";
  
  interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    skill: ISkill;
  }
  
  const UpdateSkillModal = ({ isOpen, onOpenChange, skill }: ModalProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const { mutate: updateSkill } = useUpdateSkills();
  
    const handleUpdateSkill: SubmitHandler<FieldValues> = (data) => {
      const payload = {
        ...data,
      } as ISkill;
  
      updateSkill({
        id: skill?._id,
        data: payload, 
      });
      onOpenChange(false);
    };
  
    const handleSubmit = () => {
      if (formRef.current) {
        formRef.current.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      }
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
        size="3xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose: ((e: PressEvent) => void) | undefined) => (
            <>
              <ModalHeader className="flex flex-col gap-1 items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Update Skill
                </h2>
              </ModalHeader>
              <ModalBody>
                <div className="w-full">
                  <FXForm ref={formRef} defaultValues={skill} onSubmit={handleUpdateSkill}>
                    <div className="py-3">
                      <FXInput label="Skill Name" name="name" type="text" />
                    </div>
                    <div className="py-3">
                      <FXInput label="Skill Logo Link" name="logo" type="text" />
                    </div>
                    <div className="py-3">
                      <FXInput label="Type" name="type" type="text" />
                    </div>
                  </FXForm>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="flex-1"
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button className="flex-1" color="primary" onPress={handleSubmit}>
                  Update Skill
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  };
  
  export default UpdateSkillModal;