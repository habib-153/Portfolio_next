import express from 'express';
import { SkillControllers } from './skill.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/', auth('ADMIN'), SkillControllers.createSkill);
router.get('/', SkillControllers.getAllSkills)
router.put('/:id', auth('ADMIN'), SkillControllers.updateSkill);
router.delete('/:id', auth('ADMIN'), SkillControllers.deleteSkill);

export const SkillRoutes = router;