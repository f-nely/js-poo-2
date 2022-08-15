import { Cliente } from "./Cliente.js";
import { Diretor } from "./Diretor.js";
import { Gerente } from "./Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Ane', 10000, 10046333002);
diretor.cadastrarSenha('3030');

const gerente = new Gerente('Ricardo', 5000, 80987437054);
gerente.cadastrarSenha('4040');

const cliente = new Cliente('Taylor', 98938668045, '1010');

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '3030');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '4040');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '1010');

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);

