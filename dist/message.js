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
exports.Message = void 0;
const knex_1 = __importDefault(require("./knex"));
class Message {
    constructor(msg) {
        this.message = {
            message: msg.body,
            phone: msg.from,
            hasMedia: msg.hasMedia,
            fileSrc: ""
        };
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = knex_1.default.table('messages');
            yield db.insert(this.message);
        });
    }
    static getMessages(page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield knex_1.default.select("*").from('messages').orderBy('id', 'desc').offset(page * 20).limit(20);
        });
    }
}
exports.Message = Message;
