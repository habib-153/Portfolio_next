'use server'
import { revalidateTag } from "next/cache";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/libs/AxiosInstance";

export const createBlog = async(data: FormData) => {
    const res = await axiosInstance.post("/blogs", data);
    
    revalidateTag('blogs')

    return res.data;
}

export const getAllBlogs = async() => {
    const res = await fetch(`${envConfig.baseApi}/blogs`, {
        next: {
            tags: ['blogs']
        }
    });

    return res.json();
}

export const getSingleBlog = async(id: string) => {
    const res = await axiosInstance.get(`/blogs/${id}`);

    return res.data;
}

export const updateBlog = async (id: string, data: FormData) => {
    const res = await axiosInstance.put(`/blogs/${id}`, data);
  
    revalidateTag("blogs");
  
    return res.data;
  };
  
  export const deleteBlog = async (id: string) => {
    const res = await axiosInstance.delete(`/blogs/${id}`);
  
    revalidateTag("blogs");
  
    return res.data;
  };
  