# AngularComponentLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Build lib

ng build angular-component-library

cd dist/angular-component-library && npm pack

Create "libs" folder in target project and run:
npm install libs\angular-component-library-0.0.1.tgz 

Add  `"preserveSymlinks": true` to build -> options.

```
"build": {
    "builder": "@angular-devkit/build-angular:application",
    "options": {
    "outputPath": "dist/test-imp",
    "index": "src/index.html",
    "browser": "src/main.ts",
    "preserveSymlinks": true,
```
