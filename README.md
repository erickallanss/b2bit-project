## Projeto para processo seletivo da B2Bit

### Proposta: 
Este projeto é uma aplicação de demonstração criada como parte de um desafio de código para um processo seletivo da empresa B2Bit. A aplicação é uma interface simples de login e perfil de usuário, construída com React e TypeScript, e testada com Cypress.

### Dados para autenticação:
- email: cliente@youdrive.com
- senha: password

### Requisitos funcionais solicitados:
1. Fazer login com as credenciais informadas, acessando uma página autorizada apenas ao usuário;
2. Manter o usuário logado, persistindo o token no local storage;
3. Emitir mensagens de erro quando o usuário inserir informações erradas de credenciais;
4. Ao logar, acessar a página de perfil do usuário, acessando informações pessoais;
5. Permitir que o usuário faça logout.

### Requisitos não funcionais:
1. Uso de Typescript
2. Uso de ReactJS
3. Uso de interceptadores de requisição
4. Testes
5. Tailwind
6. Deploy

## Rodando a aplicação
### Pré-requisitos
- **Node.js**
- **npm**

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/b2bit-code-challenge.git
cd b2bit-code-challenge
```

2. Instale as dependências
```bash
npm install
```

3. Execute os testes
```bash
npm run cypress:run
```

4. Execute a aplicação
```bash
npm start
```

### Deploy
Foi feito deploy utilizando a plataforma Netlify:
[https://b2bitproject.netlify.app/]