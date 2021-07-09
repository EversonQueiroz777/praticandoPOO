export class IntegranteEscolar {
  constructor(nome, curso, cpf) {
    this.nome = nome;
    this._curso = curso;
    this._cpf = cpf;
  }

  get cpf() {
    return this._cpf;
  }

  contratar(cargo) {
    this.cargo = cargo;
    console.log(
      `${this.nome} foi contratado(a) como ${this.cargo} e seus dados já estão registrados no nosso bancos de dados.`
    );
  }

  demitir(nome, cargo) {
    if(nome == this.nome && cargo == this.cargo){
        console.log(`${this.nome} anteriormente com o cargo de ${this.cargo}, foi desligado da instituição`);
        this.cargo = "";
    }
  }
}
