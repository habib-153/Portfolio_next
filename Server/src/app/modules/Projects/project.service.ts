import httpStatus from 'http-status';
import { QueryBuilder } from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { TImageFiles } from '../../interfaces/image.interface';
import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (payload: TProject, images: TImageFiles) => {
  const { Images } = images;

  payload.images = Images.map((image) => image.path);

  const result = await Project.create(payload);
  return result;
};

const getAllProjectsFromDB = async () => {
  const query: Record<string, unknown> = {};

  const projects = new QueryBuilder(
    Project.find(),
    query as Record<string, unknown>
  ).sort();

  const result = await projects.modelQuery;
  return result;
};

const getSingleProjectFromDB = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

const updateProjectIntoDB = async (
  id: string,
  payload: Partial<TProject>,
  images: TImageFiles
) => {
  const projectData = await Project.findById(id);

  if (!projectData) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
  }

  const { Images } = images;
  if(Images){
    payload.images = Images.map((image) => image.path);
  }

  const result = await Project.findByIdAndUpdate(id, payload, {
    runValidators: true,
    new: true,
  });

  return result;
};

const deleteProjectFromDB = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
};
