"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prototype_class2_1 = __importDefault(require("./prototype-class2"));
const prototype_class_1 = __importDefault(require("./prototype-class"));
let pessoa = new prototype_class_1.default('Isabelle');
let pessoa2 = pessoa.copiar();
let outraCoisa = new prototype_class2_1.default('Leandro');
let variavel;
variavel = pessoa.copiar();
