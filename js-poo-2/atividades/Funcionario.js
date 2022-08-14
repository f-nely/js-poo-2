export class Funcionario {
    constructor(nome, cpf, salario) {
        this.nome = nome;
        this.cpf = cpf;
        this._salario = salario;
        this._bonificacao;
    }
}