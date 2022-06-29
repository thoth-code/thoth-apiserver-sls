package main

import (
    "log"
    "bytes"
    "context"
    "encoding/json"

    "github.com/google/uuid"
    "github.com/aws/aws-lambda-go/events"
    "github.com/aws/aws-lambda-go/lambda"
    "github.com/aws/aws-sdk-go/aws"
    "github.com/aws/aws-sdk-go/aws/session"
    "github.com/aws/aws-sdk-go/service/dynamodb"
    "github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

// AWS Lambda Proxy Request functionality (default behavior)
// @see https://pkg.go.dev/github.com/aws/aws-lambda-go/events#APIGatewayProxyResponse
type Response events.APIGatewayProxyResponse
type JSON   map[string]interface{}

type Note struct {
    Id      string
    Title   string
    Code    string
    Owner   string
    Tags    []string
    Refs    []string
    Scope   uint16
}

// Handler is our lambda handler invoked by the `lambda.Start` function call
func Handler(ctx context.Context) (Response, error) {

    // Initialize a session that the SDK will use to load
    // credentials from the shared credentials file ~/.aws/credentials
    // and region from the shared configuration file ~/.aws/config.
    // @see https://pkg.go.dev/github.com/aws/aws-sdk-go/aws/session
    sess := session.Must(session.NewSessionWithOptions(session.Options{
        SharedConfigState: session.SharedConfigEnable,
    }))

    // Create DynamoDB client
    svc := dynamodb.New(sess)

    // Create note struct
    note := Note{
        Id:     uuid.NewString(),
        Owner:  "testOwner",
        Title:  "testTitle",
        Code:   "testCode",
        Tags:   []string{ "testTag" },
        Refs:   []string{ "testRef" },
        Scope:  0,
    }

    // Marshal note
    av, err := dynamodbattribute.MarshalMap(note)
    if err != nil {
        log.Fatalf("Got error marshalling new movie item: %s", err)
    }

    // Put note
    input := &dynamodb.PutItemInput{
        Item:      av,
        TableName: aws.String("notesTable"),
    }
    if _, err = svc.PutItem(input); err != nil {
        log.Fatalf("Got error calling PutItem: %s", err)
    }

    // Reply
    body, _ := json.Marshal(JSON{ "error": nil })
    var buf bytes.Buffer
    json.HTMLEscape(&buf, body)

    resp := Response{
        StatusCode:      200,
        IsBase64Encoded: false,
        Body:            buf.String(),
        Headers: map[string]string{
            "Content-Type":         "application/json",
            "X-Thoth-Func-Reply":   "post-note-handler",
        },
    }

    return resp, nil
}

func main() {
    lambda.Start(Handler)
}
