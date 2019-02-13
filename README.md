# NC News Frontend

Northcoders News is a social news aggregation, web content rating, and discussion website. It is similar to [Reddit](https://www.reddit.com/).

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added.

This application is built using React and consumes the data provided by my [backend](https://github.com/adieCodes/nc-news-be).

## Getting Started

I have followed TDD (Test Driven Development) best practises when building this application. If you would like to see the tests in action or run the application locally instructions to do so are below.

If you would prefer you can view a deployed version [here](http://adie-nc-news-fe.herokuapp.com/).

### Prerequisites

This application uses Node v8.9.4 (Stable). To verify you have Node installed you will need to open a terminal window and run the following commands

```
$ which node
```

If the command does not return a file path you will need to follow the appropriate instructions below:

* [Node (and npm)](https://docs.npmjs.com/getting-started/installing-node)

### Installing

After verifying you have both Node.js and MongoDB installed you can install a local version by completing the following steps:

1.  Open a terminal instance
2.  Clone this repository from GitHub by running `git clone https://github.com/adieCodes/nc-news-fe.git` in the terminal
3.  Add dependencies by typing `npm install` in the terminal

## Running the tests

To run the tests you will need to open a new terminal instance and run `npm test`. You will see the result of each test along with a brief explanation of the test.

### What's tested?

Any function that alters state has been tested.

### Build steps

Build steps are included to ensure:

1.  code meets reasonable eslint defaults
2.  tests are passed before code is committed to git

## Built With

* [NodeJS](https://nodejs.org/en/) - JavaScript runtime
* [Create React App](https://github.com/facebook/create-react-app) - Creates React apps with no build configuration

## Acknowledgments

Everyone at [Northcoders](https://northcoders.com/) for their outstanding curriculum and support. They gave me the knowledge and confidence to build a career in Software Development.
