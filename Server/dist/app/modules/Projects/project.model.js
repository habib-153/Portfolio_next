"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    incomplete: { type: Boolean, default: false },
    featured: { type: Boolean, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    githubUrl: { type: [String], required: true },
    images: { type: [String], required: true },
    liveUrl: { type: String, required: true },
    published: { type: Date, required: true },
    tags: { type: [String], required: true },
}, {
    timestamps: true,
});
exports.Project = (0, mongoose_1.model)('Project', projectSchema);
