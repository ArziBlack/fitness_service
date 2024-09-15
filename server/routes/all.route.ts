import { Router} from 'express'
import { createCategory, editCategory, getCategory, deleteCategory } from '../controllers/category.controller';
import { Signup, deleteUser, getAllUsers } from '../controllers/auth.controller';
import { createWorkout, deleteWorkout, editWorkout, getWorkout } from '../controllers/workout.controller';

const router = Router()

// Signup User
router.route("/user").post(Signup);

// Get All Users
router.route("/user").get(getAllUsers);

// Delete A User
router.route("/user/:id").delete(deleteUser);

// Get All Category
router.route("/category").get(getCategory);

// Add Category
router.route("/category").post(createCategory)

// Edit Category
router.route("/category/:id").put(editCategory);

// Delete Category
router.route("/category/:id").delete(deleteCategory)

// Get All Courses
router.route("/workout").get(getWorkout);

// Add Course
router.route("/workout").post(createWorkout)

// Edit Course
router.route("/workout/:id").put(editWorkout);

// Delete Course
router.route("/workout/:id").delete(deleteWorkout);

export default router