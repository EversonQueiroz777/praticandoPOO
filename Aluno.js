import { IntegranteEscolar } from "./IntegranteEscolar.js";

export class Aluno extends IntegranteEscolar {
  static alunosMatriculados = 0;
  constructor(nome, curso, cpf) {
    super(nome, curso, cpf);
    Aluno.alunosMatriculados += 1;
  }

}
