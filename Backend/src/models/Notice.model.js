import mongoose,{Schema} from "mongoose";

const noticeSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    fileURL: {
        type: String,
        required: true,
    }
},{
    timestamps: true
})

export const Notice = mongoose.model("notice", noticeSchema);
