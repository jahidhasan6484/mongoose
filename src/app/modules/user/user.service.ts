import { UserInterface } from "./user.interface";
import User from "./user.model"

export const insertUserToDB = async (payload: UserInterface): Promise<UserInterface> => {
    const user = new User(payload) // User is a class and user is a instance

    await user.save(); // instance methods (user is a instance and save() is a build in method)
    return user;
}

export const getUsersFromDB = async (): Promise<UserInterface[]> => {
    const users = await User.find()

    return users;
}

export const getUserByIdFromDB = async (payload: string): Promise<UserInterface | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, role: 1 })

    return user;
}

export const getFootballerFromDB = async (payload: string): Promise<UserInterface | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, role: 1 })

    return user;
}