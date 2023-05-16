import { Schema, model } from "mongoose"
import UserInterface from "./user.interface"

// Creat schema using interface
const userSchema = new Schema<UserInterface>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        middleName: {
            type: String
        }
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    role: {
        type: String,
        required: true
    }
})


// Model
const User = model<UserInterface>("User", userSchema)

export default User;