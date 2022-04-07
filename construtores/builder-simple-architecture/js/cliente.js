"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const construtorObjeto_1 = __importDefault(require("./construtor/construtorObjeto"));
let construtor = new construtorObjeto_1.default();
construtor.setAtributo2("B");
construtor.setAtributo1("A");
construtor.setAtributo3("C");
let objeto = construtor.obterObjeto();
