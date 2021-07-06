export class Aluno{
    registroDoAluno = 0;
    constructor(nome, curso, cpf){
        this.nome = nome;
        this._curso = curso;
        this._cpf = cpf;
        Aluno.registroDoAluno += 1;
    }

    get cpf(){
        return this._cpf;
    }
}