"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var soma_1 = __importDefault(require("./soma"));
var multiplicacao_1 = __importDefault(require("./multiplicacao"));
console.log(soma_1.default());
console.log(multiplicacao_1.default());
var novo = require('./novo');
console.log(novo.digaOi('Ana'));
