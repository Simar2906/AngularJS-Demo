### AngularJS - Custom Directives, Link, Template:

1. **Custom Directives:**
   - **Definition:** Custom directives are a way to create new HTML elements or attributes, extending the functionality of HTML.
   - **Example:**
     ```html
     <div my-directive></div>
     ```
     Here, `my-directive` is a custom directive.

2. **Link Function:**
   - **Definition:** The link function is part of the directive's definition and is used for post-compilation DOM manipulation.
   - **Purpose:** It allows you to interact with the DOM after the directive has been compiled and linked.
   - **Example:**
     ```javascript
     app.directive('myDirective', function() {
         return {
             link: function(scope, element, attrs) {
                 // Manipulate the DOM element here
             }
         };
     });
     ```

3. **Template Property:**
   - **Definition:** The template property in a directive defines the HTML view associated with the directive.
   - **Purpose:** It allows you to encapsulate HTML markup and logic into a reusable directive.
   - **Example:**
     ```javascript
     app.directive('myDirective', function() {
         return {
             template: '<div>This is my custom directive</div>'
         };
     });
     ```

### Angular - Directives, ngOnInit, Template, Input, Output:

1. **Directives in Angular:**
   - **Definition:** Directives in Angular are used to create reusable components with their own behavior and templates.
   - **Example:**
     ```typescript
     @Directive({
         selector: '[myDirective]'
     })
     export class MyDirective {
         // Directive logic here
     }
     ```

2. **ngOnInit Lifecycle Hook:**
   - **Definition:** `ngOnInit` is a lifecycle hook in Angular that is called after the component has been initialized.
   - **Purpose:** It is commonly used for initialization tasks.
   - **Example:**
     ```typescript
     export class MyComponent implements OnInit {
         ngOnInit() {
             // Initialization logic here
         }
     }
     ```

3. **Template and templateUrl in Angular:**
   - **Template Property:**
     ```typescript
     @Component({
         selector: 'app-my-component',
         template: '<div>This is my component</div>'
     })
     ```

   - **templateUrl Property:**
     ```typescript
     @Component({
         selector: 'app-my-component',
         templateUrl: 'path/to/my-component.html'
     })
     ```

4. **Input and Output in Angular:**
   - **@Input:**
     - **Definition:** Allows data to flow from the parent component to the child component.
     - **Example:**
       ```typescript
       @Input() inputData: string;
       ```

   - **@Output:**
     - **Definition:** Allows the child component to emit events that the parent component can listen to.
     - **Example:**
       ```typescript
       @Output() outputEvent = new EventEmitter<string>();
       ```

### Invoking Action in Parent from Child:

#### AngularJS:
In AngularJS, you can use `$scope.$emit` to emit an event upwards to its ancestors or `$scope.$broadcast` to broadcast an event downwards to its descendants.

```javascript
// Child Controller
$scope.$emit('eventName', data); // Emit event upwards

// Parent Controller
$scope.$on('eventName', function(event, data) {
    // Handle event from child
});
```

#### Angular (2+):
In Angular, use `@Input` for parent-to-child communication and `@Output` for child-to-parent communication.

**Parent to Child:**
```typescript
// Parent Component
<app-child [inputData]="parentData"></app-child>

// Child Component
@Input() inputData: string;
```

**Child to Parent:**
```typescript
// Child Component
@Output() outputEvent = new EventEmitter<string>();

// Emitting event in some method
this.outputEvent.emit('Data from child');

// Parent Component
<app-child (outputEvent)="handleChildEvent($event)"></app-child>

// Handling event in parent component
handleChildEvent(data: string) {
    // Handle data from child
}
```

In summary, AngularJS and Angular provide different mechanisms for communication between parent and child components, and understanding the concepts of directives, lifecycle hooks, and data binding is crucial for effective component-based development.