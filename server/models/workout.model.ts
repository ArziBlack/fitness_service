import mongoose, {Schema} from "mongoose";

const workoutSchema = new Schema({
    categoryId: { type: String, },
    workout: { type: String, },
    image: { type: String, },
    reps: { type: String, },
    sets: { type: String, },
    tags: { type: String, },
    description: { type: String, },
    duration: { type: String, },
}, { timestamps: true });

export const Workout = mongoose.model('Workout', workoutSchema);