# Serverless - AWS Translate

## Indice
<p align="center">
  <a href="#bookmark-sobre">Sobre</a> |
  <a href="#computer-tecnologias-utilizadas">Tecnologias</a> |
  <a href="#gear-requisitos">Requisitos</a> |
  <a href="#package-como-baixar-o-projeto">Baixar</a> |
  <a href="#package-utilizando-o-projeto">Usando</a> |
  <a href="#bust_in_silhouette-autor">Autor</a> |
  <a href="#pencil-licença">Licença</a>
</p>

## :bookmark: Sobre
API serverless bem simples com uma rota para tradução de textos do ing;ês para o português.

A motivação para a criação desse projeto foi validar meus estudos em relação so SOLID e ao Clean Arch, o projeto conta com injeção de dependencias para um maior desacoplamento das responsabilidades do software.

## :computer: Tecnologias Utilizadas
- NodeJS
- Typescript
- Serverless Framework
- Tsyringe
- AWS sdk

## :gear: Requisitos:
- Editor de código (recomendo o Visual Studio Code: https://code.visualstudio.com/)

## :package: Como Baixar o projeto
Pelo seu terminal, escolha um local para o projeto e rode os comandos:
```bash
  # Clonar o repositório
  $ git clone https://github.com/luizcampos331/aws-translate.git

  # Entrar no diretório
  $ cd aws-translate

  # Instalar dependências
  $ yarn

```

## :package: Utilizando o projeto
Pelo seu terminal, escolha um local para o projeto e rode os comandos:
```bash
  # Executar serverless offline
  $ yarn dev

  # Fazendo deploy para a AWS
  $ yarn deploy

```

Obs: para que você consiga fazer o deploy é necessário ter uma conta na AWS e ter configurado as credenciais corretamente, para saber como fazer isso acesse: https://www.serverless.com/framework/docs/providers/aws/guide/credentials

## :bust_in_silhouette: Autor:
Luiz Eduardo Campos da Silva</br>
LinkedIn: <a href="https://www.linkedin.com/in/luiz-campos">@luiz-campos</a></br>
Github: <a href="https://www.github.com/luizcampos331">@luizcampos331</a>


## :pencil: Licença
Copyright © 2020 <a href="https://www.github.com/luizcampos331">Luiz Campos</a></br>
Este projeto é licenciado pelo <a href="LICENSE">MIT</a>
