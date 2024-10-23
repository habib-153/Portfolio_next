import { TSkill } from "./skill.interface";
import { Skill } from "./skill.model";

const createSkillInDB = async(payload: TSkill) =>{
    const result = await Skill.create(payload);
    return result;
}

const getAllSkillsFromDB = async() =>{
    const result = await Skill.find();
    return result;
}

export const SkillServices = {
    createSkillInDB,
    getAllSkillsFromDB
}