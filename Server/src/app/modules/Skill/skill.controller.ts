/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skill.service";

const createSkill = catchAsync(async (req, res) => {
    const result = await SkillServices.createSkillInDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Skill Created Successfully',
        data: result,
      });
})

const getAllSkills = catchAsync(async (req, res) => {
    const result = await SkillServices.getAllSkillsFromDB();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Skills Retrieved Successfully',
        data: result,
      });
})

const updateSkill = catchAsync(async (req, res) => {
    const result = await SkillServices.updateSkillInDB(req.params.id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Skill Updated Successfully',
        data: result,
      });
})

const deleteSkill = catchAsync(async (req, res) => {
    const result = await SkillServices.deleteSkillFromDB(req.params.id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Skill Deleted Successfully',
        data: null,
      });
})
export const SkillControllers = {
    createSkill,
    getAllSkills,
    updateSkill,
    deleteSkill
}