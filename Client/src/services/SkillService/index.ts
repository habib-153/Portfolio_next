import { revalidateTag } from "next/cache";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/libs/AxiosInstance";
import { ISkill } from "@/src/types";

export const createSkill = async(data: ISkill) => {
    const res = await axiosInstance.post("/skills", data);
    
    revalidateTag('skills')

    return res.data;
}

export const getSkills = async() => {
    const res = await fetch(`${envConfig.baseApi}/skills`, {
        next: {
            tags: ['skills']
        }
    });

    return res.json();
}