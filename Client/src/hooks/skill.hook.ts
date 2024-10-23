import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { createSkill, getSkills } from "../services/SkillService";
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
        queryKey: ['All_SKILLS'],
        queryFn: async () => await getSkills()
    })
}