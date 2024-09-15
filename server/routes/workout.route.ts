import { Router} from 'express'
import { verify } from '../services/verify';
import { createWorkout, editWorkout, deleteWorkout, getWorkout } from '../controllers/workout.controller';

const router = Router()

// Get All Courses
router.route("/all").get(verify, getWorkout);

// Add Course
router.route("/add").post(verify, createWorkout)

// Edit Course
router.route("/edit/:id").put(verify, editWorkout);

// Delete Course
router.route("/delete/:id").delete(verify, deleteWorkout);

export default router