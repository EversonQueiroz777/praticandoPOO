import { IntegranteEscolar } from "./IntegranteEscolar.js";

export class Professor extends IntegranteEscolar {
  static numeroDeProfessores = 0;
  constructor(nome, curso, cpf, salario) {
    super(nome, curso, cpf);

    this._salario = salario;
    Professor.numeroDeProfessores += 1;
  }

  set salario(novoValor) {
    if (this.salario instanceof Professor) {
      this.salario = novoValor;
    }else{
        throw new Error("Você não deve alterar o salario de um professor diretamente.");
    }
  }
  get salario() {
    return this._salario;
  }
}
