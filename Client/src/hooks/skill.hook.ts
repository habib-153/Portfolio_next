import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  createSkill,
  deleteSkill,
  getSkills,
  updateSkill,
} from "../services/SkillService";
import { ISkill } from "../types";

export const useCreateSkill = () => {
  return useMutation<any, Error, ISkill>({
    mutationKey: ["CREATE_SKILL"],
    mutationFn: async (payload) => {
      return toast.promise(createSkill(payload), {
        loading: "Adding Skill...",
        success: `Skill added successfully!`,
        error: "Error when adding the Skill.",
      });
    },
  });
};

export const useGetAllSkills = () => {
  return useQuery({
    queryKey: ["All_SKILLS"],
    queryFn: async () => await getSkills(),
  });
};

export const useUpdateSkills = () => {
  return useMutation<any, Error, { id: string; data: ISkill }>({
    mutationKey: ["UPDATE_SKILLS"],
    mutationFn: async ({ id, data }) => {
      return toast.promise(updateSkill(id, data), {
        loading: "Updating Skills...",
        success: `Skills updated successfully!`,
        error: "Error when updating the Skills.",
      });
    },
  });
};

export const useDeleteSkills = () => {
  return useMutation<any, Error, { id: string }>({
    mutationKey: ["DELETE_SKILLS"],
    mutationFn: async ({ id }) => {
      return toast.promise(deleteSkill(id), {
        loading: "Deleting Skills...",
        success: `Skills deleted successfully!`,
        error: "Error when deleting the Skills.",
      });
    },
  });
};