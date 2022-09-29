class Cliente {
    Nome
    Cpf
    DataNascimento
    constructor(nome, cpf, dataNascimento) {
        this.Nome = nome
        this.Cpf = cpf
        this.DataNascimento = dataNascimento
    }
}
class PacoteViagem {
    Titular
    PassagemIda
    PassagemVolta
    ValorTotal
    constructor(titular, passagemIda, passagemVolta, valorTotal) {
        this.Titular = titular
        this.PassagemIda = passagemIda
        this.PassagemVolta = passagemVolta
        this.ValorTotal = valorTotal
    }

}
class Voo {
    Empresa
    Numero
    Data
    Horario
    LocalPartida
    LocalDestino
    constructor(empresa, numero, data, horario, localPartida, localDestino) {
        this.Empresa = empresa
        this.Numero = numero
        this.Data = data
        this.Horario = horario
        this.LocalPartida = localPartida
        this.LocalDestino = localDestino
    }
}
class PassagemAerea {
    Assento
    PrimeiraClasse
    Valor
    Passageiro
    Voo
    constructor(assento, primeiraClasse, valor, passageiro, voo) {
        this.Assento = assento
        this.PrimeiraClasse = primeiraClasse
        this.Valor = this.CalcularValor(valor)
        this.Passageiro = passageiro
        this.Voo = voo
    }
    CalcularValor(valor) {
        if (this.PrimeiraClasse == true) {
            return valor * 1.5
        }
        return valor
    }
    ExibirResumo() {
        console.log("Passagem em nome de:", this.Passageiro.Nome, "No assento:", this.Assento, "Do voo:", this.Voo.Numero, "Com destino:", this.Voo.LocalDestino)
    }
}
let cliente = new Cliente("Sara", "22222200022", "20/07/2002")
let voo = new Voo("Azul", "200", "28/09/2022", "22:10", "São Paulo", "Natal")

let passagemAerea = new PassagemAerea(20, true, 1200, cliente, voo)
passagemAerea.CalcularValor()
passagemAerea.ExibirResumo()


