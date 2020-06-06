# ZaneTimeLogCounter

A web tool to log time spent on tasks.

A Time Log Entity is a JSON object that tracks how many minutes were spent on a specific task on a specific day.

Each task can either have the number of minutes spent, or it can have any number of sub tasks, which again, can either be the amount of time, or another set of subtasks.

A Log entity can also have other, undefined types, providing extensibility to this system.

Example:

```
{
  "date": "2019-11-18",
  "organize": { "organize": 42 },
  "awesome-side-project": {
    "organize": 147,
    "research": 4,
    "front-end": {
      "dev": 18,
      "test": 51
    }
  }
}
```

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

### Development server

Run `npm start` for a dev server. Navigate to [http://localhost:4200](http://localhost:4200). The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `npm run ng -- generate component component-name` to generate a new component. You can also use `npm run ng -- generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run ng -- e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `npm run ng -- help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deployment

To be determined...

# Troubleshooting

## No binary for Chrome browser on your platform

You may come across this error if you don't have the Chrome Browser installed. I like to use Chromium on Ubuntu with [Snap](https://snapcraft.io) so I had to make this update:

```
export CHROME_BIN=/snap/bin/chromium
```

To determine where your Chromium is installed, run `which chromium`.
