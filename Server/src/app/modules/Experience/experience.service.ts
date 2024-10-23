import { TImageFile } from '../../interfaces/image.interface';
import { TExperience } from './experience.interface';
import { Experience } from './experience.model';

const createExperienceInDB = async (
  payload: TExperience,
  image: TImageFile
) => {
  if (image) {
    payload.image = image.path;
  }

  const result = await Experience.create(payload);
  return result;
};

const getAllExperienceFromDB = async () => {
  const result = await Experience.find();
  return result;
};

export const ExperienceServices = {
  createExperienceInDB,
  getAllExperienceFromDB,
};
