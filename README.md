## BMW Angular Developer Challenge

Challenge:

Write a simple Angular 13 frontend application using Type Script that connects to a simple node/java REST api



API:

The list all quakes in America:

https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-01-01&endtime=2023-01-11&minmagnitude=5

Documentation:

https://earthquake.usgs.gov/fdsnws/event/1/



Create a simple angular application

1.   Use angular cli to create an angular application
2.   Create a NgRx/store and configure it to connect to the above api for listing earth quakes
3.   Create a component to display the results of the GET call in a table
4.   Create a detail page
5.   Must include scripts to serve the angular application locally on port 5000
6.   Host on your own GitHub instance and share with us for review
7.   Interview to be scheduled

## Installation
Run `npm install` to install all the dependencies

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/bmw-ng-test` directory. Use the `--prod` flag for a production build.

To build and run a production bundle and serve it, run `npm run prod`. The application will run on `http://localhost:5000`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
