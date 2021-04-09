# CRUD de notícias

### Backend em Node.Js do desafio técnico proposto durante o processo seletivo para vaga de desenvolvedor fullStack na Infoglobo.
<br/>

## 🔗 Tabela de conteúdo

- [Instalação](#Instalação)

- [Pré-Requisitos](#Pré-requisitos)
- [Execução](#Execução)
  - [Desenvolvimento](#Desenvolvimento)

  - [Produção (DockerFile)](#Produção(DockerFile))
- [Testes](#testes)
- [Endpoints](#Endpoints)
- [Tecnologias](#tecnologias)

---

## Instalação

```bash
# Clone este repositório
$ git clone <https://github.com/rafaelaandrews/Infoglobo-challenge>

# Acesse a pasta do projeto no terminal/cmd
$ cd Infoglobo-challenge

# Instale as dependências
$ npm install
```

---

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/).

---

## Execução

### desenvolvimento

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd Infoglobo-challenge

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse <HTTP://localhost:3000/>
```

### Produção(DockerFile)

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd Infoglobo-challenge

# Construa sua imagem docker
$ docker build -t challenge/infoglobo-api .

# Rode seu container com a imagem criada
$ docker run --name infogloboApi -p 8080:3000 -d challenge/infoglobo-api

# O servidor inciará na porta:8080 - acesse <HTTP://localhost:8080/>

# Para parar/reiniciar/excluir container:
$ docker <stop|start|kill> infogloboApi
```

---

## Testes

```bash

# Acesse a pasta do projeto no terminal/cmd
$ cd Infoglobo-challenge

# Instale as dependências
$ npm install

# Execute a rotina de testes do projeto
$ npm run test

# Será exibido no terminal o resultado da rodada de testes
```

---

## Endpoints

★ healthCheck

- HTTP Method: **GET**
- Path: /

★ Retorna uma lista de Notícias

- HTTP Method: **GET**
- Path: /noticia

★ Permite criar uma Notícia;

- HTTP Method: **POST**
- Path: /noticia
- _Body_ de exemplo:

```JSON
{
  "titulo": "Brasil está vacinado",
  "conteudo": "Foram finalizadas as aplicações de vacinas aos brasileiros",
  "dataPublicacao": "2021/04/08"
}
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
