import json
import service

# 1) [POST] /api/user
def post_user(event, context):
    body = json.loads(event["body"])
    if ("email" not in body) or ("password" not in body):
        return {
            "statusCode": 401,
            "body": json.dumps({
                "error": "Wrong email or password"
            })
        }

    err_msg = service.add_user(body["email"], body["password"])

    return {
        "statusCode": 200 if err_msg == "null" else 501,
        "body": json.dumps({
            "error": err_msg
        })
    }

# 2) [POST] /api/user-token
def post_user_token(event, context):
    body = {
        "error": "null"
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body),
    }

    return response

# 3) [DELETE] /api/user-token
def delete_user_token(event, context):
    body = {
        "error": "null"
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response

# 4) [GET] /api/all-note
def get_all_note(event, context):
    body = [{
        "nid": 123,
        "ownerUid": 456,
        "forkedUid": 789,
        "title": "Println",
        "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"Hello\")\n}",
        "tag": ["go"],
        "ref": ["https://go.dev/"]
    }]

    response = {
        "statusCode": 200,
        "body": event['queryStringParameters']['lang']
    }

    return response

# 5) [POST] /api/all-note
def post_all_note(event, context):
    body = {
        "error": "null"
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response

# 6) [GET] /api/my-note
def get_my_note(event, context):
    body = [{
        "nid": 123,
        "ownerUid": 456,
        "forkedUid": 789,
        "title": "Println",
        "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"Hello\")\n}",
        "tag": ["go"],
        "ref": ["https://go.dev/"]
    }]

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response

# 7) [POST] /api/my-note
def post_my_note(event, context):
    body = {
        "error": "null"
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response

# 8) [PUT] /api/my-note/{nid+}
def put_my_note(event, context):
    body = {
        "error": "null"
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response

# 9) [DELETE] /api/my-note/{nid+}
def delete_my_note(event, context):
    body = {
        "error": "null"
    }

    response = {
        "statusCode": 200,
        "body": event['pathParameters']['nid']
    }

    return response
