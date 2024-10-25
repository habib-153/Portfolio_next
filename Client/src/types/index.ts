import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  mobileNumber: string;
  profilePhoto: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface ISkill {
  _id: string;
  name: string;
  logo: string;
  type: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface IExperience {
  _id: string;
  title: string;
  organization: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface IBlog {
  _id: string;
  title: string;
  description: string;
  category: string[];
  images: string[];
  createdAt: string;
  updatedAt?: string;
  __v?: number;
}