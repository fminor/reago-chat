# reago-chat

Chap app in Go with React Typescript and Material UI

## Quick Start

```bash
./scripts/clean.sh
./scripts/build.sh
./scripts/lint.sh
./scripts/test.sh
./scripts/run.sh
```

Go to <http://localhost:8080>.

## References

[Building a Chat Application in Go with ReactJS](https://tutorialedge.net/projects/chat-system-in-go-and-react/)

## Dependencies

* [golang](https://golang.org/)
* [Node.js](https://nodejs.org/) & [TypeScript](https://www.typescriptlang.org/) with [npm](https://www.npmjs.com/) to build the application bundle at compile time

## Part 1 - Initial Setup

### Client

React with Typescript client started from [template](./client/material-ui-nextjs-ts.md).

### Server

Go backend.

## Part 2 - Simple Communication

```bash
cd server
go run main.go
```

```bash
cd client
npm run dev
```

Go to <http://localhost:3000/chat> and hit button.  See "hello" in (Firefox) console and in server log.
