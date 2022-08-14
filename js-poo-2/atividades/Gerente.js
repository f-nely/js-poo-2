import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{
    constructor(nome, cpf) {
        super(nome, cpf, 2400);
        this._bonificacao = 1.2;
    }
}