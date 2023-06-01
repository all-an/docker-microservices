
yarn init -y

yarn add express

yarn add cors

yarn add jsonwebtoken

yarn add mongoose

yarn add nodemon -D

docker image build -t sales-api .

docker run --name sales-api -p 8082:8082 sales-api