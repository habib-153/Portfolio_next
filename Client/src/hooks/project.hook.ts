import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { createProject, deleteProject, getAllProject, getSingleProject, updateProject } from "../services/ProjectService";

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

export const useGetSingleProject = (id: string) => {
  return useQuery({
    queryKey: ["SINGLE_PROJECT", id],
    queryFn: async () => await getSingleProject(id),
    enabled: !!id,
  });
}

export const useUpdateProject = () => {
  return useMutation<any, Error, { id: string; data: FormData }>({
    mutationKey: ["UPDATE_PROJECT"],
    mutationFn: async ({ id, data }) => {
      return toast.promise(updateProject(id, data), {
        loading: "Updating Project...",
        success: `Project updated successfully!`,
        error: "Error when updating the Project.",
      });
    },
  });
};

export const useDeleteProject = () => {
  return useMutation<any, Error, { id: string }>({
    mutationKey: ["DELETE_PROJECT"],
    mutationFn: async ({id}) => {
      return toast.promise(deleteProject(id), {
        loading: "Deleting Project...",
        success: `Project deleted successfully!`,
        error: "Error when deleting the Project.",
      });
    },
  });
};