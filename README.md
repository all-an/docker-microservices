

<p align="center">
        <a href="https://www.linkedin.com/in/all-an/">
            <img align="center" width="344" height="342"  src="/docker.png" />
        </a>
</p>

## Projeto Java Spring APIs com Docker, comunicação entre Microsserviços, PostgreSQL, MongoDB, RabbitMQ e Javascript 

<p align="center">
        <a href="https://www.linkedin.com/in/all-an/">
            <img align="center" width="804" height="444"  src="/diagrama.png" />
        </a>
</p>

### Stack utilizada:
- Java 11.00
- Spring
- Javascript
- Express
- Docker version 20.10.11, build dea9396
- PostgreSQL 11
- MongoDB 2.6
- MongoDB Shell 1.1.7
- DBeaver 21.3.1

#### Spring dependencies:
- [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/2.6.1/reference/htmlsingle/#using-boot-devtools)
- Lombok
- [Spring Web](https://docs.spring.io/spring-boot/docs/2.6.1/reference/htmlsingle/#boot-features-developing-web-applications)
- [Spring Data JPA](https://docs.spring.io/spring-boot/docs/2.6.1/reference/htmlsingle/#boot-features-jpa-and-spring-data)
- PostgreSQL Driver 
- [Spring for RabbitMQ](https://docs.spring.io/spring-boot/docs/2.6.1/reference/htmlsingle/#boot-features-amqp)
- [OpenFeign](https://docs.spring.io/spring-cloud-openfeign/docs/current/reference/html/)


## Instalação

Instalando Postgres no Docker:

Banco de dados de autenticação:

```sh
docker run --name auth-db -p 5432:5432 -e POSTGRES_DB=auth-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11
```

Banco de dados de produtos:

```sh
docker run --name product-db -p 5433:5432 -e POSTGRES_DB=product-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11
```

Parando container:

```sh
docker container stop <nome do container, ex: auth-db>
```

Visualiza containers:

```sh
docker ps
```

```sh
docker container inspect <container> 
```

Remove todos os containers:

```sh
docker container prune
```

Visualiza volumes:

```sh
docker volume ls
```
Remove volume:

```sh
docker volume rm <volume>
```

"startingDirectory": "%SystemDrive%/code/"

Rodando a imagem mongo-express no docker:

```sh
docker run --name sales-db -p 27017:27017 -p 28017:28017 -e MONGODB_USER="admin" -e MONGODB_DATABASE="sales" -e MONGODB_PASS="123456" tutum/mongodb
```

url de conexão do MongoDB:

```sh
mongo "mongodb://admin:123456@localhost:27017/sales"
```

RabbitMq no docker:

```sh
docker run --name sales_rabbit -p 5672:5672 -p 25676:25676 -p 15672:15672 rabbitmq:3-management

user:guest 
password:guest
```

#### auth-api / sales-api

```sh
yarn init -y
yarn add express
yarn add cors
yarn add jsonwebtoken

```

#### Rodando docker-compose build
```sh
para o primeiro build ou builds posteriores:
docker-compose up --build

depois:
docker-compose up
```

#### Verificando bancos de dados rodando
```sh
docker logs --follow <nome do container>
```

#### Parando, derrubando todos os containers
```sh
docker kill $(docker ps -q)
```




