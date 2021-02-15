# GopherJS

## Installation

Transpiles Go code to Javascript.

1. `go get -u github.com/gopherjs/gopherjs`

2. Download old-go

    1. `go get golang.org/dl/go1.12.16`
    2. `go1.12.16 download`
    3. `export GOPHERJS_GOROOT="$(go1.12.16 env GOROOT)"`

3. Build: `gopherjs build`

## Analysis

**Pros**

1. I do like developing in go more than JavaScript.
2. I like that the output is one binary.

**Cons**

1. The min binary is very large -- >1mb.
2. Completely unreadable JavaScript.
3. I generally don't like the indirection of transpiling

Overall, I think gopherjs does a nice job for what it is, but I don't think I'd
use it myself.
