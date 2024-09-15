import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import { Auth } from '../models/auth.model';
import { Response, Request } from 'express'

const secret = process.env.SECRET_KEY || 'milton';

export const Signup = async (req: Request, res: Response) => {
    const User = await new Auth({
        userName: req.body.userName,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, secret as string).toString(),
        gender: req.body.gender
    });
    try {
        const user = await User.save();
        return res.status(201).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
}

export const Login = async (req: Request, res: Response) => {
    try {
        const user: any = await Auth.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
                errors: {},
            });
        }

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY as string);
        const realPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (realPassword !== req.body.password) {
            return res.status(401).json({
                success: false,
                message: "Passwords do not match",
                errors: {},
            });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.SECRET_KEY as string,
            { expiresIn: "7d" }
        );

        const { password, ...info } = user.toObject();
        return res.status(200).json({ ...info, token });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            errors: { err },
        });
    }
};


export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const User = await Auth.find();
        return res.status(200).json(User);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            errors: { error },
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await Auth.findByIdAndDelete({ _id: req.params.id });
        return res.status(201).json(user);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            errors: { error },
        })
    }
}