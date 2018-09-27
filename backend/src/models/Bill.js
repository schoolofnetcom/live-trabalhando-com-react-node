import mongoose from 'mongoose';

const Bill = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    type: { type: String, enum: [ 'INPUT', 'OUTPUT' ], required: true },
    created_at: { type: Date, default: new Date() }
});

export default mongoose.model('Bill', Bill);