import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skill.service";

const createSkill = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await SkillServices.createSkillInDB(payload);

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

export const SkillControllers = {
    createSkill,
    getAllSkills
}