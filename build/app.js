"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = __importDefault(require("./routes/user"));
var campground_1 = __importDefault(require("./routes/campground"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var envFile = process.env.NODE_ENV ? ".env." + process.env.NODE_ENV : '.env';
dotenv_1.default.config({ path: envFile });
require("./db/mongoose");
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(user_1.default);
app.use(campground_1.default);
exports.default = app;
