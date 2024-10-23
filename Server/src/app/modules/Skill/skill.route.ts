import express from 'express';
import { SkillControllers } from './skill.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/', auth('ADMIN'), SkillControllers.createSkill);
router.get('/', SkillControllers.getAllSkills)

export const SkillRoutes = router;