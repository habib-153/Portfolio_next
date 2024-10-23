import { model, Schema } from 'mongoose';
import { TExperience } from './experience.interface';

const experienceSchema = new Schema<TExperience>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {type: String, required: true},
    image: {type: String, required: true},
    startDate: {type: String},
    organization: {type: String},
    endDate: {type: String},
  },
  {
    timestamps: true,
  }
);

export const Experience = model<TExperience>('Experience', experienceSchema);
