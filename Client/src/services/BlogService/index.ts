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