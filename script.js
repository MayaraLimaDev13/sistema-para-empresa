class Funcionario {
    constructor(nome,idade,cargo){  
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }

    trabalhar() {
        return `Realizo as tarefas do cargo de ${this.cargo}.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, departamento){  
    super(nome, idade, 'gerente')
    this.departamento = departamento;
    }
    gerenciar() {
        return  `Gerencio o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem){
        super(nome, idade, 'desenvolvedor')
        this.linguagem = linguagem;
    }

    programar() {
        return `Programo na linguagem ${this.linguagem}.`;
    }
}




function exibirErro(mensagem){
    document.getElementById('resultado').innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
}

function criarFuncionario(){
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cargo = document.getElementById('cargo').value;

    try {
        if (!nome || isNaN(idade) || idade <= 0) {
          throw new Error('Preencha os campos corretamente.');
        }

        let funcionario;

    if (cargo === 'gerente') {
        const departamento = document.getElementById('departamento').value;
        if (!departamento) {
          throw new Error('Departamento é obrigatório para gerentes.');
        }

        funcionario = new Gerente(nome, idade, departamento);

    } else if (cargo === 'desenvolvedor') {
        const linguagem = document.getElementById('linguagem').value;
        if (!linguagem) {
          throw new Error('Linguagem de programação é obrigatória para desenvolvedores.');
        }

        funcionario = new Desenvolvedor(nome, idade, linguagem);

    } else {
        throw new Error('Cargo inválido.');
    }

    exibirResultado(funcionario);
        } catch (error) {
        exibirErro(error.message);
        }
    }


    function exibirResultado(funcionario) {
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `
          <p>${funcionario.seApresentar()}</p>
          <p>${funcionario.trabalhar()}</p>
          ${
            funcionario instanceof Gerente
              ? `<p>${funcionario.gerenciar()}</p>`
              : funcionario instanceof Desenvolvedor
                ? `<p>${funcionario.programar()}</p>`
                : ''
          }
        `;
    }