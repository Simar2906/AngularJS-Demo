1. **Two-way Binding Directive (`twoWayBindingDirective`):**
   - **Scope Binding:** `scope: { data: '=' }`
   - **Functionality:**
     - The directive receives a reference to `parentData` through two-way binding.
     - The input field in the directive is bound to `data`.
     - Changes in the input field update both the directive's local `data` and the `parentData` in the controller.
     - The div displays the updated value in real-time.

2. **Text Binding Directive (`textBindingDirective`):**
   - **Scope Binding:** `scope: { label: '@' }`
   - **Functionality:**
     - The directive receives the string value of `label` from the parent.
     - The div inside the directive displays the static value of `label`.
     - Changes in the directive do not affect the parent (`label` is read-only inside the directive).

3. **One-way Binding Directive (`oneWayBindingDirective`):**
   - **Scope Binding:** `scope: { value: '<' }`
   - **Functionality:**
     - The directive receives the initial value of `value` from the parent.
     - The div inside the directive displays the static value of `value`.
     - Changes in the directive do not affect the parent (`value` is read-only inside the directive).

4. **Expression Binding Directive (`expressionBindingDirective`):**
   - **Scope Binding:** `scope: { action: '&' }`
   - **Functionality:**
     - The directive receives a reference to the `parentFunction` from the parent.
     - The button in the directive triggers the `parentFunction` when clicked.
     - Allows the directive to execute actions defined in the parent scope, enabling communication between the directive and the controller.

In summary:
- The Two-way Binding Directive allows bidirectional data flow between the directive and the parent.
- The Text Binding Directive receives a string value from the parent and displays it.
- The One-way Binding Directive receives an initial value from the parent and displays it (read-only).
- The Expression Binding Directive allows the directive to trigger a function defined in the parent scope.