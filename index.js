"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const index_ts_1 = __importDefault(require("./routes/index.ts"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev")); // Log every request to the console for debugging purposes
app.use("/api", index_ts_1.default); // Routes defined in routes/index.js
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
