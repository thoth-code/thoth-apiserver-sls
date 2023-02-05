package dto

type CreatePublicNoteDto struct {
    Title   string
    Code    string
    Owner   string
    Tags    []string
    Refs    []string
}
