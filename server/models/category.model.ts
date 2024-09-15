import mongoose, {Schema} from "mongoose";

const catSchema = new Schema({
    category: { type: String, },
    duration: { type: String, },
}, { timestamps: true });

export const Category = mongoose.model('Category', catSchema);