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
exports.tourService = void 0;
const tour_model_1 = __importDefault(require("./tour.model"));
const createTour = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //   const result = await Tour.create(payload)
    const data = new tour_model_1.default(payload);
    //   data.color = "red"
    const result = yield data.save();
    return result;
});
const getTours = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = tour_model_1.default.find();
    return result;
});
const getSingleTour = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = tour_model_1.default.findById(id);
    return result;
});
const updateTour = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = tour_model_1.default.findByIdAndUpdate(id, payload);
    return result;
});
const deleteTour = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = tour_model_1.default.findByIdAndDelete(id);
    return result;
});
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const getNextSchedule = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const tour = yield tour_model_1.default.getNextNearestStartDateAndEndData();
    //   const nextSchedule = tour?.getNextNearestStartDateAndEndData()
    return {
        tour,
        // nextSchedule,
    };
});
exports.tourService = {
    createTour,
    getTours,
    getSingleTour,
    updateTour,
    deleteTour,
    getNextSchedule,
};
