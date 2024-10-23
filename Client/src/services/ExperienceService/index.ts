import { revalidateTag } from "next/cache";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/libs/AxiosInstance";
import { IExperience } from "@/src/types";

export const createExperience = async(data: IExperience) => {
    const res = await axiosInstance.post("/experience", data);
    
    revalidateTag('experience')

    return res.data;
}

export const getAllExperience = async() => {
    const res = await fetch(`${envConfig.baseApi}/experience')`, {
        next: {
            tags: ['experience']
        }
    });

    return res.json();
}