import { Router} from 'express'
import { verify } from '../services/verify';
import { createWorkout, editWorkout, deleteWorkout, getWorkout } from '../controllers/workout.controller';

const router = Router()

// Get All workouts
router.route("/all").get(verify, getWorkout);

// Add workouts
router.route("/add").post(verify, createWorkout)

// Edit workouts
router.route("/edit/:id").put(verify, editWorkout);

// Delete workouts
router.route("/delete/:id").delete(verify, deleteWorkout);

export default router