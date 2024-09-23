// Classe base Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }
  
    trabalhar() {
      return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
  }
  
  // Classe Gerente que herda de Funcionario
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo); // Chama o construtor da superclasse
      this.departamento = departamento;
    }
  
    gerenciar() {
      return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
  }
  
  // Classe Desenvolvedor que herda de Funcionario
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo); // Chama o construtor da superclasse
      this.linguagem = linguagem;
    }
  
    programar() {
      return `${this.nome} está programando em ${this.linguagem}.`;
    }
  }
  
  // Função para exibir erro no DOM
  function exibirErro(mensagem) {
    const erroDiv = document.getElementById('erro');
    erroDiv.textContent = mensagem;
  }
  
  // Função para exibir resultado no DOM
  function exibirResultado(mensagem) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = mensagem;
  }
  
  // Função para cadastrar funcionário
  function cadastrarFuncionario() {
    // Limpa mensagens anteriores
    exibirErro('');
    exibirResultado('');
  
    try {
      const nome = document.getElementById('nome').value;
      const idade = document.getElementById('idade').value;
      const cargo = document.getElementById('cargo').value;
      const departamento = document.getElementById('departamento').value;
      const linguagem = document.getElementById('linguagem').value;
  
      if (!nome || !idade || !cargo) {
        throw new Error('Preencha todos os campos obrigatórios (Nome, Idade e Cargo).');
      }
  
      let funcionario;
  
      if (cargo === 'gerente') {
        if (!departamento) {
          throw new Error('Preencha o campo "Departamento" para o cargo de Gerente.');
        }
        funcionario = new Gerente(nome, idade, cargo, departamento);
        exibirResultado(`${funcionario.seApresentar()} ${funcionario.gerenciar()}`);
      } else if (cargo === 'desenvolvedor') {
        if (!linguagem) {
          throw new Error('Preencha o campo "Linguagem de Programação" para o cargo de Desenvolvedor.');
        }
        funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        exibirResultado(`${funcionario.seApresentar()} ${funcionario.programar()}`);
      }
    } catch (error) {
      exibirErro(error.message);
    }
  }
  
  // Função para exibir os campos certos com base no cargo selecionado
  document.getElementById('cargo').addEventListener('change', function() {
    const cargoSelecionado = this.value;
    const campoDepartamento = document.getElementById('campo-departamento');
    const campoLinguagem = document.getElementById('campo-linguagem');
  
    if (cargoSelecionado === 'gerente') {
      campoDepartamento.style.display = 'block';
      campoLinguagem.style.display = 'none';
    } else if (cargoSelecionado === 'desenvolvedor') {
      campoDepartamento.style.display = 'none';
      campoLinguagem.style.display = 'block';
    } else {
      campoDepartamento.style.display = 'none';
      campoLinguagem.style.display = 'none';
    }
  });
  