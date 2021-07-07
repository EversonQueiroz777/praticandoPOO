export class Aluno {
  static alunosMatriculados = 0;
  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
    Aluno.alunosMatriculados += 1;
  }

  get cpf() {
    return this._cpf;
  }

}
