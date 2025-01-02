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


## Link library with target dev project

Run `link:lib` script. After that a linked folder will be created in `AppData\Roaming\nvm\<version>\node_modules`. Now run the following command in the target project:

> npm link angular-component-library

## Code scaffolding

Run `ng generate component component-name --project angular-component-library` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project angular-component-library`.
> Note: Don't forget to add `--project angular-component-library` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build angular-component-library` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build angular-component-library`, go to the dist folder `cd dist/angular-component-library` and run `npm publish`.

## Running unit tests

Run `ng test angular-component-library` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Link and Watch Library

Run `cd dist/angular-component-library && npm link` to create a link. 

Then run `ng build angular-component-library --configuration production --watch` to build library and watch on it. 

The built library’s /dist folder will later be used by the demo app. --watch mode is used to hot-reload (rebuild dist folder). his means when changes are made to the library files, our demo app consuming library from the /dist folder will also get the changes.

In the target project run `npm link angular-component-library` install the library if not already seen and then run `ng serve`.


## Further help

Run `ng build --configuration production` to build lib and run `cd dist/angular-component-library && npm pack` to pack and create lib in dist folder



## Version Infos
`~`version `Approximately equivalent to version`, will update to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

`^`version `Compatible with version`, will update to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.