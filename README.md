# 📌 README - DevBurger Backend
![Badge Versão](https://img.shields.io/badge/versão-1.0.0-blue)

O **DevBurger Backend** é a API responsável por gerenciar toda a lógica de negócios do e-commerce de alimentos **DevBurger**. Desenvolvido com **Node.js** e **Express**, esse backend fornece uma estrutura robusta para operações de pedidos, gerenciamento de usuários, autenticação, integração de pagamentos e muito mais.

## 📘 Descrição
Este backend fornece uma série de funcionalidades para garantir a melhor experiência no e-commerce **DevBurger**. Ele permite:

✔ **Cadastro e autenticação de usuários** com **JWT** e senhas criptografadas via **Bcrypt**.  
✔ **Gestão completa do cardápio**, permitindo adicionar, editar e excluir produtos.  
✔ **Processamento de pedidos**, salvando status e histórico de compras.  
✔ **Integração com Stripe** para processar pagamentos online com segurança.  
✔ **Upload de imagens** para os produtos utilizando **Multer**.  
✔ **Controle de acessos** para usuários comuns e administradores.  
✔ **Registro de transações** para auditoria e análise de dados.  

A API está estruturada para garantir segurança e escalabilidade, seguindo boas práticas de desenvolvimento, como **middlewares de autenticação**, **tratamento de erros**, **validação de dados** e **logs**.  


## 💡 Funcionalidades

- [x] **Autenticação segura** usando JWT e Bcrypt.  
- [x] **CRUD completo** para usuários, produtos e pedidos.  
- [x] **Gerenciamento de pagamentos** via Stripe.  
- [x] **Armazenamento de imagens** com Multer.  
- [x] **Banco de dados híbrido** com **PostgreSQL** e **MongoDB**.  
- [x] **Middlewares de segurança** para proteção contra ataques comuns.  
- [x] **Deploy automatizado** usando Docker. 

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** Node.js  
- **Framework:** Express  
- **Banco de Dados:** PostgreSQL + Sequelize / MongoDB  
- **Autenticação:** JWT + Bcrypt  
- **Armazenamento de Imagens:** Multer  
- **Pagamentos:** Stripe  
- **Containerização:** Docker  

## 📷 Demonstração 
<div align="center">
  
## Pagamentos aprovados 

<img width="900" height="500" src="https://github.com/user-attachments/assets/16aecdd8-f403-4ef8-a7c0-8e6d70187afa">
<img width="900" height="500" src="https://github.com/user-attachments/assets/8909db86-1599-4f14-a252-f66223f7a5f4">

## Area Admin
<img width="900" height="500" src="https://github.com/user-attachments/assets/41e3e852-678b-4d68-b4f9-8924afa64289">
<img width="900" height="500" src="https://github.com/user-attachments/assets/3b010c57-8e49-4788-9176-ed014ace6464">
<img width="900" height="500" src="https://github.com/user-attachments/assets/51bb99c3-1809-4a32-9a75-daa7fc035127">
<img width="900" height="500" src="https://github.com/user-attachments/assets/83bff36a-12f4-44ce-9a9e-b02bd86fe953">

</div>



 ## 📌 Como Rodar a API

### 1️⃣ Clonar o Repositório
```bash
git clone https://github.com/FelipeAz01/Burger-dv-backend.git
cd Burger-dv-backend
```

### 2️⃣ Instalar Dependências
```bash
npm install
```

### 3️⃣ Configurar as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto e adicione as seguintes configurações:

```ini
PORT=5000
DATABASE_URL=postgres://usuario:senha@localhost:5432/devburger
JWT_SECRET=sua_chave_secreta
STRIPE_SECRET_KEY=sua_chave_stripe
```
⚠️ **Se estiver usando MongoDB, adicione:** `MONGO_URI=mongodb://localhost:27017/devburger`

### 4️⃣ Rodar com Docker (Opcional)
Se preferir rodar tudo via **Docker**, utilize:
```bash
docker-compose up --build
```
Caso contrário, siga os próximos passos.

### 5️⃣ Iniciar o Banco de Dados
Se estiver utilizando **PostgreSQL** localmente, inicie o banco de dados:
```bash
sudo service postgresql start
```
Em seguida, crie e atualize as tabelas:
```bash
npx sequelize db:create
npx sequelize db:migrate
```
Se estiver usando **MongoDB**, certifique-se de que o serviço está rodando.

### 6️⃣ Iniciar o Servidor
```bash
npm start
```
Ou, em modo de desenvolvimento:
```bash
npm run dev
```

### 7️⃣ Testar a API
Após iniciar o servidor, teste no navegador ou no Postman:
```
http://localhost:5000/api/ping
```
Se tudo estiver certo, sua API estará rodando! 🎉

## 📄 Licença
Este projeto é de código aberto e pode ser utilizado para aprendizado.

---
Se precisar de ajuda, me avise! 🚀
