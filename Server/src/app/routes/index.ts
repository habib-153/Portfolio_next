import express from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { SkillRoutes } from '../modules/Skill/skill.route';
import { ProjectRoutes } from '../modules/Projects/project.route';
import { BlogRoutes } from '../modules/Blog/blog.route';

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
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
