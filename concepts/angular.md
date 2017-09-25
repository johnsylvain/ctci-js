### How to share data between controllers
Creating a service that holds the data and injecting it into the controllers. This is the cleanest and easiest way to test.

Other methods:
- using `events`
- using the `$rootScope` to add the data on (not a good practice)

### Where to put DOM manipulations
DOM manipulations should only be in directives

### One-way binding vs. two-way binding
– One way binding implies that the scope variable in the html will be set to the first value its model is bound to (i.e. assigned to)
– Two way binding implies that the scope variable will change it’s value everytime its model is assigned to a different value
