import express from 'express';
import auth from '../../middlewares/auth';
import { ProjectControllers } from './project.controller';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middlewares/bodyParser';

const router = express.Router();

router.post('/', auth('ADMIN'), multerUpload.fields([{name: 'Images'}]), parseBody, ProjectControllers.createProject);
router.get('/', ProjectControllers.getAllProject)
router.get('/:id', ProjectControllers.getSingleProject)
router.put('/:id', auth('ADMIN'), multerUpload.fields([{name: 'Images'}]), parseBody, ProjectControllers.updateProject)
router.delete('/:id', auth('ADMIN'), ProjectControllers.deleteProject)

export const ProjectRoutes = router;