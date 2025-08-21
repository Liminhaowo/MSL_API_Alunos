// importando express
const express = require("express");
// cria aplicação
const app = express();
app.use(express.json());
const porta = 3000;

const alunos = [
  {
    id: 1,
    nome: "Matheus Alves",
    cpf: "12345671458",
    cep: "01234567",
    uf: "SP",
    rua: "Av. Central",
    numero: 123,
    complemento: "Apto 12",
  },
  {
    id: 2,
    nome: "Liminha",
    cpf: "12345795803",
    cep: "01234567",
    uf: "SP",
    rua: "Av. Central",
    numero: 123,
    complemento: "Apto 12",
  },
];

app.get("/alunos", (req, res) => {
  res.json(alunos);
});
app.get("/alunos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const nomes = alunos.find((aluno) => aluno.id === id);
    if (nomes == null) {
      return res.status(404).json({
        mensagem: "Aluno talvez não encontrado",
      });
    }
    res.json(nomes);
  } catch (error) {
    res.status(400).json({
      error: "Tu foi moggado",
    });
  }
});

app.post("/alunos/criar", (req, res) => {
  const { nome, cpf, cep, uf, rua, numero, complemento } = req.body;

  if (!nome || nome == null || !cpf || !cep || !uf || !rua || !numero) {
    return res.status(400).json({
      erro: "Preenche tudo as coisa parsa",
    });
  }
  else if (cpf.length !== 11 || cep.length !== 8 || uf.length !== 2 || numero <= 0 || !Number.isInteger(numero)) {
    return res.status(400).json( error = "Preenche tudo as coisa parsa dnv, verifique os dados e faz dnv" );{
    }};
  const id = alunos.length > 0 ? alunos[alunos.length - 1].id + 1 : 1;

  alunos.forEach((aluno) => {
    console.log(aluno.cpf);
  });

  const existeCPF = alunos.filter((aluno) => aluno.cpf === cpf);

  const novoAluno = { id, nome, cpf, cep, uf, rua, numero, complemento };

  if (existeCPF.length > 0) {
    return res.status(400).json({
      erro: "O CPF já existe, deixe de marola",
    });
  } else {
    console.log(novoAluno);

    alunos.push(novoAluno);

    res.status(201).json({
      mensagem: "Aluno Cadastrado Ebaaaaaaa",
      aluno: novoAluno,
    });
  }
});

app.delete("/alunos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const indice = alunos.findIndex((a) => a.id === id);
  console.log(indice);

  if (indice === -1) {
    return res.status(404).json({
      mensagem: "Estudante não found",
    });
  }
  // Verifica se o índice é válido
  if (indice < 0 || indice >= alunos.length) {
    return res.status(404).json({
      mensagem: "Estudante not encontrado",
    });
  }
  console.log(indice);

  alunos.splice(indice, 1);

  res.status(204).json({
    mensagem: "Aluno sumcumbido com sucesso!",
  });
});
app.put("/alunos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, cpf, cep, uf, rua, numero, complemento } = req.body;
  const indice = alunos.findIndex((a) => a.id === id);
  if (indice === -1) {
    return res.status(404).json({
      mensagem: "Aluno sumido, procure outro",
    });
  }
  if (!nome || !cpf || !cep || !uf || !rua || !numero) {
    return res.status(400).json({
      erro: "Algum dos campos obrigatórios não colocados",
    });
  } else if (cpf.length !== 11 || cep.length !== 8 || uf.length !== 2 || numero <= 0 || !Number.isInteger(numero)) {
    return res.status(400).json({
      erro: "Algum dos campos obrigatórios não foram inseridos certamente, verifique os dados e tente inseri-las d novo para o nosso vosso propio bem",
    });
  }
  const existeCPF = alunos.filter((aluno) => aluno.cpf === cpf && aluno.id !== id);
  if (existeCPF.length > 0) {
    return res.status(400).json({
      erro: "O CPF já existe, não é possível atualizar",
    });
  }
  const alunoAtualizado = {
    id,
    nome,
    cpf,
    cep,
    uf,
    rua,
    numero,
    complemento,
  };
  alunos[indice] = alunoAtualizado;
  res.status(200).json({
    mensagem: "Aluno atualizado, yeah",
    aluno: alunoAtualizado,
  });
});

app.listen(porta, () => {
  console.log(`Servidor rodando http://localhost:${porta}`);
});
