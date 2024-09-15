import { Category } from "../models/category.model";
import { Response, Request } from 'express';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const cat = new Category(req.body);
    await cat.save();
    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      category: cat,
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

export const getCategory = async (req: Request, res: Response) => {
  try {
    const cat = await Category.find();
    return res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      categories: cat,
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

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const cat = await Category.findByIdAndDelete(req.params.id);

    if (!cat) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
        errors: { id: "No category found with this ID" },
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      category: cat,
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

export const editCategory = async (req: Request, res: Response) => {
  try {
    const updateCat = await Category.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

    if (!updateCat) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
        errors: { id: "No category found with this ID" },
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
      category: updateCat,
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
