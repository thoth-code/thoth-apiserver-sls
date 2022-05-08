import repository

def add_user(email: str, password: str) -> str:
    try:
        repository.insert_user(email, password)
    except:
        return "Cannot sign up"
    return "null"
