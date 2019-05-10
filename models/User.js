import mongoose from "mongoose";
//UserEntity
const userSchema = mongoose.Schema({
    id : {
        type : String,
        required : "Text is required"
    },
    password : {
        type : String,
        required : "Text is required"
    }
});

const model = mongoose.model("user", userSchema);
export default model;