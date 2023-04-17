import mongoose from "mongoose";
const Schema = mongoose.Schema

const courseSchema = new Schema({
    imageUrl: {
        type: String,
        default: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    title: {
        type: String,
        unique: true,
        required: true,
        maxlength: 60
    },
    lead: String,
    category: {
        type: String,
        enum: ['Design', 'Development', 'Marketing', 'Music', 'Other'],
        default: 'Other'
    },
    difficultyLevel: {
        type: String,
        enum: ['Beginner', 'Intermidiate', 'Advanced', 'All levels'],
        default: 'All levels'
    },
    description: {
        type: String,
        default: 'Unknown'
    },
    whatYouWillLearn: {
        type: [String],
        default: 'Unknown'
    },
    price: {
        type: Number,
        default: 0
    },
    duration: {
        type: Number,
        required: true
    },
    requirements: {
        type: [String],
        default: 'unknown'
    },
    videos: {
        type: [String],
        default: 'https://youtu.be/HcOc7P5BMi4'
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    }
}, { timestamps: true })




export default mongoose.model('Course', courseSchema);