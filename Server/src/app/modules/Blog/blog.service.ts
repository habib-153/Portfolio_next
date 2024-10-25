import { TImageFiles } from "../../interfaces/image.interface";
import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogIntoDB = async(payload: TBlog, images: TImageFiles) =>{
    const { Images } = images

    payload.images = Images.map((image) => image.path);
    
    const result = await Blog.create(payload);
    return result;
}

const getAllBlogFromDB = async() =>{
    const result = await Blog.find();
    return result;
}

const getSingleBlogFromDB = async(id: string) =>{
    const result = await Blog.findById(id);
    return result;
}

export const BlogServices = {
    createBlogIntoDB,
    getAllBlogFromDB,
    getSingleBlogFromDB
}
