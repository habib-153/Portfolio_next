import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { catchAsync } from '../../utils/catchAsync';
import { BlogServices } from './blog.service';
import sendResponse from '../../utils/sendResponse';
import { TImageFiles } from '../../interfaces/image.interface';

const createBlog = catchAsync(async (req, res) => {
  if (!req.files) {
    throw new AppError(400, 'Please Upload an Image');
  }

  const result = await BlogServices.createBlogIntoDB(
    req.body,
    req.files as TImageFiles
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog Created Successfully',
    data: result,
  });
});

const getAllBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blogs Retrieved Successfully',
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlog,
};
