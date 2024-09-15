import { Router} from 'express'
import { verify } from '../services/verify';
import { createCategory, editCategory, getCategory, deleteCategory } from '../controllers/category.controller';

const router = Router()

// Get All Courses
router.route("/all").get(verify, getCategory);

// Add Course
router.route("/add").post(verify, createCategory)

// Edit Course
router.route("/edit/:id").put(verify, editCategory);

// Delete Course
router.route("/delete/:id").delete(verify, deleteCategory)

export default router