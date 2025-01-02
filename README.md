# AngularComponentLibrary

This library was generated with [Angular CLI](https://github.com/angular/angular-cli).

* [License] (LICENSE)

The library includes a list of different interaction components:
* alert
* badge
* bordered-btn
* borderless-btn
* checkbox
* circle-btn
* collapsible
* color-palette
* context-menu
* costum-select
* date-picker
* date-range-picker
* date-time-picker
* dropzone
* duration-input
* filled-btn
* loader
* modal
* multi-select
* navbar-btn
* no-data
* non-modal
* popover
* search-input
* segmented-btn
* select
* table
* tabs-view
* tag-btn
* toggle-btn
* tooltip


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

## Build and pack lib

```
ng build angular-component-library

cd dist/angular-component-library && npm pack
```

## Create "libs" folder in target project and run:

npm install libs\angular-component-library-0.0.1.tgz 
npm uninstall angular-component-library


Add  `"preserveSymlinks": true` to build -> options in angular.json.
```
"build": {
    "builder": "@angular-devkit/build-angular:application",
    "options": {
    "outputPath": "dist/test-imp",
    "index": "src/index.html",
    "browser": "src/main.ts",
    "preserveSymlinks": true,
```

On export error delete cache in .angular folder
