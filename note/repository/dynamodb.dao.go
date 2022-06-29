package repository

import (
    "github.com/aws/aws-sdk-go/aws/session"
    "github.com/aws/aws-sdk-go/service/dynamodb"
)

func GetConn() *dynamodb.DynamoDB {
    // Initialize a session that the SDK will use to load
    // credentials from the shared credentials file ~/.aws/credentials
    // and region from the shared configuration file ~/.aws/config.
    // @see https://pkg.go.dev/github.com/aws/aws-sdk-go/aws/session
    sess := session.Must(session.NewSessionWithOptions(session.Options{
        SharedConfigState: session.SharedConfigEnable,
    }))

    return dynamodb.New(sess)
}
