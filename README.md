# Teste desenvolvedor back-end

> Simular a criação de uma API que possibilita à indústria cadastrar os produtores e as propriedades.

## 🗺 Rotas

Rotas para Produtores
* `GET ./produtor`
* `GET ./produtor/{ID do Produtor}`
* `POST ./produtor`
* `PUT ./produtor/{ID do Produtor}`
* `DELETE ./produtor/{ID do Produtor}`

Rotas para Propriedades
* `GET ./propriedade`
* `GET ./propriedade/{ID do Propriedade}`
* `POST ./propriedade`
* `PUT ./propriedade/{ID do Propriedade}`
* `DELETE ./propriedade/{ID do Propriedade}`

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* `Node JS` instalado (https://nodejs.org/en/download/)
* `MYSQL` instalado (https://www.mysql.com/products/community/)

É extremamente recomendado utilizar o dump do banco de dados `./Server Dump/Dump20230113.sql` para popular o banco de dados para teste. Alternativamente é possível utilizar os arquivos de seed da ORM Sequelize para popular.

## 🚀 Iniciando o projeto

Abra o arquivo `/API/config/config.json` e adicione as configurações do banco de dados a ser utilizado pela API. Mais detalhes de como adicionar estão comentados dentro do próprio arquivo.

Com as ferramentas necessárias instaladas e o banco configurado, abra a pasta raiz do projeto e esecute o comando para instalar as dependências do projeto:

```
npm install
```

Uma das dependências instaladas como dependências de desenvolvedor é a `Nodemon`, a qual é útil para verificar alterações na API em tempo real. Um script prórpio para o `Nodemon` foi adicionado, basta utilizar o comando:

```
npm run start
```



## ☕ Usando a API

Para usar a API, siga estas etapas:

* Acesse a rota padrão definida no projeto `localhost:3000`;
* Consulte os dados de usuários presentes no BD para navegar entre as rotas (O usuário padrão é `admin`, e a senha `admin`)

Para aprimorar o processo de teste da API, é recomendado o uso da ferramenta `Postman`.

## 📫 Contribuindo para o projeto
Para contribuir com o projeto, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

[⬆ Voltar ao topo](#nome-do-projeto)<br>
