import { Funcionario } from "./Funcionario.js";

export class Assistente extends Funcionario{
    constructor(nome, cpf) {
        super(nome, cpf, 1200);
        this._bonificacao = 0.9;
    }
}