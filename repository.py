# Docker MariaDB endpoint must be '127.0.0.1', not 'localhost'
#   Ref: https://stackoverflow.com/a/23471897
db_endpoint = "127.0.0.1"
db_username = "blue"
db_password = "toor"
db_database = "thoth"

# Create Engine
#   Ref: https://mariadb.com/ko/resources/blog/using-sqlalchemy-with-mariadb-connector-python-part-1/
from sqlalchemy import create_engine
engine = create_engine(f"mariadb+mariadbconnector://{db_username}:{db_password}@{db_endpoint}:3306/{db_database}?charset=utf8", convert_unicode=False)

# Create Base
#   Ref: https://stackoverflow.com/a/48363732
from sqlalchemy.ext.automap import automap_base
Base = automap_base()
Base.prepare(engine, reflect=True)

UserData = Base.classes.userData
NoteData = Base.classes.noteData

# Create sessionmaker
#   Ref: https://docs.sqlalchemy.org/en/14/orm/session_basics.html#using-a-sessionmaker
from sqlalchemy.orm import sessionmaker, scoped_session
Session = scoped_session(sessionmaker(engine))

# Callables
#   insert_user: func(email string, password string) void
def insert_user(email: str, password: str) -> None:
    # Reference of using with ~ as ~ expression:
    #   https://docs.sqlalchemy.org/en/14/orm/session_basics.html#framing-out-a-begin-commit-rollback-block
    with Session() as session, session.begin():
        user = UserData(email=email, password=password)
        session.add(user)
        session.commit()
