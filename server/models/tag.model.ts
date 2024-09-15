import mongoose, {Schema} from "mongoose";

const tagSchema = new Schema({
    tag: { type: String, },
}, { timestamps: true });

export const Tag = mongoose.model('Category', tagSchema);