import mongoose from "mongoose";
const Schema = mongoose.Schema

const teacherSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        unique: true,
        default: 'unknown',
        trim: true,
        set: text => text.charAt(0).toUpperCase() + text.substring(1)
    },
    lastname: {
        type: String,
        required: true,
        unique: true,
        default: 'unknown',
        trim: true,
        set: text => text.charAt(0).toUpperCase() + text.substring(1)
    },
    jobOccupation: {
        type: String,
        default: 'unknown'
    },
    description: {
        type: String,
        default: 'unknown'
    },
    imageUrl: {
        type: String,
        default: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b'
    },
    linkedin: String,
    website: String,
    youtube: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })


export default mongoose.model('Teacher', teacherSchema)
