import { TImageFiles } from "../../interfaces/image.interface";
import { TProject } from "./project.interface";
import { Project } from "./project.model";

const createProjectIntoDB = async(payload: TProject, images: TImageFiles) =>{
    const { Images } = images

    payload.images = Images.map((image) => image.path);
    
    const result = await Project.create(payload);
    return result;
}

const getAllProjectsFromDB = async() =>{
    const result = await Project.find();
    return result;
}

const getSingleProjectFromDB = async(id: string) =>{
    const result = await Project.findById(id);
    return result;
}

export const ProjectServices = {
    createProjectIntoDB,
    getAllProjectsFromDB,
    getSingleProjectFromDB
}