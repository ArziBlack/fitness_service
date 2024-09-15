import { Router} from 'express'
import { verify } from '../services/verify';
import { createCategory, editCategory, getCategory, deleteCategory } from '../controllers/category.controller';

const router = Router()

// Get All categories
router.route("/all").get(verify, getCategory);

// Add category
router.route("/add").post(verify, createCategory)

// Edit category
router.route("/edit/:id").put(verify, editCategory);

// Delete Category
router.route("/delete/:id").delete(verify, deleteCategory)

export default router