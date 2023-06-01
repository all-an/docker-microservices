
yarn init -y

yarn add express

yarn add cors

yarn add jsonwebtoken

yarn add nodemon -D

docker image build -t auth-api .

docker run --name auth-api -p 8080:8080 auth-api