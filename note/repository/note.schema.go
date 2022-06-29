package repository

// AWS DDB item schema
type Note struct {
    Id      string      // AWS DDB partition key
    Title   string      // AWS DDB attribute
    Code    string      // AWS DDB attribute
    Owner   string      // AWS DDB attribute
    Tags    []string    // AWS DDB attribute
    Refs    []string    // AWS DDB attribute
    Scope   uint16      // AWS DDB attribute
}
