import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { createBlog, getAllBlogs } from "../services/BlogService";

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
