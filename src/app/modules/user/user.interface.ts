import { HydratedDocument, Model } from "mongoose"


// Creat an interface
export interface UserInterface {
    id: string,
    name: {
        firstName: string,
        lastName: string,
        middleName?: string
    },
    gender: "male" | "female",
    role: string
}

// Static
export interface UserModel extends Model<UserInterface, {}, UserMethods> {
    getFoolballers(): Promise<HydratedDocument<UserInterface, UserMethods>>;
}


// Instance methods
export interface UserMethods {
    fullName(): string
}
