import { Model } from "mongoose"

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
interface UserModel extends Model<UserInterface> {
    
}


// Instance methods
export interface UserMethods {
    fullName() : string
}
