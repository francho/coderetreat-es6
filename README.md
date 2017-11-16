# Javascript scaffold for the Global Day of Code Retreat

## What is this?

This is an start point for practice and improve your developer skills in the [Global Day of Code Reretat](http://coderetreat.org/)

It has all necesary to solve the [Conway's game of life](#user-content-conways-game-of-life-rules) using Test Driven Development (TDD) and modern Javascript (ECMAScript 6 / ES2015)

## Installation

Fork this repository, install the dependencies with:

`yarn install`

... and code, enjoy, learn, throw out your code and repeat ;)

## Usage

You must write your javascript code in `./src/` folder and your tests in `./test/` folder.

### Run all tests once 

`yarn test`

It runs code linter + unit testing + code coverage

### Run mocha tests continuously 

`yarn start`

### Check your code style

`yarn linter`

Check if your code follows [Airbnb's javascript style guide](https://github.com/airbnb/javascript)  

## After each iteration... DELETE your code

`yarn reset`

code retreat rules ;)

### More info

- [mocha](https://mochajs.org/) – unit test framework
- [chai](http://chaijs.com/) – BDD / TDD assertion library
- [ncy](https://github.com/istanbuljs/nyc) – code coverage tool

## Conway's game of life rules

![](https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif)

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated". Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

    Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
    Any live cell with two or three live neighbours lives on to the next generation.
    Any live cell with more than three live neighbours dies, as if by overpopulation.
    Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

[source: Wikipedia](https://en.wikipedia.org/wiki/Conway's_Game_of_Life)
