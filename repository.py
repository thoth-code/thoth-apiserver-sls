import sqlalchemy

# Docker MariaDB endpoint must be '127.0.0.1', not 'localhost'
#   Ref: https://stackoverflow.com/a/23471897
db_endpoint = "127.0.0.1"
db_username = "blue"
db_password = "toor"
db_database = "thoth"

# Create Engine
#   Ref: https://mariadb.com/ko/resources/blog/using-sqlalchemy-with-mariadb-connector-python-part-1/
engine = sqlalchemy.create_engine(f"mariadb+mariadbconnector://{db_username}:{db_password}@{db_endpoint}:3306/{db_database}?charset=utf8", convert_unicode=False)

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session

Base = automap_base()
Base.prepare(engine, reflect=True)

Users = Base.classes.userData
session = Session(engine)

res = session.query(Users).first()

print(res)
