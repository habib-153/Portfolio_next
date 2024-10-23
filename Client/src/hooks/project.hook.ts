import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { createProject, getAllProject } from "../services/ProjectService";

export const useCreateProject = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_PROJECT"],
    mutationFn: async (data) => {
      return toast.promise(createProject(data), {
        loading: "Adding Project...",
        success: `Project added successfully!`,
        error: "Error when adding the Project.",
      });
    },
  });
};

export const useGetAllProject = () => {
  return useQuery({
    queryKey: ["All_PROJECT"],
    queryFn: async () => await getAllProject(),
  });
};
