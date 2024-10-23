"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/Auth/auth.route");
const user_route_1 = require("../modules/User/user.route");
const skill_route_1 = require("../modules/Skill/skill.route");
const project_route_1 = require("../modules/Projects/project.route");
const blog_route_1 = require("../modules/Blog/blog.route");
const experience_route_1 = require("../modules/Experience/experience.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/skills',
        route: skill_route_1.SkillRoutes,
    },
    {
        path: '/experience',
        route: experience_route_1.ExperienceRoutes,
    },
    {
        path: '/projects',
        route: project_route_1.ProjectRoutes,
    },
    {
        path: '/blogs',
        route: blog_route_1.BlogRoutes
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
