package repository

import (
    "github.com/aws/aws-sdk-go/aws"
    "github.com/aws/aws-sdk-go/service/dynamodb"
    "github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
    . "github.com/thoth-code/thoth-apiserver-sls/common"
)

func (n Note) Put() error {
    // Get DynamoDB connection
    conn := GetConn()

    // Marshal note
    item, err := dynamodbattribute.MarshalMap(n)
    if Check(err) != nil {
        return err
    }

    // Put note
    input := &dynamodb.PutItemInput{
        Item:      item,
        TableName: aws.String(TABLE_NAME),
    }
    if _, err = conn.PutItem(input); Check(err) != nil {
        return err
    }

    return nil
}
