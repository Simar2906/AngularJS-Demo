In AngularJS, when creating custom directives, you can use various options and symbols to define the behavior and properties of the directive. Here is a list of commonly used options and symbols:

1. **`restrict` (String):**
   - Values: `'E'`, `'A'`, `'C'`, `'M'`
   - Definition: Specifies the restriction on how the directive can be used in the HTML.
   - Meaning:
     - `'E'`: Element (as a custom HTML tag).
     - `'A'`: Attribute (as an attribute of an HTML element).
     - `'C'`: Class (as a CSS class).
     - `'M'`: Comment (as an HTML comment).

2. **`template` (String):**
   - Definition: Defines an inline HTML template for the directive.
   - Example:
     ```javascript
     template: '<div>This is an inline template</div>'
     ```

3. **`templateUrl` (String):**
   - Definition: Specifies the URL of an external HTML template file.
   - Example:
     ```javascript
     templateUrl: 'path/to/template.html'
     ```

4. **`replace` (Boolean):**
   - Definition: Specifies whether the directive's element should replace the original element in the DOM.
   - Example:
     ```javascript
     replace: true
     ```

5. **`scope` (Object):**
   - Definition: Defines an isolated scope for the directive.
   - Symbols:
     - `'@'`: One-way string binding.
     - `'='`: Two-way binding.
     - `'&'`: Binding for passing a function or method.

   - Example:
     ```javascript
     scope: {
         attribute1: '@',   // One-way string binding
         attribute2: '=',   // Two-way binding
         attribute3: '&'    // Function binding
     }
     ```

6. **`controller` (Function or Array):**
   - Definition: Associates a controller function with the directive.
   - Example:
     ```javascript
     controller: function() { /* Controller logic */ }
     ```

7. **`controllerAs` (String):**
   - Definition: Provides an alias for the controller in the directive's template.
   - Example:
     ```javascript
     controllerAs: 'ctrl'
     ```

8. **`link` (Function or Array):**
   - Definition: Defines a post-link function that allows manipulation of the DOM.
   - Example:
     ```javascript
     link: function(scope, element, attrs) { /* DOM manipulation logic */ }
     ```

9. **`compile` (Function):**
   - Definition: Defines a compile function that allows manipulation of the directive's template before linking.
   - Example:
     ```javascript
     compile: function(element, attrs) { /* Template manipulation logic */ }
     ```

10. **`transclude` (Boolean or 'element'/'attribute'/'^'):**
    - Definition: Specifies whether to include content from the directive's original element in the transclusion.
    - Example:
      ```javascript
      transclude: true
      ```

These are some of the commonly used options and symbols in AngularJS custom directives. Understanding how to use them allows you to create flexible and reusable components in your applications.