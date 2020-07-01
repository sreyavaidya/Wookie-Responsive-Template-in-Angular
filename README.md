Angular is a front-end framework which is used to create web applications. It uses typescript by default for creating logics and methods for a class but the browser doesn’t know typescript. Here webpack comes in picture, webpack is used to compile these typescript files to JavaScript. In addition, there are so many configuration files you will need to run an angular project on your computer.
Angular CLI is a tool that does all these things for you in some simple commands. Angular CLI uses webpack behind to do all this process.

Note: Please make sure you have installed node and npm in your system. You can check your node version and npm version by using the following command:

node --version
npm --version

# Requirements

Angular CLI Version: 9.1.9
Node Version: 12.18
node_modules : Run 'npm install' before running the application to install the required dependencies.

# How to Setup Angular Projects

Step 1: Install NPM (Node Package Manager)

Step-2: Install angular cli
npm install - g @angular/cli

Step-3: Create new project by this command
Choose yes for routing option and, CSS or SCSS.

Step-4: Go to your project directory
cd myNewApp

Step-5: Run server and see your application in action
ng serve 

# WokkieResponsiveTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7. The project is build using Angular and SCSS.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
