/*
Week 10 - Testing

Various kinds of testing: Unit testing, integrating testing, network testing, blackboard testing, whiteboard testing, etc.

We will concern ourselves with Unit testing.
It only test one module/component.

As opposed to Integrated testing, where we test the integration/incorporation of two components with each other to see how they will interact.

For unit testing, assume we have a comp.ts and comp.html.
We want to develop a script that tests this.
Testing, in this scope, compares an 'expected value' and 'return value' and compares if they are equal.

This could be accomplished using 'print' statements to the console; though this would be unprofessional. Wanting to test if a function throws an exception, or seeing if a value returns in a certain range can become complicated and long.

Testing Library
To solve this we use testing libraries. For our examples we will be using Jasmine (testing) library

prior when creating a new project, we used cli
        ng new nameofapp --routing -g -S
    which prevented angular from using testing
    now to include testing at creation
        ng new nameofapp --routing

our spec.ts file is the file used for testing
the app.component.spec.ts file includes some default test cases

to run testing, use cli:
        ng test

keywords in jasmine framework
    https://jasmine.github.io/api/edge/global

Generating a new component, ComponentOne, creates a test spec for component


*/