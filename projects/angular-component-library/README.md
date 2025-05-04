# AngularComponentLibrary

This library was generated with [Angular CLI](https://github.com/angular/angular-cli).

-   [License] (LICENSE)

The library includes a list of different interaction components:

-   alert
-   badge
-   bordered-btn
-   borderless-btn
-   checkbox
-   circle-btn
-   collapsible
-   color-palette
-   context-menu
-   custom-select
-   date-picker
-   date-range-picker
-   date-time-picker
-   dropzone
-   duration-input
-   filled-btn
-   loader
-   modal
-   multi-select
-   navbar-btn
-   no-data
-   non-modal
-   popover
-   search-input
-   segmented-btn
-   select
-   table
-   tabs-view
-   tag-btn
-   toggle-btn
-   tooltip



## Development

### How to add new component

- create new folder unter component
- add component
- add tests (spec and stories)
- add component in public-api.ts

### Code scaffolding

Run `ng generate component component-name --project angular-component-library` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project angular-component-library`.

> Note: Don't forget to add `--project angular-component-library` or else it will be added to the default project in your `angular.json` file.


### Run development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Link library with target dev project

Run `link:lib` script. After that a linked folder will be created in `AppData\Roaming\nvm\<version>\node_modules`. Now run the following command in the target project:

> npm link angular-component-library


### Link and Watch Library

Run `cd dist/angular-component-library && npm link` to create a link.

Then run `ng build angular-component-library --configuration production --watch` to build library and watch on it.

The built library’s /dist folder will later be used by the demo app. --watch mode is used to hot-reload (rebuild dist folder). his means when changes are made to the library files, our demo app consuming library from the /dist folder will also get the changes.

In the target project run `npm link angular-component-library` install the library if not already seen and then run `ng serve`.



## Build 


### Build lib for prod

> ng build angular-component-library --configuration production"


### Build lib for prod and pack lib

```
ng build angular-component-library --configuration production

cd dist/angular-component-library && npm pack
```

## Use lib in target project and run:

Create a `lib` folder in the target project and copy packed lib into the folder.

Install the library in the target project: 
`npm install libs\angular-component-library-0.0.1.tgz`

Optional:
Add `"preserveSymlinks": true` to build -> options in angular.json.

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

## Running

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running storybook

Run `ng run angular-component-library:storybook`

Navigate to `http://localhost:6006`

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


## Publishing

After building your library with `ng build angular-component-library`, go to the dist folder `cd dist/angular-component-library` and run `npm publish`.



## Version Infos

`~`version `Approximately equivalent to version`, will update to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

`^`version `Compatible with version`, will update to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.
