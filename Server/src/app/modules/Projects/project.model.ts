import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    incomplete: { type: Boolean, default: false },
    featured: { type: Boolean, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    githubUrl: { type: [String], required: true },
    images: { type: [String], required: true },
    liveUrl: { type: String, required: true },
    published: { type: Date, required: true },
    tags: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

export const Project = model<TProject>('Project', projectSchema);
