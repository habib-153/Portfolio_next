import express from 'express';
import auth from '../../middlewares/auth';
import { ExperienceControllers } from './experience.controller';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middlewares/bodyParser';

const router = express.Router();

router.post('/', auth('ADMIN'),  multerUpload.single('image'), parseBody, ExperienceControllers.createExperience);
router.get('/', ExperienceControllers.getAllExperience)

export const SkillRoutes = router;