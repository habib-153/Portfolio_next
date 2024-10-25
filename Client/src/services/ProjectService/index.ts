'use server'
import { revalidateTag } from "next/cache";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/libs/AxiosInstance";

export const createProject = async(data: FormData) => {
    const res = await axiosInstance.post("/projects", data);
    
    revalidateTag('projects')

    return res.data;
}

export const getAllProject = async() => {
    const res = await fetch(`${envConfig.baseApi}/projects`, {
        next: {
            tags: ['projects']
        }
    });

    return res.json();
}

export const getSingleProject = async(id: string) => {
    const res = await axiosInstance.get(`/projects/${id}`);
    
    return res.data;
}