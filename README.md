# Clementine.js FCC Boilerplate pnald version with React

[![Join the chat at https://gitter.im/johnstonbl01/clementinejs](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/johnstonbl01/clementinejs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Overview

The pnald version of Clementine FCC combined with https://github.com/jondcoleman/clementine-react<br>
With a "gulp build" fix<br>
To Start:<br>
gulp (Build and run production)<br>
gulp build (Build only)<br>
gulp check (check jsx and js)<br>
gulp development (check, build and watch)<br>

The pnald version is a personalized version of Clementine.js FCC with a couple improvements:<br>
Added Jquery<br>
Added Bootstrap<br>
Added w3.css responsive<br>
Added a controller for web socket use with socket.io<br>
Added head.html and foot.html to do more easy the html customization<br>
Added urlparser<br>
Added TWITTER passport Authentication<br>
     ---TWITTER_KEY=your-client-id-here<br>
     ---TWITTER_SECRET=your-client-secret-here<br>
Added a sample of array manipulation inside mongodb<br>
Forced Cache function<br>
Added Compression<br>
Working with Node 4.8.4<br>
Added a Logging with Winston<br>
Added body-parser<br>
Added cookie-parser<br>
Added LOCAL passport Authentication<br>
Added emailjs for the local Auth...<br>
    ---EMAILUSER=email<br>
    ---EMAILPASS=password<br>
    ---EMAILHOST=hostserver<br>
    ---EMAILPORT=port<br>

Clementine.js is a lightweight boilerplate for fullstack JavaScript development which utilizes MongoDB, Express and Node.js. The boilerplate errs on the side of transparency and simplicity, making it an ideal starting point for beginner and seasoned developers alike. 

The [Free Code Camp](http://www.freecodecamp.com) version of Clementine.js is meant for use when completing projects as part of the FCC curriculum. This version includes GitHub authentication using [Passport](http://passportjs.org/).

## Versions

There are 3 versions of Clementine.js:

- [**Standard**](https://github.com/johnstonbl01/clementinejs): the simplest version of Clementine.js. Intended for those who wish for the smallest and least intrusive footprint OR to implement features on their own.
- [**Angular**](https://github.com/johnstonbl01/clementinejs-angular): a slightly more complex version of the same application. This version employs the use of AngularJS as the front-end framework.
- **Free Code Camp (FCC)** (this version): A modified version of the standard boilerplate that is intended for use with the [Free Code Camp](http://freecodecamp.com/) curriculum.

# Quick Start Guide

### Prerequisites

In order to use Clementine.js, you must have the following installed:

- [Node.js](https://nodejs.org/)
- [NPM](https://nodejs.org/)
- [MongoDB](http://www.mongodb.org/)
- [Git](https://git-scm.com/)

### Installation & Startup

To install Clementine.js, simply enter the below in the terminal window:

```bash
$ git clone https://github.com/johnstonbl01/clementinejs-fcc.git your-project
```

To install the dependencies, enter the following in your terminal:

```
$ cd your-project
$ npm install
```

This will install the Clementine.js components into the `your-project` directory.

### Setup GitHub Authentication

Please follow [this guide](http://www.clementinejs.com/tutorials/tutorial-passport.html#GitHubAppSetup) to register the application with GitHub and get API keys / secrets.

### Local Environment Variables

Create a file named `.env` in the root directory. This file should contain:

```
GITHUB_KEY=your-client-id-here
GITHUB_SECRET=your-client-secret-here
MONGO_URI=mongodb://localhost:27017/clementinejs
PORT=8080
APP_URL=http://localhost:8080/
```

### Starting the App

To start the app, make sure you're in the project directory and type `node server.js` into the terminal. This will start the Node server and connect to MongoDB.

You should the following messages within the terminal window:

```
Node.js listening on port 8080...
```

Next, open your browser and enter `http://localhost:8080/`. Congrats, you're up and running!

### c9.io Setup

If you're using c9.io, please [reference the documentation](http://www.clementinejs.com/versions/fcc.html#c9.ioSetup) for instructions to get Clementine.js working in the c9 environment.

## Contributing

This is an open-source project, and contributions are always welcome! To see ways to contribute, please review the [contribution guidelines](http://www.clementinejs.com/developers/contributing.html).

## Documentation

Complete documentation can be [found here](http://www.clementinejs.com).

### Tutorial

You can find a complete step-by-step tutorial on how to create this app from the ground up [here](http://www.clementinejs.com/tutorials/tutorial-passport.html).

## Features

| Features           | Standard  | Angular   | FCC       |
|:---------          |:--------: |:--------: |:---------:|
| MongoDB            | _Yes_     | _Yes_     | _Yes_     |
| Express            | _Yes_     | _Yes_     | _Yes_     |
| AngularJS (1.x)    | _No_      | _Yes_     | _No_      |
| Node.js            | _Yes_     | _Yes_     | _Yes_     |
| Passport           | _No_      | _No_      | _Yes_     |
| Mongoose           | _No_      | _No_      | _Yes_     |

## License

MIT License. [Click here for more information.](LICENSE.md)
