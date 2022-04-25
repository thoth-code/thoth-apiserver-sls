#!/bin/bash

prefixes="get post delete put"
for prefix in $prefixes; do
    methods=$(cat serverless.yml | sed -nr "s/\s+(${prefix}_[a-z0-9_]+):$/\1/gp")
    for method in $methods; do
        echo "Testing $method :"
        sls invoke local -f $method
    done
done
