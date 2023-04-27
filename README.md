# Monorepo - Pokedex

## Overview

- Pokedex is a project based on monorepo concept. It is developed using lerna, which is a popular and widely used tool written in JavaScript for setting and managing monorepo. This project includes 3 different codebases, two packages which are components and utils where we have stored reusable code and one project called pokedex which includes tha main functionality. The project pokedex is developed in next js which enables us to create full-stack Web applications by extending the latest React features.

### Create Development Environment

```bash
// clone the application
$ git clone https://github.com/anuragnagarkota/pokedex-lerna-app
```

#### Install The Dependencies

```bash
// Install the required npm modules
$ npm run bootstrap

// build the packages
$ npm run build
```

#### Running the app in development

```bash
$ npm run package:pokedex
```

#### Running the app in production mode

```bash
$ npm run start
```

#### Running the app using docker

```bash
# 1: Building image from base folder
$ docker build .
# 2: Runnnig the image
$ docker run -d -p <EXPOSED PORT>:<CONTAINER PORT> <imageId>
```

#### Testing

```bash
$ npm run test
```
