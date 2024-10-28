import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TImageFiles } from '../../interfaces/image.interface';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog, images: TImageFiles) => {
  const { Images } = images;

  payload.images = Images.map((image) => image.path);

  const result = await Blog.create(payload);
  return result;
};

const getAllBlogFromDB = async () => {
  const result = await Blog.find();
  return result;
};

const getSingleBlogFromDB = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

const updateBlogIntoDB = async (
  id: string,
  payload: Partial<TBlog>,
  images: TImageFiles
) => {
  const blogData = await Blog.findById(id);

  if (!blogData) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }

  const { Images } = images;
  if (Images) {
    payload.images = Images.map((image) => image.path);
  }

  const result = await Blog.findByIdAndUpdate(id, payload, {
    runValidators: true,
    new: true,
  });

  return result;
};

const deleteBlogFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogFromDB,
  getSingleBlogFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
};
