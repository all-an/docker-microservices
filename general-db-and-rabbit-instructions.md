
access sql dbs:
use dbeaver
auth-db
5432
USER=admin
PASSWORD=123456

product-db
5433
USER=admin
PASSWORD=123456

-------------------------

access mongodb

connect to mongodb on windows through command

mongosh

db.sales.insert({"id":123, "name":"Test"})

db.sales.find()

-------------------------

access rabbit on browser

http://localhost:15672/#/

USER=guest
PASSWORD=guest