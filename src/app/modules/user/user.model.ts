import { Model, Schema, model } from "mongoose"
import { UserInterface, UserMethods, UserModel } from "./user.interface";

// Creat schema using interface
const userSchema = new Schema<UserInterface, UserModel, UserMethods>({
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

userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
});

// Create schema using static
userSchema.static('getFoolballers', async function getFoolballers() {
    const footballers = await this.find({ role: "footballer" })
    return footballers;
});

// Model
const User = model<UserInterface, UserModel>("User", userSchema)

export default User;