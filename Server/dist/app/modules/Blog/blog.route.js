"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const multer_config_1 = require("../../config/multer.config");
const bodyParser_1 = require("../../middlewares/bodyParser");
const blog_controller_1 = require("./blog.controller");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)('ADMIN'), multer_config_1.multerUpload.fields([{ name: 'Images' }]), bodyParser_1.parseBody, blog_controller_1.BlogControllers.createBlog);
router.get('/', blog_controller_1.BlogControllers.getAllBlog);
exports.BlogRoutes = router;
