.PHONY: build clean deploy init

BENVS=env GOARCH=amd64 GOOS=linux
GFLAGS=-ldflags="-s -w"

build:
	export GO111MODULE=on
	$(BENVS) go build $(GFLAGS) -o bin/createPublicNote note/services/createPublicNote/main.go

clean:
	rm -rf ./bin ./vendor go.sum

deploy:build
	sls deploy --verbose

init:clean
	chmod u+x gomod.sh
	./gomod.sh
	go mod tidy
