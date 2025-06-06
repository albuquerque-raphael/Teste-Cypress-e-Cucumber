
# ✅ Testes de Cadastro com Cypress + Cucumber

Este projeto foi desenvolvido como atividade prática da disciplina **Qualidade de Software**, no curso de **Sistemas para Internet** da **Uniesp**.

O objetivo foi implementar testes automatizados utilizando **Cypress** com **Cucumber (BDD)** para validar diferentes cenários de cadastro de usuários em uma aplicação front-end simulada.

---

## 🧪 Casos de Teste Automatizados

### 1. ✅ Cadastro com dados válidos
- Preenche todos os campos obrigatórios com dados corretos
- Espera mensagem de sucesso: **"Cadastro realizado com sucesso!"**

### 2. 🚫 Cadastro com e-mail já existente
- Utiliza um e-mail previamente "cadastrado" no código
- Espera mensagem de erro: **"E-mail já cadastrado."**

### 3. 🛑 Cadastro com campo obrigatório em branco
- Deixa um ou mais campos vazios
- Espera mensagem de erro: **"Todos os campos são obrigatórios."**

### 4. ❌ Validação de formato de e-mail inválido
- Preenche o campo de e-mail com um valor mal formatado (`ex: errado@`)
- Espera mensagem de erro: **"E-mail inválido."**

---

## 🧰 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- [Cucumber (BDD)](https://cucumber.io/)
- HTML + CSS (formulário visual de cadastro)
- Node.js (ambiente dos testes)
- Live Server (para rodar a página local)

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/albuquerque-raphael/Teste-Cypress-e-Cucumber.git
cd Teste-Cypress-e-Cucumber
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie um servidor local

```bash
npx live-server .
# ou
python -m http.server 8080
```

Acesse no navegador:  
`http://localhost:8080/public/index.html`

### 4. Execute os testes Cypress

```bash
npx cypress open
```

Na interface do Cypress, clique em `cadastro.feature` para rodar os testes.

---

## 👨‍🏫 Disciplina

**Qualidade de Software**  
Curso de **Sistemas para Internet**  
**Uniesp**

---

## 👥 Projeto realizado por:

- **Raphael Cordeiro Cavalcanti de Albuquerque**  
- **Marcos Wiendl**  
- **Ana Beatriz Sinésio da Silva**  
- **Iviny Letícia Nunes Ribeiro**

---