import express from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { SkillRoutes } from '../modules/Skill/skill.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/skills',
    route: SkillRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
