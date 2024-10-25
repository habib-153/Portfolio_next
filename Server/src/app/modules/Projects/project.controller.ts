import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";
import AppError from "../../errors/AppError";
import { TImageFiles } from "../../interfaces/image.interface";

const createProject = catchAsync(async (req, res) => {
    if(!req.files){
        throw new AppError(400, 'Please Upload an Image');
    }

    const result = await ProjectServices.createProjectIntoDB(req.body, req.files as TImageFiles);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Project Created Successfully',
        data: result,
      });
})

const getAllProject = catchAsync(async (req, res) => {
    const result = await ProjectServices.getAllProjectsFromDB();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Projects Retrieved Successfully',
        data: result,
      });
})

const getSingleProject = catchAsync(async (req, res) => {
    const { id } = req.params;

    const result = await ProjectServices.getSingleProjectFromDB(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Project Retrieved Successfully',
        data: result,
      });
})

export const ProjectControllers = {
    createProject,
    getAllProject,
    getSingleProject
}