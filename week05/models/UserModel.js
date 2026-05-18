import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First name is Required"]
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: [true, "email is Required"],
        unique: true
    },
    profileImageUrl: {
        type: String,
    },
    role: {
        type: String,
        enum: ["AUTHOR", "USER", "ADMIN"],
        required: [true, "{value} is an invalid Role"]
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    password:{
        type:String
    }
}, {
    strict: "throw",
    timestamps: true,
    versionKey: false
})


// create model

export const UserTypeModel=model("user",userSchema)
