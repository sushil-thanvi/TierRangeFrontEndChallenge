# TierRanges

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

High Level Algo :

1. Check If any row exist ( check object inside array if empty or not) by checking array length.

2. If no row exists , then 1st row would be created with min/max qty along with unique name ( by using qty + units) & one more 2nd row would be created which will hold min value ( min + max of row 1) & max val would be empty.

3. Check row index for the updated row, if it is first row (and max val is less then min value of last row of array) & value less then existing max value of updated row, then create new row with minimum units having max value + 1 of updated row & max value would be some as updated row's max value.

4. If updated row max value is greater than existing value, then just update min value of next row ( max value + 1) & keep max value as it is.

5. ( check if it is first row or not) If updated row min value is less then max value of above row , then modify the above row max value by updated row min value - 1.

6. ( check if it is first row or not) If updated row min value is greater then max value of above row , then add row above updated row which will have min value = max value + 1 of above row & max value = min value -1 of updated row.

7. Check if updated row max val is greater then min value of last row of array, delete all the row below updated row and add new row with min value of ( max+1 of updated row ).

