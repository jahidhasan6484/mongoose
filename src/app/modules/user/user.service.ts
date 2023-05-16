import UserInterface from "./user.interface";
import User from "./user.model"

export const insertUserToDB = async (payload: UserInterface): Promise<UserInterface> => {
    const user = new User(payload)

    await user.save();
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
