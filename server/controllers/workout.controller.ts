import { Workout } from "../models/workout.model";
import { Response, Request } from 'express'

export const createWorkout = async (req: Request, res: Response) => {
    try {
        const workout = new Workout(req.body);
        await workout.save();
        return res.status(201).json(workout);
    } catch (error) {
        console.log(error);
    }
}

export const getWorkout = async (req: Request, res: Response) => {
    try {
        const workout = await Workout.find();
        return res.status(200).json(workout);
    } catch (error) {
        console.log(error);
    }
}

export const editWorkout = async (req: Request, res: Response) => {
    try {
        const updateWorkout = await Workout.findByIdAndUpdate(req.params.id, { $set: req.body, }
            , { new: true });
        return res.status(200).json(updateWorkout);
    } catch (error) {
        console.log(error);
    }
}

export const deleteWorkout = async (req: Request, res: Response) => {
    try {
        const deleteWorkout = await Workout.findByIdAndDelete({ _id: req.params.id });
        return res.status(200).json(deleteWorkout);
    } catch (error) {
        console.log(error);
    }
}