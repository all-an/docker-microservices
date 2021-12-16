# Java docker e microservices

## Projeto Java API com Docker, comunicação entre Microserviços, PostgreSQL e Javascript 

<p align="center">
        <a href="https://www.linkedin.com/in/all-an/">
            <img align="center" width="804" height="444"  src="/diagrama.png" />
        </a>
</p>

## Instalação

Instalando Postgres no Docker:

Banco de dados de autenticação:

```sh
docker run --name auth-db -p 5432:5432 -e POSTGRES_DB=auth-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11
```

Banco de dados de produtos:

```sh
docker run --name product-db -p 5433:5432 -e POSTGRES_DB=aproduct-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11
```

Visualiza containers:

```sh
docker ps
```