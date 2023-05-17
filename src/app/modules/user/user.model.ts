import { Model, Schema, model } from "mongoose"
import { UserInterface, UserMethods } from "./user.interface";

type UserModel = Model<UserInterface, {}, UserMethods>;

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
// Model
const User = model<UserInterface, UserModel>("User", userSchema)

export default User;