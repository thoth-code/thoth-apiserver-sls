.PHONY: build clean deploy init

build:
	export GO111MODULE=on
	env GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/create-note create-note/main.go

clean:
	rm -rf ./bin ./vendor go.sum

deploy:build
	sls deploy --verbose

init:clean
	chmod u+x gomod.sh
	./gomod.sh
	go mod tidy
