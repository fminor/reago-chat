#!/bin/bash

pushd server
    # Ensure imports are installed prior to linting
    go install

    # Use golangci-lint
    golangci-lint run
popd

pushd client
    npm install
    npm run lint
popd