class ControleIluminacao {
    constructor() {
        if (ControleIluminacao.instance) {
            return ControleIluminacao.instance;
        }
        ControleIluminacao.instance = this;
        this.observers = [];
        this.luzes = {};
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.luzes));
    }

    toggleLight(codigoComodo) {
        if (this.luzes[codigoComodo]) {
            this.luzes[codigoComodo] = false;
        } else {
            this.luzes[codigoComodo] = true; 
        }
        this.notifyObservers();
    }
}

class LightStatus {
    constructor(codigoComodo) {
        this.codigoComodo = codigoComodo;
        this.statusElement = document.getElementById(`${codigoComodo}Status`);
    }

    update(luzes) {
        const status = luzes[this.codigoComodo] ? "Ligada" : "Desligada";
        this.statusElement.innerText = `Status: ${status}`;
    }
}

const controleIluminacao = new ControleIluminacao();
controleIluminacao.addObserver(new LightStatus('sala'));
controleIluminacao.addObserver(new LightStatus('cozinha'));
controleIluminacao.addObserver(new LightStatus('quarto'));
controleIluminacao.addObserver(new LightStatus('banheiro'));

