### classical
a class is like a blueprint. Classes inherit from other classes.

cons:

- Class inheritance creates parent/child object taxonomies as a side-effect.
- inflexible class structure
- duplicate existing code, rather than adapting

### prototypal

An instance is created by cloning an existing object that serves as a prototype. This instance—often instantiated using a factory function or `Object.create()` — can benefit from selective inheritance from many different objects.
- prototype delegation
- functional inheritance
- object composition

