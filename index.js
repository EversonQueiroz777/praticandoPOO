import {Aluno} from "./Aluno.js";
import {Professor} from "./Professor.js";
import {IntegranteEscolar} from "./IntegranteEscolar.js";

let aluno = new Aluno("Everson", "ADS", "12345678910");
let professor = new Professor("Jhonson", "ADS", "12345678920");

professor.contratar("Professor");
console.log(professor);

professor.demitir("Jhonson", "Professor");

console.log(professor);