import { Workout } from "../models/workout.model";
import { Response, Request } from 'express';

// Create a new workout
export const createWorkout = async (req: Request, res: Response) => {
  try {
    const workout = new Workout(req.body);
    await workout.save();
    return res.status(201).json({
      success: true,
      message: "Workout created successfully",
      workout,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errors: { error },
    });
  }
};

// Get all workouts
export const getWorkout = async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find();
    return res.status(200).json({
      success: true,
      message: "Workouts fetched successfully",
      workouts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errors: { error },
    });
  }
};

// Edit a workout by ID
export const editWorkout = async (req: Request, res: Response) => {
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedWorkout) {
      return res.status(404).json({
        success: false,
        message: "Workout not found",
        errors: { id: "No workout found with this ID" },
      });
    }

    return res.status(200).json({
      success: true,
      message: "Workout updated successfully",
      workout: updatedWorkout,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errors: { error },
    });
  }
};

// Delete a workout by ID
export const deleteWorkout = async (req: Request, res: Response) => {
  try {
    const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);

    if (!deletedWorkout) {
      return res.status(404).json({
        success: false,
        message: "Workout not found",
        errors: { id: "No workout found with this ID" },
      });
    }

    return res.status(200).json({
      success: true,
      message: "Workout deleted successfully",
      workout: deletedWorkout,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errors: { error },
    });
  }
};
