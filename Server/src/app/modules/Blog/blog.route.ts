import express from 'express';
import auth from '../../middlewares/auth';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middlewares/bodyParser';
import { BlogControllers } from './blog.controller';

const router = express.Router();

router.post('/', auth('ADMIN'), multerUpload.fields([{name: 'Images'}]), parseBody, BlogControllers.createBlog);
router.get('/', BlogControllers.getAllBlog)
router.get('/:id', BlogControllers.getSingleBlog)

export const BlogRoutes = router;