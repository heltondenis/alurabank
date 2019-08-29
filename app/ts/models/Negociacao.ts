class Negociacao {

    constructor(data, quantidade, valor) {

        // _ significa que as propriedades não poderão ser acessadas fora da classe
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor; 
    }

    get data() {
        
        return this._data;
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }

    get volume() {
        
        return this._quantidade * this._valor;
    }
}