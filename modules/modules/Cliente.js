class Cliente {

  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  ola() {
    return `Olá ${this.nome} ${this.sobrenome}, tudo bem?`;
  }

}

export default Cliente;