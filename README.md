# API REST de Notícias

### Projeto composto por um frontend em React e o backend em Node.js com acesso ao MongoDB. Este projeto foi proposto durante o processo seletivo para vaga de desenvolvedor fullStack na Infoglobo. 

### Para rodar o backend e o frontend individualmente, acesse o README.md de cada um.

<br/>

## 🔗 Tabela de conteúdo

- [Pré-Requisitos](#Pré-requisitos)
- [Execução](#Execução)
  - [Produção (DockerFile)](#Produção(DockerFile))
- [Tecnologias](#tecnologias)

---


## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/).

---

## Execução

### Produção(DockerFile)

```bash

$ cd Infoglobo-challenge/api-rest

$ npm install

$ cd ..

$ cd Infoglobo-challenge/web

$ npm install

$ cd ..

# Construa sua imagem docker
$ docker-compose up -d

# Acesse <HTTP://localhost:3001/>

# Para parar a execução:
$ docker-compose stop 

```

---

## Tecnologias

👉 [Npm](https://www.npmjs.com/)

👉 [Node](https://nodejs.org/en/)

👉 [Express](https://expressjs.com/)

👉 [Mocha](https://mochajs.org/)

👉 [Chai](https://www.chaijs.com/)

👉 [Docker](https://www.docker.com/)

👉 [Git](https://git-scm.com/)

---
