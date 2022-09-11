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
const express_1 = __importDefault(require("express"));
const message_1 = require("./message");
const app_root_path_1 = __importDefault(require("app-root-path"));
const app = (0, express_1.default)();
app.get("/my-messages/:page", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.params.page);
    const messages = yield message_1.Message.getMessages(page);
    return res.json(messages);
}));
app.get("/my-qrcode", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.sendFile(`${app_root_path_1.default.path}/qr_code.svg`);
}));
app.listen(3000);
