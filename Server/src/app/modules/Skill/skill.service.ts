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

const updateSkillInDB = async(id: string, payload: TSkill) =>{
    const result = await Skill.findByIdAndUpdate(id, payload, {new: true});
    return result;
}

const deleteSkillFromDB = async(id: string) =>{
    const result = await Skill.findByIdAndDelete(id);
    return result;
}

export const SkillServices = {
    createSkillInDB,
    getAllSkillsFromDB,
    updateSkillInDB,
    deleteSkillFromDB
}