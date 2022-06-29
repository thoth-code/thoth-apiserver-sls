package common

import "log"

func Check(err error) error {
    if err != nil { log.Println(err.Error()) }
    return err
}
