# API de Alunos

Uma API simples feita com **Node.js** e **Express** para gerenciar alunos.  
Permite **listar, buscar, cadastrar, atualizar e deletar** registros de alunos.  

---

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd nome-da-pasta
   ```
3. Instale as dependências:
   ```bash
   npm -y
   npm install express cros 
   ```
4. Inicie o servidor:
   ```bash
   node server.js
   ```

O servidor vai rodar em:
```
http://localhost:3000
```

---

## Rotas

### ➤ Listar todos os alunos
`GET /alunos`

Retorna a lista completa de alunos cadastrados.

---

### ➤ Buscar aluno por ID
`GET /alunos/:id`

Retorna os dados de um aluno específico.  
Exemplo:
```
GET /alunos/1
```

---

### ➤ Criar novo aluno
`POST /alunos/criar`

**Body (JSON):**
```json
{
  "nome": "João da Silva",
  "cpf": "12345678901",
  "cep": "12345678",
  "uf": "SP",
  "rua": "Rua Exemplo",
  "numero": 100,
  "complemento": "Apto 10"
}
```

---

### ➤ Atualizar aluno
`PUT /alunos/:id`

**Body (JSON):**
```json
{
  "nome": "Maria Souza",
  "cpf": "98765432100",
  "cep": "87654321",
  "uf": "RJ",
  "rua": "Av. Brasil",
  "numero": 200,
  "complemento": "Casa"
}
```

---

### ➤ Deletar aluno
`DELETE /alunos/:id`

Remove o aluno do cadastro.

---

## Observações

- O **CPF** precisa ter 11 dígitos.
- O **CEP** precisa ter 8 dígitos.
- O campo **UF** deve ter 2 caracteres.
- O **número** precisa ser inteiro e maior que 0.
- Não é permitido cadastrar ou atualizar alunos com **CPF duplicado**.

---

Feito com muita marola e Node.js 😼
