"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const experience_controller_1 = require("./experience.controller");
const multer_config_1 = require("../../config/multer.config");
const bodyParser_1 = require("../../middlewares/bodyParser");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)('ADMIN'), multer_config_1.multerUpload.single('image'), bodyParser_1.parseBody, experience_controller_1.ExperienceControllers.createExperience);
router.get('/', experience_controller_1.ExperienceControllers.getAllExperience);
exports.ExperienceRoutes = router;
