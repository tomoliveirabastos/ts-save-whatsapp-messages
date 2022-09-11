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
const whatsapp_web_js_1 = require("whatsapp-web.js");
const handle_1 = require("./handle");
const qrcode_terminal_1 = __importDefault(require("qrcode-terminal"));
const qr_image_1 = __importDefault(require("qr-image"));
const fs_1 = __importDefault(require("fs"));
const client = new whatsapp_web_js_1.Client({
    puppeteer: {
        args: ['--no-sandbox'],
    },
    authStrategy: new whatsapp_web_js_1.LocalAuth({ clientId: "tom-oliveira" })
});
client.on('qr', qr => {
    qrcode_terminal_1.default.generate(qr, { small: true });
    const svg = qr_image_1.default.image(qr, { type: 'svg' });
    svg.pipe(fs_1.default.createWriteStream('qr_code.svg'));
});
client.on('ready', () => {
    console.log('Ok');
});
client.on('message', (message) => __awaiter(void 0, void 0, void 0, function* () {
    const handle = new handle_1.Handle({
        message
    });
    yield handle.save();
}));
client.on('disconnected', () => {
    client.initialize();
});
client.initialize();
