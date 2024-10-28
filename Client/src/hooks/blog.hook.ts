import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { createBlog, deleteBlog, getAllBlogs, getSingleBlog, updateBlog } from "../services/BlogService";

export const useCreateBlog = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_BLOG"],
    mutationFn: async (data) => {
      return toast.promise(createBlog(data), {
        loading: "Adding Blog...",
        success: `Blog added successfully!`,
        error: "Error when adding the Blog.",
      });
    },
  });
};

export const useGetAllBlog = () => {
  return useQuery({
    queryKey: ["All_BLOG"],
    queryFn: async () => await getAllBlogs(),
  });
};

export const useGetSingleBlog = (id: string) => {
  return useQuery({
    queryKey: ["singleBlog", id],
    queryFn: async () => await getSingleBlog(id),
    enabled: !!id, 
    // refetchInterval: 1500,
  });
};

export const useUpdateBlog = () => {
  return useMutation<any, Error, { id: string; data: FormData }>({
    mutationKey: ["UPDATE_BLOG"],
    mutationFn: async ({ id, data }) => {
      return toast.promise(updateBlog(id, data), {
        loading: "Updating Blog...",
        success: `Blog updated successfully!`,
        error: "Error when updating the Blog.",
      });
    },
  });
};

export const useDeleteBlog = () => {
  return useMutation<any, Error, { id: string }>({
    mutationKey: ["DELETE_BLOG"],
    mutationFn: async ({id}) => {
      return toast.promise(deleteBlog(id), {
        loading: "Deleting Blog...",
        success: `Blog deleted successfully!`,
        error: "Error when deleting the Blog.",
      });
    },
  });
};