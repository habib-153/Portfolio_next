'use server'
import { revalidateTag } from "next/cache";

import axiosInstance from "@/src/libs/AxiosInstance";
import envConfig from "@/src/config/envConfig";
import { ISkill } from "@/src/types";

export const createSkill = async (payload: ISkill): Promise<any> => {
  try{
    const {data} = await axiosInstance.post('/skills', payload)

    revalidateTag("skills");

    return data;
  }
  catch (error: any) {
    const errorMessage =
      error?.response?.data?.message ||
      error?.message ||
      "Unknown error occurred";

    throw new Error(errorMessage);
  }
};

export const getSkills = async () => {
  const res = await fetch(`${envConfig.baseApi}/skills`, {
    next: {
      tags: ["skills"],
    },
  });

  return res.json();
};

export const updateSkill = async (id: string, data: ISkill) => {
  const res = await axiosInstance.put(`/skills/${id}`, data);

  revalidateTag("skills");

  return res.data;
};

export const deleteSkill = async (id: string) => {
  const res = await axiosInstance.delete(`/skills/${id}`);

  revalidateTag("skills");

  return res.data;
};