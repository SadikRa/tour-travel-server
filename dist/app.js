"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
// app.use('/api', blogRoutes);
const test = (req, res) => {
    res.send('hello Sadik');
};
app.get('/', test);
// app.use(globalErrorHandler);
//Not Found
// app.use(notFound);
exports.default = app;