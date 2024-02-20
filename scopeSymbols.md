In AngularJS custom directives, the `scope` property is used to define the type of scope binding between the directive and its parent (usually a controller or another directive). There are different options for scope bindings, and they are represented by symbols such as '=', '@', '<', and '&'. Here's an explanation of each:

1. **`=` (Two-way binding):**
   - This creates a two-way binding between the parent scope and the directive's isolated scope. Changes in either scope are reflected in the other.

   ```javascript
   app.directive('myDirective', function() {
       return {
           scope: {
               data: '='
           },
           template: '<div>{{ data }}</div>'
       };
   });
   ```

   Usage:
   ```html
   <my-directive data="parentData"></my-directive>
   ```

2. **`@` (Text binding):**
   - This binds the value of the parent scope's attribute (interpreted as a string) to the directive's isolated scope.

   ```javascript
   app.directive('myDirective', function() {
       return {
           scope: {
               label: '@'
           },
           template: '<div>{{ label }}</div>'
       };
   });
   ```

   Usage:
   ```html
   <my-directive label="Parent Label"></my-directive>
   ```

3. **`<` (One-way binding):**
   - This creates a one-way binding from the parent scope to the directive's isolated scope. Changes in the parent scope are reflected in the directive, but not the other way around.

   ```javascript
   app.directive('myDirective', function() {
       return {
           scope: {
               value: '<'
           },
           template: '<div>{{ value }}</div>'
       };
   });
   ```

   Usage:
   ```html
   <my-directive value="parentValue"></my-directive>
   ```

4. **`&` (Expression binding):**
   - This is used to bind a method or function from the parent scope to the directive's isolated scope. It allows you to execute expressions in the context of the parent scope.

   ```javascript
   app.directive('myDirective', function() {
       return {
           scope: {
               action: '&'
           },
           template: '<button ng-click="action()">Click me</button>'
       };
   });
   ```

   Usage:
   ```html
   <my-directive action="parentFunction()"></my-directive>
   ```

These are the main options for scope bindings in AngularJS custom directives. The choice of which option to use depends on the specific requirements of your application and how you want data and behavior to be shared between the directive and its parent.