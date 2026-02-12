import { Schema, model } from "mongoose";

const userCommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        res: 'ref'
    },
    comment: {
        type: String
    }
})

//create article Schema'

const articleSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: [true, "Author is required"]
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    category: {
        type: String,
        required: [true, "Title is required"]
    },
    content: {
        type: String,
        required: [true, "Title is required"]

    },
    comments: [userCommentSchema],
    isArticleActive: {
        type: Boolean,
        default: true
    }
}, {
    timeStamps: true,
    strict: "throw",
    versionKey: false
})

export const ArticleModel=model('article',articleSchema)
