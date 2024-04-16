class ContaBancaria {
    constructor() {
        this.saldo = 0;
    }

    depositar(valor) {
        if(valor > 0) {
            this.saldo += valor;
            return true;
        } else {
            return false;
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }
}

const conta = new ContaBancaria();

const depositarBtn = document.getElementById("depositarBtn");
const sacarBtn = document.getElementById("sacarBtn");
const valorInput = document.getElementById("valor");
const carteira = document.getElementById("carteira");
const mensagem = document.getElementById("mensagem");

depositarBtn.addEventListener("click", () => {
    const valor = parseFloat(valorInput.value);
    if (isNaN(valor) || valor <= 0) {
        mensagem.textContent = "Insira um valor válido."
    } else {
        if (conta.depositar(valor)) {
            atualizarCarteira();
            mensagem.textContent = "Depósito efetuado com sucesso."
        } else {
            mensagem.textContent = "Falha no depósito. Insira um valor válido."
        }
    }
    clearInput();
});

sacarBtn.addEventListener("click", () => {
    const valor = parseFloat(valorInput.value);
    if (isNaN(valor) || valor <= 0) {
        mensagem.textContent = "Insira um valor válido."
    } else {
        if (conta.sacar(valor)) {
            atualizarCarteira();
            mensagem.textContent = "Saque efetuado com sucesso.";
        } else {
            mensagem.textContent ="Fundos insuficientes"
        }
    }
    clearInput
});

function atualizarCarteira() {
    carteira.textContent = `Carteira: $${conta.saldo.toFixed(2)}`
}

function clearInput() {
    valorInput.value = "";
}