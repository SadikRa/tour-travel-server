"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        minlength: 3,
        maxlength: 50,
    },
    age: { type: Number, required: [true, 'Please enter your age'] },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
            },
            message: '{VALUE} is not a valid email',
        },
        immutable: true,
    },
    photo: String,
    role: {
        type: String,
        enum: {
            values: ['user', 'admin'],
            message: '{VALUE} is not valid, please provide a valid role',
        },
        default: 'user',
        required: true,
    },
    userStatus: {
        type: String,
        enum: ['active', 'inactive'],
        required: true,
        default: 'active',
    },
});
// hook -> pre
// userSchema.pre('find', function (this, next) {
//   this.find({ userStatus: { $eq: 'active' } })
//   next()
// })
// userSchema.post('find', function (docs, next) {
//   docs.forEach((doc: IUser) => {
//     doc.name = doc.name.toUpperCase()
//   })
//   next()
// })
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
