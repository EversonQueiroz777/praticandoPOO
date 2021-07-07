import	{Aluno} from "./Aluno.js";

export class Curso{
    constructor(aluno, curso){
    this._aluno = aluno;
    this.curso = curso;
    }

    set aluno(novoValor){
        if(novoValor instanceof Aluno){
            this._aluno = novoValor;
        }
    }

    get aluno(){
        return this._aluno;
    }

    // matricularAluno(aluno, curso){

    // }
}