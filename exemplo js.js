let notas = [4, 10, 8]

notas.forEach(function(nota){
		console.log(nota)
})

--------------

let notas = [10, 15, 20]

let notasDobradas = notas.map(function(nota) {
	return nota * 2
})
console.log(notasDobradas)

---------

function AumentarTemperaturasEm5(temperaturas) {
  console.log(temperaturas)
  let respAltTemp = temperaturas.map(function(temperatura){
    return temperatura + 5
  })
  return respAltTemp
}

// Não modifique as linhas abaixo
console.log(AumentarTemperaturasEm5([-5, 12, -15, 18, 13])) // [0, 17, -10, 23, 18]
console.log(AumentarTemperaturasEm5([5, 20, 10])) // [10, 25, 15]

-------------------------

let notas = [10, 3, 5]

let soma = notas.reduce(function(total, atual) {
	return total + atual
}, 0)

console.log(soma)

-------------

let notas = [10, 5, 15, 20]

let valorInicial = 0;

let soma = notas.reduce(function(total, atual) {
    console.log(`Total é ${total}`)
    console.log(`Atual é ${atual}`)
    console.log("---")
    return total + atual
}, valorInicial);

console.log(`A soma é ${soma}`)

-------

let notas = [10, 5, 15, 20]
// calcule o soma dessas notas com reduce

let soma = notas.reduce(function(total,atual){
  return total + atual
},0)
-- ============================
function adicionarNota(notas, nota) {
   console.log(notas)
   notas.push(nota)
   return notas
}

function obterTotalDeNotas(notas) {
  console.log(notas)
  console.log(notas.length)
  return notas.length
}

function obterPrimeiraNota(notas) {
  console.log(notas[0])
  return notas[0]
}

function obterUltimaNota(notas) {
  console.log(notas)
  console.log(notas[notas.length -1])
  return notas[notas.length -1]
}

function obterSomaDasNotas(notas) {
  console.log(notas)
  let soma = notas.reduce(function(total,atual){
    return total + atual
  },0)
  console.log(soma)
  return soma

}

function obterMediaDasNotas(notas) {
  console.log('function obterMediaDasNotas: '+notas)
  console.log('-------------------------------------------')
  console.log(obterSomaDasNotas(notas) / obterTotalDeNotas(notas) )
  return obterSomaDasNotas(notas) / obterTotalDeNotas(notas) 
}

function obterNotasAumentadasEm2(notas) {
  let notaAumentada = notas.map(function(nota){
    return nota + 2
  })
  console.log(notas)
  console.log(notaAumentada)
  return notaAumentada

}

-- 

usuarios.length  // propriedade da matriz usuarios, representa o tamanho ou quantidade de itens
usuarios.push("aaa") //metodo que incluir no final da matriz e retorno o novo comprimento


let numeros = [3,1,6]
let string = numeros.join("; ")

function nomesEmMaiusculas(nomes) {
  let nomesEmMaiusculas = nomes.map(function(nome){
    return nome.toUpperCase()
  })
  return nomesEmMaiusculas
}


function obterIniciais(nomes) {
  let novaMatriz = nomes.map(function(nome){
    return nome[0]
  })
  return novaMatriz
}



function obterUltimoCaracter(nomes) {
  let novaMatriz = nomes.map(function(nome){
    return nome[nome.length - 1]
  })
  return novaMatriz
}

function adicionarItem(itens, item) {
    itens.push(item).itens
    return itens
}
 
function exportarMinusculasCSV(itens) {
  let stringExport = itens.map(function(item){
    return item.toLowerCase()
  }).join(", ")
  console.log(stringExport)
  return stringExport

}

--- objetos -------
function obterNomeDoCurso(curso) {
  return curso.nome;

}

// Não modifique as linhas abaixo
let curso1 = {
  nome: "Aprenda lógica de programação",
  estaCompleto: true
};
let curso2 = {
  nome: "Aprenda JavaScript",
  estaCompleto: false
};

console.log(obterNomeDoCurso(curso1)); // "Aprenda lógica de programação"
console.log(obterNomeDoCurso(curso2)); // "Aprenda JavaScript"

--------------

function atualizarUsuario(usuario) {
  usuario.pagou = true
  return usuario

}

// Não modifique as linhas abaixo
atualizarUsuario({nome: "fred", pagou: false});
atualizarUsuario({nome: "elisa", pagou: false});

--------------------


let usuario = {
	"login:" "nasa",
	"id:" 848102,
	"nome:" "NASA",
}

console.log(usuario.nome); // NASA
console.log(usuario.nome.toLowerCase()); // nasa
console.log(usuario.nome[0]); // N
console.log(usuario.nome[usuario.nome.length - 1]); // A


-------------------------------
function obterNomeCompletoFormatado(usuario) {
    return usuario.nome+" "+usuario.sobrenome.toUpperCase();    
}

// Não modifique as linhas abaixo
let usuario1 = {
    nome: "Samanta",
    sobrenome: "Damaris",
    idade: 20
};

let usuario2 = {
    nome: "Charlinson",
    sobrenome: "Santos",
    idade: 31
};
console.log(obterNomeCompletoFormatado(usuario1)); // "Samanta DAMARIS"
console.log(obterNomeCompletoFormatado(usuario2)); // "Charlinson SANTOS"
---------------------	
function obterIniciais(usuario) {
  return `${usuario.nome[0]+usuario.sobrenome[0]}`   
}

// Não modifique as linhas abaixo
let usuario1 = {
    nome: "João",
    sobrenome: "Ramiris",
    idade: 20
};

let usuario2 = {
    nome: "Júlia",
    sobrenome: "Pereira",
    idade: 31
};
console.log(obterIniciais(usuario1)); // "JR"
console.log(obterIniciais(usuario2)); // "JP"

--------------------------------------

function obterDescricaoPessoal(person) {
    return `${person.name} (${person.id}) é um ${person.bio} que vive em ${person.location} com ${person.followers} seguidores.`;
}

// Não modifique as linhas abaixo
let person = {
  "login": "janainajunqueira",
  "id": 3948477,
  "type": "User",
  "name": "Janaína Junqueira",
  "blog": "https://blogjanajuju.online",
  "location": "Florianópolis",
  "bio": "Google Developer Expert • Microsoft MVP • Web Consultant",
  "public_repos": 451,
  "public_gists": 11,
  "followers": 837,
  "following": 294,
  "created_at": "2012-09-12T11:12:34Z",
};

console.log(obterDescricaoPessoal(person));

--------------------------	

function obterMensagemDeVotacao(usuario) {
    let mensagem;
   if (usuario.idade>= 16){
       mensagem = "Você pode votar";
   } else {
       mensagem = "Você não pode votar";
   }
   return mensagem
}

// Não modifique as linhas abaixo
let usuario1 = {
    nome: "Samanta",
    sobrenome: "Duarte",
    idade: 15
};

let usuario2 = {
    nome: "Carla",
    sobrenome: "Fortes",
    idade: 31
};

console.log(obterMensagemDeVotacao(usuario1)); // "Você não pode votar"
console.log(obterMensagemDeVotacao(usuario2)); // "Você pode votar"


-------------------------------------

function adicionarQuantidadeDeAulas(curso, total) {
    return curso.quantidadeDeAulas = total
}

// Não modifique as linhas abaixo
let curso1 = {
    nome: "Aprenda a programar",
    estaCompleto: true
};

let curso2 = {
    nome: "Aprenda JavaScript",
    estaCompleto: false
};

adicionarQuantidadeDeAulas(curso1, 80); // deve adicionar quantidadeDeAulas: 80 ao objeto curso1
adicionarQuantidadeDeAulas(curso2, 60); // deve adicionar quantidadeDeAulas: 60 ao objeto curso2

-----------------------------
function obterNumeroDeRotulos(jogo) {
    return jogo.rotulos.length;
}

// Não modifique as linhas abaixo
let jogo = {
    nome: "Banco Imobiliário",
    rotulos: ["Estratégia", "Dinheiro", "Família"],
    anoDeLancamento: 1935
};

console.log(obterNumeroDeRotulos(jogo)); // 3


--------------------

function obterPrimeiraNota(estudante) {
    return estudante.notas[0];
}

// Não modifique as linhas abaixo
let estudante = {
    nome: "Diego",
    idade: 24,
    notas: [3, 5, 5, 4, 8]
};

console.log(obterPrimeiraNota(estudante)); // 3

----------------------
function obterUltimaNota(estudante) {
    return estudante.notas[estudante.notas.length - 1]
}

// Não modifique as linhas abaixo
let estudante = {
    nome: "Samara Dias",
    idade: 24,
    notas: [3, 5, 5, 4, 8]
};

console.log(obterUltimaNota(estudante));
--------------------------

function obterSomaDasNotas(estudante) {
    let soma = estudante.notas.reduce(function(total, atual) {
        return total + atual
    }, 0);
    console.log(soma)
    return soma
}

// Não modifique as linhas abaixo
let estudante = {
    nome: "Evandro Carneiro",
    idade: 16,
    notas: [3, 5, 5, 4, 8]
};

console.log(obterSomaDasNotas(estudante));

----------------------------------------------------
function obterAno(estudante) {
    return estudante.curso.ano;
}

function obterNota(estudante) {
    return estudante.curso.nota;
}

// Não modifique as linhas abaixo
let estudante = {
    nome: "Andres",
    idade: 24,
    curso: {
        ano: 2020,
        nota: 8
    }
};

console.log(obterAno(estudante)); // 2020
console.log(obterNota(estudante)); // 8
-------------------------

function obterNomeCompleto(tweet) {
    return tweet.author.details.firstName+" "+tweet.author.details.lastName;
}

// Não modifique as linhas abaixo
let tweet = {
    number: 4941484847594802124051,
    message: `A programação é uma arte rara.
    Quem a entender, vai dominar o mundo.`,
    link: "www.wikipedia.org",
    created_at: "2022-01-03 11:46:00",
    author: {
        number: 40493848,
        details: {
            firstName: "Mara",
            lastName: "Siqueira",
        },
        handle: "MaraSiq"
    }
};

console.log(obterNomeCompleto(tweet)); // "Mara Siqueira"

----------------------
function obterSomaDeTodasAsNotas(notas) {
   let soma = notas.reduce(function(total,atual){
     console.log(total)
      return total + atual.nota
    },0);

   return soma;
}

// Não modifique as linhas abaixo
let notas = [
  {
    nome: "Sandra Assis",
    nota: 8
  },
  {
    nome: "Érica Blanck",
    nota: 3
  }
];

console.log(obterSomaDeTodasAsNotas(notas));

--------------------------
let professor = {
    nome: "Luana",
    sobrenome: "Borges",
    fazerChamada: function(alunos) {
        alunos.map(function(aluno) {
            console.log(`${aluno}`)
        })
    }
};


---------------------

function criarTarefa(dados) {
    console.log("Dados recebidos:\n", dados); // ajuda você a visualizar o objeto recebido

    let objetoRetorno = {
        // Insira seu código aqui 👇🏻
			titulo: dados.tarefaTitulo, // Título da tarefa
			estaCompleta: dados.completa, // Booleano indicando se a tarefa está completa ou não
			categoria: dados.categoriaEscolhida, // Categoria da tarefa
			autor: { // Objeto aninhado contendo os dados do usuário
			nome: dados.usuario.nome,
			sobrenome: dados.usuario.sobrenome
		}        
    };

    return objetoRetorno;
}

// ---- Não mexa no código que está abaixo desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>App Lista de tarefas</h2>
    <form id="dv-form-lista-a-fazer">
        <div>
            <label for="dv-titulo-a-fazer">Adicionar tarefa</label>
            <input type="string" required placeholder="Título da tarefa" id="dv-titulo-a-fazer">
            <br/><br/>
        </div>
        <label>
            <input type="checkbox" id="dv-a-fazer-completo" value="" /> Está completa?
            <br/><br/>
        </label>
        <select required id="dv-categoria-a-fazer">
            <option value="">Selecione a categoria</option>
            <option value="trabalho">Trabalho</option>
            <option value="pessoal">Pessoal</option>
        </select>
        <input type="submit" value="Adicionar" />
    </form>
    <ul id="dv-lista-a-fazer"></ul>
</div>
`);

let dvForm = document.querySelector("#dv-form-lista-a-fazer");
let dvTitulo = document.querySelector("#dv-titulo-a-fazer");
let dvCompleto = document.querySelector("#dv-a-fazer-completo");
let dvCategoria = document.querySelector("#dv-categoria-a-fazer");
let dvLista = document.querySelector("#dv-lista-a-fazer");

function formatar(tarefa) {
    console.log(tarefa.estaCompleta)
    let titulo = ''
    titulo = (tarefa.estaCompleta)? `<del>${tarefa.titulo}</del>`: tarefa.titulo;
   
    let complemento = (tarefa.estaCompleta)? "finalizada":"iniciada";
    dvLista.innerHTML += `<li><div class="card">A tarefa <strong>${titulo}</strong> foi ${complemento} pelo usuário ${tarefa.autor.nome} ${tarefa.autor.sobrenome}</strong> e está na categoria ${tarefa.categoria}</div></li>`;
}

dvForm.addEventListener("submit", event => {
    event.preventDefault();
    let autor = {
        nome: "Marcio",
        sobrenome: "Gomes"
    };
    let valores = {
        tarefaTitulo: dvTitulo.value,
        completa: dvCompleto.checked,
        categoriaEscolhida: dvCategoria.value,
        usuario: autor
    };
    let tarefa = criarTarefa(valores);
    dvTitulo.value = "";
    formatar(tarefa);
});

----------------

function obterNomeDoPrimeiroCurso(cursos) {
    return cursos[0].nome
}

// Não modifique as linhas abaixo
let cursos = [
  {
    nome: "Introdução à programação",
    description: "Aprenda os conceitos mais importantes da programação usando JavaScript.",
    isCompleted: true
  },
  {
    nome: "JavaScript básico",
    description: "Aprenda Javascript de um jeito fácil e rápido.",
    isCompleted: false
  }
];

console.log(obterNomeDoPrimeiroCurso(cursos));

----------------

function obterNomeCompletoDoUltimoUsuario(usuarios) {
    return usuarios[usuarios.length - 1].nome+" "+usuarios[usuarios.length - 1].sobrenome
}

// Não modifique as linhas abaixo
let usuarios = [
  {
    nome: "Samuel",
    sobrenome: "Bastos",
    idade: 21,
  },
  {
    nome: "Carla",
    sobrenome: "Nogueira",
    idade: 38,
  }
];

console.log(obterNomeCompletoDoUltimoUsuario(usuarios));

-----------------------

function obterNotaDoPrimeiroAluno(estudantes) {
  return estudantes[0].aprendizagemDeProgramacao.nota
}

// Não modifique as linhas abaixo
let estudantes = [
  {
    nome: "Samuel Dias",
    idade: 24,
    aprendizagemDeProgramacao: {
        anoInicio: 2020,
        nota: 8
    }
  },
  {
    nome: "Carla Ferreira",
    idade: 31,
    aprendizagemDeProgramacao: {
        anoInicio: 2021,
        nota: 9
    }
  }
];

console.log(obterNotaDoPrimeiroAluno(estudantes));

-----------------------------------------

function obterSomaDeNotasAninhadas(estudantes) {
   let soma = estudantes.reduce(function(total,atual){
     console.log(total)
      return total + atual.aprendizagemDeProgramacao.nota
    },0);

   return soma;    
}

// Não modifique as linhas abaixo
let estudantes = [
  {
    nome: "Diana Kelling",
    idade: 24,
    aprendizagemDeProgramacao: {
        anoInicio: 2020,
        nota: 8
    }
  },
  {
    nome: "Marcelo Kioski",
    idade: 31,
    aprendizagemDeProgramacao: {
        anoInicio: 2021,
        nota: 9
    }
  }
];

console.log(obterSomaDeNotasAninhadas(estudantes));

-------------------------------------------
function obterTitulosDasReceitas(receitas) {
    return receitas.map(function(receita) {
        return receita.titulo;
    });
}

// Exemplo de uso - não mexa aqui
let receitas = [
    {
        titulo: "Macarrão",
        preparacaoEmMinutos: 30,
        classificacao: 4.5
    },
    {
        titulo: "Lasanha",
        preparacaoEmMinutos: 45,
        classificacao: 3.9
    }
];

console.log(obterTitulosDasReceitas(receitas));


---------------------------------------
function obterNomesCompletos(usuarios) {
  return usuarios.map(function(usuario){
    return usuario.nome+" "+usuario.sobrenome
  })
}

// Não modifique as linhas abaixo
let usuarios = [
  {
    nome: "Bárbara",
    sobrenome: "Silva",
    idade: 21,
  },
  {
    nome: "Carlos",
    sobrenome: "Bonaparte",
    idade: 38,
  }
];

console.log(obterNomesCompletos(usuarios));
------------------------------


function criarTarefa(dados) {
    console.log("Dados recebidos:\n", dados); // ajuda você a visualizar o objeto recebido

    let objetoRetorno = {
			titulo: dados.tarefaTitulo, // Título da tarefa
			estaCompleta: dados.completa, // Booleano indicando se a tarefa está completa ou não
			categoria: dados.categoriaEscolhida, // Categoria da tarefa
			autor: { // Objeto aninhado contendo os dados do usuário
			nome: dados.usuario.nome,
			sobrenome: dados.usuario.sobrenome
		}        
    };

    return objetoRetorno;
}

function adicionarTarefa(tarefas, tarefa) {
    return tarefas.push(tarefa);
}

function conteTarefa(tarefas) {
    return tarefas.length;
}

function primeiraTarefaTitulo(tarefas) {
    console.log(tarefas[0])
    return tarefas[0];
}

function ultimaTarefaTitulo(tarefas) {
    console.log(tarefas[tarefas.length -1])
    return tarefas[tarefas.length -1];
}

function exportacaoDeTitulos(tarefas) {
    return tarefas.map(function(tarefas) {
        return tarefas.titulo;
    });
}

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>App lista de tarefas II</h2>
    <form id="dv-form-lista-tarefa">
        <div>
            <label for="dv-titulo-tarefa">Adicione a tarefa</label>
            <input type="string" required placeholder="Título da tarefa" id="dv-titulo-tarefa">
            <br><br>
        </div>
        <label>
            <input type="checkbox" id="dv-tarefa-completa" value="" /> Está completa?<br><br>
        </label>
        <select required id="dv-categoria-tarefa">
            <option value="">Selecione a categoria</option>
            <option value="trabalho">Trabalho</option>
            <option value="pessoal">Pessoal</option><br><br>
        </select>
        <input type="submit" value="Adicionar" />
    </form>
    <ul id="dv-lista-tarefa"></ul>
</div>
`);

let dvForm = document.querySelector("#dv-form-lista-tarefa");
let dvTitulo = document.querySelector("#dv-titulo-tarefa");
let dvcompleta = document.querySelector("#dv-tarefa-completa");
let dvCategoria = document.querySelector("#dv-categoria-tarefa");
let dvLista = document.querySelector("#dv-lista-tarefa");

let tarefas = [];

function formatar(tarefas) {
    dvLista.innerHTML = `<h3>Tarefas (${conteTarefa(tarefas)})</h3>`;
    tarefas.forEach(function(tarefa) {
        console.log(tarefa.estaCompleta)
        let titulo = ''
        titulo = (tarefa.estaCompleta)? `<del>${tarefa.titulo}</del>`: tarefa.titulo;
        
        let complemento = (tarefa.estaCompleta)? "finalizada":"iniciada";

        dvLista.insertAdjacentHTML("beforeend", `<li><div class="card">&nbsp;<strong>${titulo}</strong> - ${complemento}, criada por ${tarefa.autor.nome} ${tarefa.autor.sobrenome}</strong> e está na categoria ${tarefa.categoria}</div></li>`);
    });
}

dvForm.addEventListener("submit", event => {
    event.preventDefault();
    let autor = {
        nome: "Lídia",
        sobrenome: "Messias"
    };
    let valores = {
        tarefaTitulo: dvTitulo.value,
        completa: dvcompleta.checked,
        categoriaEscolhida: dvCategoria.value,
        usuario: autor
    };
  
    let tarefa = criarTarefa(valores);
    tarefas = adicionarTarefa(tarefas, tarefa);
    formatar(tarefas);
    //reset do formulário
    dvTitulo.value = "";
    dvcompleta.checked = false;
    // Log o resultado de primeiraTarefaTitulo(), ultimoTarefaTitulo() e exportacaoDeTitulos()
    console.log("Primeiro título de tarefas: " + primeiraTarefaTitulo(tarefas));
    console.log("Último título de tarefas: " + ultimaTarefaTitulo(tarefas));
    console.log("Títulos exportados: ", exportacaoDeTitulos(tarefas));
});

-------------------------------------------


Conversa aberta. Uma mensagem lida.

Pular para o conteúdo
Como usar o Gmail com leitores de tela
1 de 24.207
curso lab365
Caixa de entrada
CELOS - Gerson Otávio de Souza
	
Anexos18:06 (há 3 horas)
	
para mim


Gerson Otávio de Souza

Divisão de Gestão de Tecnologia da Informação

CELOS - Fundação Celesc de Seguridade Social

(48) 3221-9579


CELOS 49 anos

...

[Mensagem cortada]  Exibir toda a mensagem
 Um anexo  •  Anexos verificados pelo Gmail
	
Obrigado.
Valeu!
Inscrição realizada.

let professor = {
    nome: "Luana",
    sobrenome: "Borges",
    fazerChamada: function(alunos) {
        alunos.map(function(aluno) {
            console.log(`${aluno}`)
        })
    }
};


---------------------

function criarTarefa(dados) {
    console.log("Dados recebidos:\n", dados); // ajuda você a visualizar o objeto recebido

    let objetoRetorno = {
        // Insira seu código aqui 👇🏻
            titulo: dados.tarefaTitulo, // Título da tarefa
            estaCompleta: dados.completa, // Booleano indicando se a tarefa está completa ou não
            categoria: dados.categoriaEscolhida, // Categoria da tarefa
            autor: { // Objeto aninhado contendo os dados do usuário
                  nome: dados.usuario.nome,
                  sobrenome: dados.usuario.sobrenome
            }        
    };

    return objetoRetorno;
}

// ---- Não mexa no código que está abaixo desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>App Lista de tarefas</h2>
    <form id="dv-form-lista-a-fazer">
        <div>
            <label for="dv-titulo-a-fazer">Adicionar tarefa</label>
            <input type="string" required placeholder="Título da tarefa" id="dv-titulo-a-fazer">
            <br/><br/>
        </div>
        <label>
            <input type="checkbox" id="dv-a-fazer-completo" value="" /> Está completa?
            <br/><br/>
        </label>
        <select required id="dv-categoria-a-fazer">
            <option value="">Selecione a categoria</option>
            <option value="trabalho">Trabalho</option>
            <option value="pessoal">Pessoal</option>
        </select>
        <input type="submit" value="Adicionar" />
    </form>
    <ul id="dv-lista-a-fazer"></ul>
</div>
`);

let dvForm = document.querySelector("#dv-form-lista-a-fazer");
let dvTitulo = document.querySelector("#dv-titulo-a-fazer");
let dvCompleto = document.querySelector("#dv-a-fazer-completo");
let dvCategoria = document.querySelector("#dv-categoria-a-fazer");
let dvLista = document.querySelector("#dv-lista-a-fazer");

function formatar(tarefa) {
    console.log(tarefa.estaCompleta)
    let titulo = ''
    titulo = (tarefa.estaCompleta)? `<del>${tarefa.titulo}</del>`: tarefa.titulo;
   
    let complemento = (tarefa.estaCompleta)? "finalizada":"iniciada";
    dvLista.innerHTML += `<li><div class="card">A tarefa <strong>${titulo}</strong> foi ${complemento} pelo usuário ${tarefa.autor.nome} ${tarefa.autor.sobrenome}</strong> e está na categoria ${tarefa.categoria}</div></li>`;
}

dvForm.addEventListener("submit", event => {
    event.preventDefault();
    let autor = {
        nome: "Marcio",
        sobrenome: "Gomes"
    };
    let valores = {
        tarefaTitulo: dvTitulo.value,
        completa: dvCompleto.checked,
        categoriaEscolhida: dvCategoria.value,
        usuario: autor
    };
    let tarefa = criarTarefa(valores);
    dvTitulo.value = "";
    formatar(tarefa);
});

----------------

function obterNomeDoPrimeiroCurso(cursos) {
    return cursos[0].nome
}

// Não modifique as linhas abaixo
let cursos = [
  {
    nome: "Introdução à programação",
    description: "Aprenda os conceitos mais importantes da programação usando JavaScript.",
    isCompleted: true
  },
  {
    nome: "JavaScript básico",
    description: "Aprenda Javascript de um jeito fácil e rápido.",
    isCompleted: false
  }
];

console.log(obterNomeDoPrimeiroCurso(cursos));

----------------

function obterNomeCompletoDoUltimoUsuario(usuarios) {
    return usuarios[usuarios.length - 1].nome+" "+usuarios[usuarios.length - 1].sobrenome
}

// Não modifique as linhas abaixo
let usuarios = [
  {
    nome: "Samuel",
    sobrenome: "Bastos",
    idade: 21,
  },
  {
    nome: "Carla",
    sobrenome: "Nogueira",
    idade: 38,
  }
];

console.log(obterNomeCompletoDoUltimoUsuario(usuarios));

-----------------------

function obterNotaDoPrimeiroAluno(estudantes) {
  return estudantes[0].aprendizagemDeProgramacao.nota
}

// Não modifique as linhas abaixo
let estudantes = [
  {
    nome: "Samuel Dias",
    idade: 24,
    aprendizagemDeProgramacao: {
        anoInicio: 2020,
        nota: 8
    }
  },
  {
    nome: "Carla Ferreira",
    idade: 31,
    aprendizagemDeProgramacao: {
        anoInicio: 2021,
        nota: 9
    }
  }
];

console.log(obterNotaDoPrimeiroAluno(estudantes));

-----------------------------------------

// Definição da classe
class Usuario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obterNomeCompleto() {
        // Mais adiante, você aprenderá como implementar este método
        return "Silvia Moreira";
    }
}

// Uso da classe
let usuario = new Usuario("Silvia", "Moreira");
console.log(usuario.obterNomeCompleto());

--------------------------------

// Definição da classe
class Usuario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    obterNomeCompleto(){
        return "Nome completo aqui";
    }

    podeVotar(){
        return true;
    }

    jaVotou(){
        return false;
    }

}

// Uso da classe
let usuario = new Usuario("Daniela", "Queiroz");
console.log(usuario.obterNomeCompleto());

--------------------

// Definição da classe
class User {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Implemente o método obterNomeCompleto()
    obterNomeCompleto() {
        return this.nome+" "+this.sobrenome;
    }
    
}

// Uso da classe
let samuel = new User("Samuel", "Bueno");
console.log(samuel.obterNomeCompleto());

let carla = new User("Carla", "Marins");
console.log(carla.obterNomeCompleto());

console.log("---");

----------------------------

// Definição da classe
class Receita {
    constructor(nome, calorias) {
        this.nome = nome;
        this.calorias = calorias;
    }
    
    // Implemente os métodos de instância ehBaixaCaloria() e ehAltaCaloria()
    ehBaixaCaloria() {
        return this.calorias <= 400;
    }

    ehAltaCaloria(){
        return this.calorias >= 600
    }
}

// Uso da classe
let macarrao = new Receita("Macarrão", 700);
console.log(macarrao.ehBaixaCaloria());
console.log(macarrao.ehAltaCaloria());

let salada = new Receita("Salada", 350);
console.log(salada.ehBaixaCaloria());
console.log(salada.ehAltaCaloria());


---------------------------

// Definição da classe
class Usuario {
    // Implemente os métodos: constructor, obterNomeCompleto, obterIniciais e podeVotar
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade
    }

    obterNomeCompleto() {
        return this.nome+" "+this.sobrenome;
    }

    obterIniciais(){
        return this.nome[0]+this.sobrenome[0];
    }

    podeVotar(){
        return this.idade >= 16;
    }
    
}

// Uso da classe
let sara = new Usuario("Sara", "Gomes", 17);
let cesar = new Usuario("César", "Assis", 13);
console.log("---");

----------------------------------------

// Definição da classe
class VariantesDoNome {
     constructor(nome) {
        this.nome = nome;
    }
    
    obterNumeroDeCaracteres() {
        return this.nome.length
    }
    
    obterMinusculo() {
        return this.nome.toLowerCase()
    }
    
    obterMaiusculo() {
        return this.nome.toUpperCase()
    }
}

// Uso da classe
let samuel = new VariantesDoNome("Samuel");
console.log(samuel.obterNumeroDeCaracteres());
console.log(samuel.obterMinusculo());
console.log(samuel.obterMaiusculo());

console.log("---");

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>Variação de Nomes</h2>
    <div>
        <label for="dv-seu-nome">
        <b>Seu nome<b></label><br><br>
        <input type="text" placeholder="Seu nome" id="dv-seu-nome" autocomplete="off">
    </div><br><br>

    <table border="1">
        <thead>
            <tr>
                <th width="200px">Variantes</th>
                <th>Resultados</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Número de caracteres</td>
                <td id="dv-resposta-1"></td>
            </tr>
            <tr>
                <td>Em Minúsculo</td>
                <td id="dv-resposta-2"></td>
            </tr>
            <tr>
                <td>Em Maiúsculo</td>
                <td id="dv-resposta-3"></td>
            </tr>
        </tbody>
    </table>
</div>
`);


let dvResposta1 = document.querySelector("#dv-resposta-1");
let dvResposta2 = document.querySelector("#dv-resposta-2");
let dvResposta3 = document.querySelector("#dv-resposta-3");

let dvNome = document.querySelector("#dv-seu-nome");

dvNome.addEventListener("keyup", () => {
    let variantesDoNome = new VariantesDoNome(dvNome.value);

    // try/catch permite testar o código antes que todos os
    // métodos de instância estejam implementados
    try {
        dvResposta1.textContent = variantesDoNome.obterNumeroDeCaracteres();
    } catch (erro) {console.log(erro)}

    try {
        dvResposta2.textContent = variantesDoNome.obterMinusculo();
    } catch (erro) {console.log(erro)}

    try {
        dvResposta3.textContent = variantesDoNome.obterMaiusculo();
    } catch (erro) {console.log(erro)}
});

--------------------------

// Definição da classe
class Estatistica {
    constructor(notas){
        this.notas = notas;
    }
    obterNumeroTotalDeNotas(){
        return this.notas.length;
    }
    obterPrimeiraNota(){
        return this.notas[0]
    }
    
    obterUltimaNota(){
        return this.notas[notas.length - 1]
    }
	
	obterSomaDasNotas(){
		let soma = 0;
		return this.notas.forEach(function(nota){
			soma = soma + nota;
		})
	}

	exportarCsv(){
		let arqCsv = this.notas.join(";");
		return arqCsv
	}

}

// Uso da classe
let notas = [8, 9, 5, 2, 9];
let suasNotas = new Estatistica(notas);

console.log(suasNotas.obterNumeroTotalDeNotas());
console.log(suasNotas.obterPrimeiraNota());
console.log(suasNotas.obterUltimaNota());
console.log(suasNotas.obterSomaDasNotas());
console.log(suasNotas.obterNotaMedia());
console.log(suasNotas.exportarCsv());

console.log("---");

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>Aplicativo Sala de Aula</h2>   
    <form id="dv-form-de-notas">
        <label for="dv-sua-nota">Sua nota:</label> <input type="number" min="0" max="10"
               required placeholder="Nota (0 a 10)" id="dv-sua-nota">&nbsp;
        <input type="submit" value="Adicionar" /><br><br>
    </form>
 
    <table border="1" id="dv-tabela-estatistica" center>
        <thead>
            <tr>
                <th width="33%">Número de provas realizadas</th>
                <th width="33%">Primeira nota enviada</th>
                <th>Última nota enviada</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table><br><br>
    <table border="1" id="dv-tabela-estatistica-2" center>
        <thead>
            <tr>
                <th width="33%">Soma</th>
                <th width="33%">Nota Média</th>
                <th>Exportar para CSV</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</div>
`);


let dvFormDeNotas = document.querySelector("#dv-form-de-notas");
let dvSuaNota = document.querySelector("#dv-sua-nota");

let dvNotas = [10, 9, 3, 5, 8];

function formatar(dvNotas) {
    let dvEstatistica = new Estatistica(dvNotas);
    console.log("Notas: " + dvNotas.join(', '));
    let tbody = document.querySelector("#dv-tabela-estatistica tbody");
    tbody.innerHTML = `<tr>
    <td>${dvEstatistica.obterNumeroTotalDeNotas()}</td>
    <td>${dvEstatistica.obterPrimeiraNota()}</td>
    <td>${dvEstatistica.obterUltimaNota()}</td>
    </tr>`;

    let tbody2 = document.querySelector("#dv-tabela-estatistica-2 tbody");
    tbody2.innerHTML = `<tr>
    <td>${dvEstatistica.obterSomaDasNotas()}</td>
    <td>${dvEstatistica.obterNotaMedia()}</td>
    <td>${dvEstatistica.exportarCsv()}</td>
    </tr>`;
}

dvFormDeNotas.addEventListener("submit", event => {
    event.preventDefault();
    let newGrade = Number.parseInt(dvSuaNota.value, 10);
    dvNotas.push(newGrade);
    dvSuaNota.value = "";
    formatar(dvNotas);
})

formatar(dvNotas);




----------------



let csvContent = "data:text/csv;charset=utf-8,";

data.forEach(function(rowArray) {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
});


--------------------------


// Definição da classe
class Estatistica {
    constructor(notas) {
        this.notas = notas;
    }

    obterNumeroTotalDeNotas()  {
        return this.notas.length;
    }

    obterPrimeiraNota() {
        return this.notas[0];
    }

    obterUltimaNota() {
        return this.notas[this.notas.length - 1];
    }
    
    obterSomaDasNotas() {
        let soma = 0;
        this.notas.forEach(function(nota) {
            soma = soma + nota;
        });
        return soma;
    }

    obterNotaMedia() {
        let soma = 0;
        this.notas.forEach(function(nota) {
            soma = soma + nota;
        });
        return soma / this.notas.length;
    }

    exportarCsv() {
        return this.notas.join(", ");
    }
}

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>Aplicativo Sala de Aula</h2>   
    <form id="dv-form-de-notas">
        <label for="dv-sua-nota">Sua nota:</label> <input type="number" min="0" max="10"
               required placeholder="Nota (0 a 10)" id="dv-sua-nota">&nbsp;
        <input type="submit" value="Adicionar" /><br><br>
    </form>
 
    <table border="1" id="dv-tabela-estatistica" center>
        <thead>
            <tr>
                <th width="33%">Número de provas realizadas</th>
                <th width="33%">Primeira nota enviada</th>
                <th>Última nota enviada</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table><br><br>
    <table border="1" id="dv-tabela-estatistica-2" center>
        <thead>
            <tr>
                <th width="33%">Soma</th>
                <th width="33%">Nota Média</th>
                <th>Exportar para CSV</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</div>
`);


let dvFormDeNotas = document.querySelector("#dv-form-de-notas");
let dvSuaNota = document.querySelector("#dv-sua-nota");

let dvNotas = [10, 9, 3, 5, 8];

function formatar(dvNotas) {
    let dvEstatistica = new Estatistica(dvNotas);
    console.log("Notas: " + dvNotas.join(', '));
    let tbody = document.querySelector("#dv-tabela-estatistica tbody");
    tbody.innerHTML = `<tr>
    <td>${dvEstatistica.obterNumeroTotalDeNotas()}</td>
    <td>${dvEstatistica.obterPrimeiraNota()}</td>
    <td>${dvEstatistica.obterUltimaNota()}</td>
    </tr>`;

    let tbody2 = document.querySelector("#dv-tabela-estatistica-2 tbody");
    tbody2.innerHTML = `<tr>
    <td>${dvEstatistica.obterSomaDasNotas()}</td>
    <td>${dvEstatistica.obterNotaMedia()}</td>
    <td>${dvEstatistica.exportarCsv()}</td>
    </tr>`;
}

dvFormDeNotas.addEventListener("submit", event => {
    event.preventDefault();
    let newGrade = Number.parseInt(dvSuaNota.value, 10);
    dvNotas.push(newGrade);
    dvSuaNota.value = "";
    formatar(dvNotas);
})

formatar(dvNotas);

------------------------

// Definição da classe Usuario
class Usuario {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    
    podeVotar() {
        return this.idade >= 16;
    }
}

// Insira aqui a definição da classe Escritor.
class Escritor extends Usuario {
    publicarArtigo(){
        return "Artigo publicado"
    }
}
// Lembre-se de usar herança e de criar o método
// de instância publicarArtigo().

------------------
// Classe Tarefa
class Tarefa {
    constructor(titulo, estaCompleta) {
        this.titulo = titulo;
        this.estaCompleta = estaCompleta;
    }

    obterFormatacao() {
        let status = "";
        if (this.estaCompleta) {
            status = "✅";
        } else {
            status = "⏳";
        }
        return `[${status}] ${this.titulo}`;
    }
}

// Implemente a classe TarefaMarcar
// Não se esqueça de herdar da classe Tarefa
class TarefaMarcar extends Tarefa {
    // Implemente o método de instância marcarComoConcluida()
    marcarComoConcluida(){
        this.estaCompleta = true
    }
}

// Uso das classes
let tarefa = new Tarefa("Aprendizagem de Programação", false);
console.log(tarefa.obterFormatacao());

let tarefaMarcar = new TarefaMarcar("Aspirar o chão", false);
console.log(tarefaMarcar.obterFormatacao());

tarefaMarcar.marcarComoConcluida();

console.log(tarefaMarcar); // estaCompleta deve ser true
console.log(tarefaMarcar.obterFormatacao());

--------------------
// Classe Usuario
class Usuario {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    podeVotar() {
        return this.idade >= 16;
    }
}

// Implemente a classe Escritor
class Escritor extends Usuario {
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome} "[escritor]"`;
    }

    publicarArtigo(){
        return "Artigo publicado";
    }
}
// Ela será filha da classe Usuario


// Testando a classe
let escritora = new Escritor ("Helena", "Silva", 22);
console.log(escritora.obterNomeCompleto());
escritora.publicarArtigo();


--------------------------

// Definição da classe Funcionario
class Funcionario {
    constructor(nome, sobrenome, cargo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cargo = cargo;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    obterIniciais() {
        return this.nome[0] + this.sobrenome[0];
    }

    obterPosicao() {
        return `${this.nome} trabalha como ${this.cargo}`;
    }
}

// Defina aqui a classe Gerente
class Gerente extends Funcionario {
    obterPosicao() {
        return `${this.nome} é o gerente`;
    }    
}
// Lembre-se de usar herança de classe


// Uso da classe Funcionario
let sueli = new Funcionario("Sueli", "Borges", "desenvolvedora");
console.log(sueli.obterNomeCompleto());
console.log(sueli.obterPosicao());

// Uso da classe Gerente
let carlos = new Gerente("Carlos", "Santos", "gerente");
console.log(carlos.obterNomeCompleto());
console.log(carlos.obterPosicao());

-------------------------------

// Implemente a Classe Passaporte
class Passaporte {
    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    obterNome() {
        return this.nome.toLowerCase();
    }
    obterSobrenome() {
        return this.sobrenome.toUpperCase();
    }
    obterNomeCompleto() {
        return this.nome+" "+this.sobrenome;
    }
    obterIniciais() {
        return `${this.nome[0]}.${this.sobrenome[0]}.`
    }
    obterEhNomeValido() {
        if (
            this.nome.length > 0 &&
            this.sobrenome.length > 0 &&
            this.sobrenome.endsWith(".") === false
            ) {
                return "Sim";
        } else {
            return "Não";
        }
    }
}

// Uso da classe
let mario = new Passaporte("Mario", "Borges");
console.log(mario.obterNome());
console.log(mario.obterSobrenome());
console.log(mario.obterNomeCompleto());
console.log(mario.obterIniciais());
console.log(mario.obterEhNomeValido());

console.log("---");

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>App de Passaporte</h2>   
    <div>
        <div>
            <label for="dv-nome ">Seu nome</label>
            <input type="text" placeholder="Seu nome:" 
                    id="dv-nome" autocomplete="off">
        </div>
        <div>
            <label for="dv-sobrenome">Seu sobrenome:</label>
            <input type="text" placeholder="Seu sobrenome" 
                    id="dv-sobrenome" autocomplete="off">
        </div>
    </div>

    <div>
        <table border="1">
            <thead>
                <tr>
                    <th width="200px"></th>
                    <th>Seus dados</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nome</td>
                    <td id="dv-resposta-1"></td>
                </tr>
                <tr>
                    <td>Sobrenome</td>
                    <td id="dv-resposta-2"></td>
                </tr>
                <tr>
                    <td>Nome Completo</td>
                    <td id="dv-resposta-3"></td>
                </tr>
                <tr>
                    <td>Iniciais</td>
                    <td id="dv-resposta-4"></td>
                </tr>
                <tr>
                    <td>Nome Válido?</td>
                    <td id="dv-resposta-5"></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`);

let nome = document.querySelector("#dv-nome");
let sobrenome = document.querySelector("#dv-sobrenome");

let dvResposta1 = document.querySelector("#dv-resposta-1");
let dvResposta2 = document.querySelector("#dv-resposta-2");
let dvResposta3 = document.querySelector("#dv-resposta-3");
let dvResposta4 = document.querySelector("#dv-resposta-4");
let dvResposta5 = document.querySelector("#dv-resposta-5");

function formatar() {
    let devPassaporte = new Passaporte(nome.value, sobrenome.value);

    dvResposta1.textContent = devPassaporte.obterNome();
    dvResposta2.textContent = devPassaporte.obterSobrenome();
    dvResposta3.textContent = devPassaporte.obterNomeCompleto();
    dvResposta4.textContent = devPassaporte.obterIniciais();
    dvResposta5.textContent = devPassaporte.obterEhNomeValido();
}

nome.addEventListener("keyup", formatar);
sobrenome.addEventListener("keyup", formatar);

----------------------------

let string = "35";

let numero = Number.parseInt(string, 10);

-------------------------------


// Implemente a classe Conta

class Conta {
    constructor() {
        this.valores = [];
    }

    adicionarTotais(valorestr) {
        let valor = Number.parseInt(valorestr,10);
        this.valores.push(valor);
        console.log(this.valores)
    }

    obterContagemDosValores(){
        return this.valores.length;
    }

    obterTotal(){
        let total = 0;
        this.valores.forEach(function(valor){
            total = total + valor;
        })
        console.log(total)
        return total;
    }

    obterMedia(){
        return this.obterTotal() / this.valores.length;
    }

}

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>App Dividir Conta</h2>   
    <form id="dv-form-total">
        <label for="component-name">Seu total pago</label><br><br>
        <input type="number" placeholder="Total pago" id="dv-total" autocomplete="off"><br><br>
        <input type="submit" value="Adicionar" />
    </form>

    <div>
        <h2>Sua conta</h2>
        <table border="1">
            <thead>
                <tr>
                    <th width="50%">Descrição</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>
    </div>
</div>
`);

const dvFormulario = document.querySelector("#dv-form-total");
const dvTotal = document.querySelector("#dv-total");
const tbody = document.querySelector("#tbody");

const conta = new Conta();

function formatar() {
    tbody.innerHTML = "";
    conta.valores.forEach(function (valor) {
        tbody.insertAdjacentHTML("beforeend", `<tr>
            <td>SubTotal</td>
            <td>${valor}</td>
        </tr>`);
    });
     tbody.insertAdjacentHTML("beforeend", `<tr class="separator"></tr>
        <tr>
            <th>Total</th>
            <td>${conta.obterTotal()}</td>
        </tr>
        <tr>
            <th>Quantidade de pessoas</th>
            <td>${conta.obterContagemDosValores()}</td>
        </tr>
        <tr>
            <th>Valor por pessoa</th>
            <td>${conta.obterMedia()}</td>
        </tr>`);
}

dvFormulario.addEventListener("submit", event => {
    event.preventDefault();

    conta.adicionarTotais(dvTotal.value);
    formatar();
    dvTotal.value = "";
});

--------------

let planetas = "Mercúrio,Vênus,Terra";

let matriz = planetas.split(",");
console.log(matriz);

---------------------------

class Tarefas {
    constructor() {
        this.tarefas = [];
    }

    importarCSV(csvString) {
        this.tarefas = csvString.split(", ");
    }
 
    obterQuantidadeDeTarefas() {
        return this.tarefas.length;
    }

    obterPrimeiraTarefa() {
        return this.tarefas[0];
    }

    obterUltimaTarefa() {
        return this.tarefas[this.tarefas.length - 1];
    }

    obterTarefasEmCSV() {
        return this.tarefas.map(function(tarefa) {
            return tarefa.toLowerCase();
        }).join(", ");
        // OR
        // return this.tarefas.join(", ").toLowerCase();
    }
}

----------------------------

// Implemente a classe Temperatura 
class Temperatura {
    constructor(detalhes) {
        this.detalhes = detalhes;
    }    
    obterLocalizacao() {
        return `${this.detalhes.location.name}, ${this.detalhes.location.country}`;
    }

    obterIcone() {
        return this.detalhes.current.weather_icons[0]
    }

    obterTemperatura() {
        return this.detalhes.current.temperature + "&deg;C";
    }
}

// dados utilizados para trazer a temperatura

let dadosDoClima = {
  "request": {
    "type": "Cidade",
    "query": "Florianopolis",
    "language": "pt",
    "unit": "m"
  },
  "location": {
    "name": "Florianópolis",
    "country": "Brasil",
    "region": "Santa Catarina",
    "lat": "52.374",
    "lon": "4.890",
    "timezone_id": "Brasil/Brasília",
    "localtime": "2020-11-25 09:11",
    "localtime_epoch": 1606295460,
    "utc_offset": "1.0"
  },
  "current": {
    "observation_time": "08:11 AM",
    "temperature": 25,
    "weather_code": 113,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
    ],
    "weather_descriptions": [
      "Clear"
    ],
    "wind_speed": 17,
    "wind_degree": 160,
    "wind_dir": "SSE",
    "pressure": 1014,
    "precip": 0,
    "humidity": 87,
    "cloudcover": 0,
    "feelslike": 1,
    "uv_index": 1,
    "visibility": 10,
    "is_day": "yes"
  }
}

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <div>
        <h2>Previsão do tempo</h2>
    <div><hr />
        <h3 id="dv-cidade-pais"></h3>
        <div style="display:flex; margin-left:1.5em">
            <img src="" alt="Ícone de temperatura" id="dv-icone" />
            <h3 style="margin-left:1.5em" 
            id="dv-temperatura"></h3>
        </div>
    </div>
</div>
`);

let dvCidadePais = document.querySelector("#dv-cidade-pais");
let dvIcone = document.querySelector("#dv-icone");
let temperature = document.querySelector("#dv-temperatura");

let temperatura = new Temperatura(dadosDoClima);

dvCidadePais.textContent = temperatura.obterLocalizacao();
dvIcone.src = temperatura.obterIcone();
temperature.innerHTML = temperatura.obterTemperatura();


---------------------


// Implemente a classe ClimaDasCidades 
class ClimaDasCidades {
  constructor(cidades){
    this.cidades = cidades;
  }

    obterPrimeiraCidade() {
        return this.cidades[0];
    }

    obterUltimaCidade() {
        return this.cidades[this.cidades.length - 1];
    }

    exportarCSV() {
        return this.cidades.map(function(cidade) {
            return cidade.location.name + " " + cidade.current.temperature;
        }).join(", ");
    }
    
}

let dados = [{
  "request": {
    "type": "Cidade",
    "query": "Florianópolis, Brasil",
    "language": "pt",
    "unit": "m"
  },
  "location": {
    "name": "Florianópolis",
    "country": "Brasil",
    "region": "Santa Catarina",
    "lat": "37.775",
    "lon": "-122.418",
    "timezone_id": "Brasil/Brasília",
    "localtime": "2020-11-25 09:46",
    "localtime_epoch": 1606297560,
    "utc_offset": "-8.0"
  },
  "current": {
    "observation_time": "05:46 PM",
    "temperature": 14,
    "weather_code": 116,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
    ],
    "weather_descriptions": [
      "Partly cloudy"
    ],
    "wind_speed": 13,
    "wind_degree": 330,
    "wind_dir": "NNW",
    "pressure": 1024,
    "precip": 0,
    "humidity": 67,
    "cloudcover": 25,
    "feelslike": 14,
    "uv_index": 1,
    "visibility": 16,
    "is_day": "no"
  }
}, 

{
  "request": {
    "type": "Cidade",
    "query": "São Paulo",
    "language": "pt",
    "unit": "m"
  },
  "location": {
    "name": "São Paulo",
    "country": "Brasil",
    "region": "São Paulo",
    "lat": "52.374",
    "lon": "4.890",
    "timezone_id": "Brasil/Brasília",
    "localtime": "2020-11-25 09:11",
    "localtime_epoch": 1606295460,
    "utc_offset": "1.0"
  },
  "current": {
    "observation_time": "08:11 AM",
    "temperature": 4,
    "weather_code": 113,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
    ],
    "weather_descriptions": [
      "Clear"
    ],
    "wind_speed": 17,
    "wind_degree": 160,
    "wind_dir": "SSE",
    "pressure": 1014,
    "precip": 0,
    "humidity": 87,
    "cloudcover": 0,
    "feelslike": 1,
    "uv_index": 1,
    "visibility": 10,
    "is_day": "yes"
  }
}, 

{
  "request": {
    "type": "Cidade",
    "query": "Sydney, Austrália",
    "language": "en",
    "unit": "m"
  },
  "location": {
    "name": "Sydney",
    "country": "Austrália",
    "region": "New South Wales",
    "lat": "-33.883",
    "lon": "151.217",
    "timezone_id": "Australia/Sydney",
    "localtime": "2020-11-26 04:47",
    "localtime_epoch": 1606366020,
    "utc_offset": "11.0"
  },
  "current": {
    "observation_time": "05:47 PM",
    "temperature": 19,
    "weather_code": 113,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
    ],
    "weather_descriptions": [
      "Clear"
    ],
    "wind_speed": 11,
    "wind_degree": 10,
    "wind_dir": "N",
    "pressure": 1010,
    "precip": 0,
    "humidity": 73,
    "cloudcover": 0,
    "feelslike": 19,
    "uv_index": 1,
    "visibility": 10,
    "is_day": "no"
  }
}, 

{
  "request": {
    "type": "Cidade",
    "query": "Hanoi, Vietnã",
    "language": "en",
    "unit": "m"
  },
  "location": {
    "name": "Hanoi",
    "country": "Vietnã",
    "region": "",
    "lat": "21.033",
    "lon": "105.850",
    "timezone_id": "Asia/Ho_Chi_Minh",
    "localtime": "2020-11-26 00:47",
    "localtime_epoch": 1606351620,
    "utc_offset": "7.0"
  },
  "current": {
    "observation_time": "05:47 PM",
    "temperature": 23,
    "weather_code": 116,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
    ],
    "weather_descriptions": [
      "Partly cloudy"
    ],
    "wind_speed": 6,
    "wind_degree": 140,
    "wind_dir": "SE",
    "pressure": 1018,
    "precip": 0,
    "humidity": 78,
    "cloudcover": 75,
    "feelslike": 25,
    "uv_index": 1,
    "visibility": 6,
    "is_day": "no"
  }
}, 

{
  "request": {
    "type": "Cidade",
    "query": "beirute",
    "language": "en",
    "unit": "m"
  },
  "location": {
    "name": "Beirute",
    "country": "Líbano",
    "region": "Beyrouth",
    "lat": "33.872",
    "lon": "35.510",
    "timezone_id": "Asia/Beirut",
    "localtime": "2020-11-25 19:48",
    "localtime_epoch": 1606333680,
    "utc_offset": "2.0"
  },
  "current": {
    "observation_time": "05:48 PM",
    "temperature": 20,
    "weather_code": 389,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0024_thunderstorms.png"
    ],
    "weather_descriptions": [
      "Rain With Thunderstorm"
    ],
    "wind_speed": 11,
    "wind_degree": 240,
    "wind_dir": "WSW",
    "pressure": 1009,
    "precip": 0.5,
    "humidity": 78,
    "cloudcover": 75,
    "feelslike": 20,
    "uv_index": 5,
    "visibility": 8,
    "is_day": "yes"
  }
}]

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <button id="dv-mostre-primeira-cidade">Mostrar Clima <small>(primeira localização)</small></button>
    <button id="dv-mostre-ultima-cidade">Mostrar Clima <small>(última localização)</small></button>
    <button id="dv-exportar-clima">Exportar clima</button>

    <div>
        <h2>Previsão do tempo</h2>
    <div><hr />
        <h3 id="dv-cidade-pais"></h3>
        <div style="display:flex; margin-left:1.5em" 
             class="icon-temp">
            <img src="" alt="Ícone do clima" id="dv-icone" />
            <h3 style="margin-left:1.5em" 
            id="dv-temperatura"></h3>
        </div>
    </div>
    <hr />
    <div id="dv-exportar-saida"></div>
</div>
`);

let mostreAPrimeiraCidade = document.querySelector("#dv-mostre-primeira-cidade");
let mostreAUltimaCidade = document.querySelector("#dv-mostre-ultima-cidade");
let dvExportarClima = document.querySelector("#dv-exportar-clima");

let dvCidadePais = document.querySelector("#dv-cidade-pais");
let dvIcone = document.querySelector("#dv-icone");
let dvTemperatura = document.querySelector("#dv-temperatura");
let dvExportarSaida = document.querySelector("#dv-exportar-saida");

let climaDasCidades = new ClimaDasCidades(dados);

function formatar(cidade) {
    dvCidadePais.textContent = `${cidade.location.name}, ${cidade.location.country}`;
    dvIcone.src = cidade.current.weather_icons[0];
    dvTemperatura.innerHTML = cidade.current.temperature + "&deg;C";
}

mostreAPrimeiraCidade.addEventListener("click", function() {
    let cidade = climaDasCidades.obterPrimeiraCidade();
    console.log(cidade);
    formatar(cidade);
});

mostreAUltimaCidade.addEventListener("click", function() {
    let cidade = climaDasCidades.obterUltimaCidade();
    formatar(cidade);
});

dvExportarClima.addEventListener("click", function() {
    let csv = climaDasCidades.exportarCSV();
    dvExportarSaida.textContent = csv;
});

----------------------------









