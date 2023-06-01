
docker image build -t product-api .

docker run --name product-api -p 8081:8081 product-api