# API RESTful de Filmes

API para gerenciamento de filmes desenvolvida com Node.js, Express e TypeScript.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- MongoDB com Mongoose
- Winston (Logs)
- Express Validator

## 📋 Pré-requisitos

- Node.js
- MongoDB
- NPM ou Yarn

## ⚙️ Configuração

1. Clone o repositório
```bash
git clone git@github.com:Pedro-Chaves/api_restful_ts.git
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
DB_USER=seu_usuario
DB_PASS=sua_senha
ENVIRONMENT=dev
```

## 🏃‍♂️ Rodando o projeto

```bash
npm run dev
```

## 🛣️ Endpoints

### Filmes

- `GET /api/movie` - Lista todos os filmes
- `GET /api/movie/:id` - Busca filme por ID
- `POST /api/movie` - Cria novo filme
- `PATCH /api/movie/:id` - Atualiza filme
- `DELETE /api/movie/:id` - Remove filme

### Formato do Filme
```json
{
  "title": "Nome do Filme",
  "rating": 5,
  "description": "Descrição do filme",
  "director": "Nome do Diretor",
  "stars": ["Ator 1", "Ator 2"],
  "poster": "URL do poster"
}
```

## 📝 Validações

- Título: String com mínimo 5 caracteres
- Rating: Número entre 0 e 10
- Descrição: String obrigatória
- Diretor: String obrigatória
- Stars: Array de strings
- Poster: URL válida

## 📊 Status Codes

- 200: Sucesso
- 404: Registro não encontrado
- 422: Erro de validação
- 500: Erro interno do servidor

## 🔍 Logs

Os logs são salvos em:
- `logs/error.log`: Apenas erros
- `logs/all.log`: Todos os logs

## 📄 Licença

MIT

💡 Desenvolvido com ❤️ por Pedro Henrique Moreira Chaves.
