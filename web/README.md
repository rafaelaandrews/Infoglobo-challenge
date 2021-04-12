# Portal de Notícias

### frontend em React do desafio técnico proposto durante o processo seletivo para vaga de desenvolvedor fullStack na Infoglobo.
<br/>

## 🔗 Tabela de conteúdo

- [Instalação](#Instalação)

- [Pré-Requisitos](#Pré-requisitos)
- [Execução](#Execução)
  - [Desenvolvimento](#Desenvolvimento)

  - [Produção (DockerFile)](#Produção(DockerFile))
- [Tecnologias](#tecnologias)

---

## Instalação

```bash
# Clone este repositório
$ git clone <https://github.com/rafaelaandrews/Infoglobo-challenge>

# Acesse a pasta do projeto no terminal/cmd
$ cd Infoglobo-challenge/web/infoglobo

# Instale as dependências
$ npm install
```

---

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Docker](https://www.docker.com/).

---

## Execução

### desenvolvimento

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd Infoglobo-challenge/web/infoglobo

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse <HTTP://localhost:3000/>
```

### Produção(DockerFile)

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd Infoglobo-challenge/web/infoglobo

# Construa sua imagem docker
$ docker build -t challenge/infoglobo-web .

# Rode seu container com a imagem criada
$ docker run --name infogloboWeb -p 8080:3000 -d challenge/infoglobo-web

# O servidor inciará na porta:8080 - acesse <HTTP://localhost:8080/>

# Para parar/reiniciar/excluir container:
$ docker <stop|start|kill> infogloboWeb
```

---

## Tecnologias

👉 [Npm](https://www.npmjs.com/)

👉 [Docker](https://www.docker.com/)

👉 [Git](https://git-scm.com/)

---
