import { Request, Response } from "express";
import { getFootballerFromDB, getUserByIdFromDB, getUsersFromDB, insertUserToDB } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
    const data = req.body;
    const user = await insertUserToDB(data)

    console.log("User", user)

    res.status(200).json({
        status: "success",
        data: user
    })
}

export const getUsers = async (req: Request, res: Response) => {
    const users = await getUsersFromDB()


    res.status(200).json({
        status: "success",
        data: users
    })
}

export const getUser = async(req:Request, res: Response) => {
    const {id} = req.params;
    const user = await getUserByIdFromDB(id)

    res.status(200).json({
        status: "success",
        data: user
    })
}

export const getFootballers = async(req:Request, res: Response) => {
    const footballer = await getFootballerFromDB()

    res.status(200).json({
        status: "success",
        data: footballer
    })
}

