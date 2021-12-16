
docker run --name auth-db -p 5432:5432 -e POSTGRES_DB=auth-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11

docker run --name product-db -p 5433:5432 -e POSTGRES_DB=aproduct-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11

docker ps 

