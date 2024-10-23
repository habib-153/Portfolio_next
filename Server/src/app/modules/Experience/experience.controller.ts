import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ExperienceServices } from './experience.service';
import AppError from '../../errors/AppError';

const createExperience = catchAsync(async (req, res) => {
  if (!req.file) {
    throw new AppError(400, 'Please upload an image');
  }

  const result = await ExperienceServices.createExperienceInDB(
    req.body,
    req.file
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Experience Created Successfully',
    data: result,
  });
});

const getAllExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.getAllExperienceFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Experience Retrieved Successfully',
    data: result,
  });
});

export const ExperienceControllers = {
  createExperience,
  getAllExperience,
};
