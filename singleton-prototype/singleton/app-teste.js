"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_teste2_1 = __importDefault(require("./singleton-teste2"));
let obj = singleton_teste2_1.default.obterInstancia();
obj.atributo = '100';
let obj2 = singleton_teste2_1.default.obterInstancia();
let obj3 = singleton_teste2_1.default.obterInstancia();
obj3.atributo = '200';
console.log('Atributo: ' + obj.atributo);
