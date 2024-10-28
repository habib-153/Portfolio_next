"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = require("../../builder/QueryBuilder");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const project_model_1 = require("./project.model");
const createProjectIntoDB = (payload, images) => __awaiter(void 0, void 0, void 0, function* () {
    const { Images } = images;
    payload.images = Images.map((image) => image.path);
    const result = yield project_model_1.Project.create(payload);
    return result;
});
const getAllProjectsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    const projects = new QueryBuilder_1.QueryBuilder(project_model_1.Project.find(), query).sort();
    const result = yield projects.modelQuery;
    return result;
});
const getSingleProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.findById(id);
    return result;
});
const updateProjectIntoDB = (id, payload, images) => __awaiter(void 0, void 0, void 0, function* () {
    const projectData = yield project_model_1.Project.findById(id);
    if (!projectData) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Project not found');
    }
    const { Images } = images;
    if (Images) {
        payload.images = Images.map((image) => image.path);
    }
    const result = yield project_model_1.Project.findByIdAndUpdate(id, payload, {
        runValidators: true,
        new: true,
    });
    return result;
});
const deleteProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.findByIdAndDelete(id);
    return result;
});
exports.ProjectServices = {
    createProjectIntoDB,
    getAllProjectsFromDB,
    getSingleProjectFromDB,
    updateProjectIntoDB,
    deleteProjectFromDB,
};
