import {Aluno} from "./Aluno.js";
import {Curso} from "./Curso.js";

let aluno = new Aluno("Everson", "1122334455");

let primeiroCurso = new Curso(aluno, "Analise e Desenvolvimento de Sistemas");

console.log(primeiroCurso);