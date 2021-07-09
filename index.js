import { Aluno } from "./Aluno.js";
import { Curso } from "./Curso.js";
import { Professor } from "./Professor.js";

const disciplinas = ["lógica", "fundamentos", "IOT"];

let professor = new Professor("Jhonson", "ADS", "12345678920", "4000");
let curso = new Curso("Analise e Desenvolvimento de Sistemas",professor, disciplinas)
let aluno = new Aluno("Everson", curso, "12345678910");


