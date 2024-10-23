import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { IExperience } from "../types";
import {
  createExperience,
  getAllExperience,
} from "../services/ExperienceService";

export const useCreateExperience = () => {
  return useMutation<any, Error, IExperience>({
    mutationKey: ["CREATE_EXPERIENCE"],
    mutationFn: async (data) => {
      return toast.promise(createExperience(data), {
        loading: "Adding Experience...",
        success: `Experience added successfully!`,
        error: "Error when adding the Experience.",
      });
    },
  });
};

export const useGetAllExperience = () => {
  return useQuery({
    queryKey: ["All_EXPERIENCE"],
    queryFn: async () => await getAllExperience(),
  });
};
