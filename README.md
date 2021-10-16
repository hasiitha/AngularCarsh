# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Commit number 1 : -  
The Application is installed angular-cli  in the PC globally using the
## npm install -g @angular-cli
 Initialize a new angular project using 
 ## ng new my-app(my-app is the for the app dont type my app).
 Then your folder structure will be created 
 
 Move to the app folder and app.component.html and delete all the auto generated code.
 now just add to <h1></h1> tags and write hello inside them ->you can see that that hello will be published in your browser(localhost 4200 or what ever the port which runs).
 now just go to the app.component.ts
 /*
 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  //also you can give a type to your variable like this ->  title :string  = 'my-app';
}
in here we can see that template url is connected to our html file and style which are specific to this components will be attached too.

You can get the tittle dynamically in the html component using <h1>{{title}}</h1>
*/
 
 


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
