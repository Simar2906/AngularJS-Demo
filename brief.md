Here are the major directives and services used in AngularJS with corresponding features in Angular2+.

### 1. **ng-true-value and ng-false-value:**
   - **AngularJS:** Used with `ng-model` for checkboxes to set the model value when the checkbox is checked or unchecked.
     ```html
     <input type="checkbox" ng-model="isChecked" ng-true-value="'Yes'" ng-false-value="'No'">
     ```
   - **Angular (2+):** Similar functionality is achieved using the `[(ngModel)]` syntax for two-way data binding.
     ```html
     <input type="checkbox" [(ngModel)]="isChecked" [value]="'Yes'">
     ```

### 2. **ng-show and ng-hide:**
   - **AngularJS:** Used to conditionally show or hide elements based on an expression.
     ```html
     <div ng-show="isVisible">This will be shown</div>
     ```
   - **Angular (2+):** Similar functionality is achieved using the `*ngIf` directive.
     ```html
     <div *ngIf="isVisible">This will be shown</div>
     ```

### 3. **ng-click:**
   - **AngularJS:** Used to handle click events on elements.
     ```html
     <button ng-click="onClick()">Click me</button>
     ```
   - **Angular (2+):** Similar functionality is achieved using the `(click)` event binding.
     ```html
     <button (click)="onClick()">Click me</button>
     ```

### 4. **ng-required:**
   - **AngularJS:** Used to make an input field mandatory.
     ```html
     <input type="text" ng-model="username" ng-required="true">
     ```
   - **Angular (2+):** Similar functionality is achieved using the `required` attribute.
     ```html
     <input type="text" [(ngModel)]="username" required>
     ```

### 5. **ng-controller:**
   - **AngularJS:** Defines the controller for a view.
     ```html
     <div ng-controller="MyController">
       <!-- Controller logic and view -->
     </div>
     ```
   - **Angular (2+):** Replaced with component-based architecture. Components encapsulate both the controller and view.
     ```html
     <app-my-component></app-my-component>
     ```

### 6. **ng-app:**
   - **AngularJS:** Declares the root of the AngularJS application.
     ```html
     <html ng-app="myApp">
     ```
   - **Angular (2+):** Replaced with `AppModule` and `bootstrapModule` in Angular.
     ```typescript
     import { BrowserModule } from '@angular/platform-browser';
     import { NgModule } from '@angular/core';

     @NgModule({
       imports: [BrowserModule],
       bootstrap: [AppComponent]
     })
     export class AppModule { }
     ```

### 7. **ng-repeat:**
   - **AngularJS:** Used for iteration over a collection.
     ```html
     <ul>
       <li ng-repeat="item in items">{{ item }}</li>
     </ul>
     ```
   - **Angular (2+):** Replaced with `*ngFor` for iteration.
     ```html
     <ul>
       <li *ngFor="let item of items">{{ item }}</li>
     </ul>
     ```

### 8. **ng-change:**
   - **AngularJS:** Used to execute a function when the value of an input element changes.
     ```html
     <input type="text" ng-model="name" ng-change="onChange()">
     ```
   - **Angular (2+):** Similar functionality is achieved using the `(change)` event binding.
     ```html
     <input type="text" [(ngModel)]="name" (change)="onChange()">
     ```

### 9. **Data Binding in AngularJS:**
   - **AngularJS:** Two-way data binding is achieved using `ng-model`.
     ```html
     <input type="text" ng-model="name">
     ```
   - **Angular (2+):** Two-way data binding is achieved using `[(ngModel)]`.
     ```html
     <input type="text" [(ngModel)]="name">
     ```

### 10. **$index:**
   - **AngularJS:** Represents the index of the current item in an `ng-repeat`.
     ```html
     <ul>
       <li ng-repeat="item in items">{{ $index }}: {{ item }}</li>
     </ul>
     ```
   - **Angular (2+):** Replaced with `let i=index` in `*ngFor`.
     ```html
     <ul>
       <li *ngFor="let item of items; let i=index">{{ i }}: {{ item }}</li>
     </ul>
     ```

### 11. **$scope:**
   - **AngularJS:** The scope is an object that refers to the application model.
     ```javascript
     app.controller('MyController', function($scope) {
       $scope.message = 'Hello, AngularJS!';
     });
     ```
   - **Angular (2+):** Replaced with component properties and services.
     ```typescript
     @Component({
       selector: 'app-my-component',
       template: '<p>{{ message }}</p>'
     })
     export class MyComponent {
       message = 'Hello, Angular!';
     }
     ```

### 12. **$eval:**
   - **AngularJS:** Used to evaluate an expression in the context of a scope.
     ```javascript
     $scope.expressionResult = $scope.$eval('2 + 2');
     ```
   - **Angular (2+):** Similar functionality is achieved using TypeScript expressions directly in the template.
     ```html
     <p>{{ 2 + 2 }}</p>
     ```

### 13. **$http:**
   - **AngularJS:** Service for making HTTP requests.
     ```javascript
     $http.get('/api/data').then(function(response) {
       $scope.data = response.data;
     });
     ```
   - **Angular (2+):** Replaced with `HttpClient` module.
     ```typescript
     import { HttpClient } from '@angular/common/http';

     constructor(private http: HttpClient) {
       this.http.get('/api/data').subscribe(data => this.data = data);
     }
     ```

### 14. **Filter Pipe and Other Pipes:**
   - **AngularJS:** Used for filtering and transforming data in templates.
     ```html
     <ul>
       <li ng-repeat="item in items | filter:searchText">{{ item }}</li>
     </ul>
     ```
   - **Angular (2+):** Pipes are also used for similar purposes.
     ```html
     <ul>
       <li *ngFor="let item of items | filter: searchText">{{ item }}</li>
     </ul>
     ```

### Important Topics:

#### Custom Directives, Link, Template, Head:
   - **AngularJS:** Custom Directives are a way to extend HTML with new elements and attributes. The `link` function is used for post-compilation DOM manipulation, and the `template`

 property defines the directive's view.
   - **Angular (2+):** Similar concepts exist in Angular, where directives are used to create reusable components. The `ngOnInit` lifecycle hook is commonly used for initialization, and the `template` or `templateUrl` property defines the view.

#### How to Invoke Action in Parent from Child using Custom Directives:
   - **AngularJS:** In AngularJS, you can use `$scope.$emit` or `$scope.$broadcast` to communicate between parent and child controllers.
   - **Angular (2+):** Communication between parent and child components is often done using `@Input` for parent-to-child communication and `@Output` for child-to-parent communication.

Keep in mind that AngularJS and Angular (2+) have significant architectural differences, and the shift from AngularJS to Angular involves understanding and adapting to the new component-based architecture. Angular provides a more modular and scalable structure compared to AngularJS.