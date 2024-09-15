import { Category } from "../models/category.model";
import { Response, Request } from 'express'

export const createCategory = async (req: Request, res: Response) => {
    try {
        const cat = new Category(req.body);
        await cat.save();
        return res.status(201).json(cat);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const getCategory = async (req: Request, res: Response) => {
    try {
        const cat = await Category.find();
        return res.status(201).json(cat);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const cat = await Category.findByIdAndDelete({ _id: req.params.id });
        return res.status(201).json(cat);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const editCategory = async (req: Request, res: Response) => {
    try {
        const updateCat = await Category.findByIdAndUpdate(req.params.id, { $set: req.body, }
            , { new: true });
        return res.status(200).json(updateCat);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}