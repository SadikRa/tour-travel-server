"use strict";
// req and res manage
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
exports.userController = void 0;
const user_service_1 = require("./user.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield user_service_1.userService.createUser(payload);
        // res.json({
        //   status: true,
        //   message: 'User created successfully',
        //   data: result,
        // })
        (0, sendResponse_1.default)(res, { message: "user cerate successfully", data: result });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userService.getUser();
        res.send({
            status: true,
            message: 'Users getting successfully',
            result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params);
        const userId = req.params.userId;
        const result = yield user_service_1.userService.getSingleUser(userId);
        res.send({
            status: true,
            message: 'User getting successfully',
            result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const body = req.body;
        const result = yield user_service_1.userService.updateUser(userId, body);
        res.send({
            status: true,
            message: 'User updated successfully',
            result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        yield user_service_1.userService.deleteUser(userId);
        res.send({
            status: true,
            message: 'User deleted successfully',
            result: {},
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
exports.userController = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
