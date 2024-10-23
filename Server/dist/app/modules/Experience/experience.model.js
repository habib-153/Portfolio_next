"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experience = void 0;
const mongoose_1 = require("mongoose");
const experienceSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: { type: String, required: true },
    image: { type: String, required: true },
    startDate: { type: String },
    organization: { type: String },
    endDate: { type: String },
}, {
    timestamps: true,
});
exports.Experience = (0, mongoose_1.model)('Experience', experienceSchema);
