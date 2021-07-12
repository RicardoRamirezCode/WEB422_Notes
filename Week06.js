/*
Week 06 Introduction to Angular
    platform for creating front end (client side) apps
    this differs from React, which was a library for building user interfaces

    Angular does provide more functionality for a developer

    Similarities to React:        
        Component-based development and architecture
        Declarative style of programming, for the UI
        Extends HTML, manages the DOM, de-emphasize (decouple) direct/explicit DOM manipulation [we work on components not DOM]
        Decouples client-side app dev concerns from server-side app dev concerns

    Differences to React:    
        Some argue that React is more focused to only building UIs
        Angular describes itself as a complete app dev platform
        Angular’s default programming language is TypeScript (not JavaScript)

    Typescript (comes from Microsoft) is a superset of Javascript. While JavaScript is a loosly typed language
        Loosly typed languagae allows flexability for developers to code, but has disadvantages such as syntax error checking
        Typescript enforces typing

        transpile - converts Typescript code into JavaScript code

    Getting Started with Angular
        note ng stands for angualar command

        1. need to install angular
            npm install -g @angular/cli
                -g argument means global

        2. creating a new angular app
            ng new my-app --routing -S -g
                here we are generating a new project/app named my-app 
                --routing just informs ng command to generate app with module of routing; without you will have to create routing module yourself
                -g means stops using git
                -S means stop creating the test module
                last two options keeps project simple (as we are not creating more complex ones at this moment)

            after running above command it will prompt with kind of stylesheet to use

        3. Run the app
            cd into my-app directory
            ng serve --open
            OR
            ng serve -o

    Structure of Angular (differences from React)
        note modules end in ts (typescript) instead of js
        also contains a src folder, but here we do not have a public folder
        index.html is directly put into src directory
        in react we have a div with id root, here we have <app-root></app-root> in our index.html (it is a root component in this case)
        src/app folder contains 
            app.module.ts   // root module
            app.component (.ts, .html, . css)   // these are the root components
                for .html the <router-outlet> is for routing
            app-routing.module.ts       // routing module [here as we selecting --routing option when creating]

                


        // we can look at the app.component.ts
        import { Component } from '@angular/core';

        @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',        
        styleUrls: ['./app.component.css']
        })
        export class AppComponent {
        title = 'my-app';
        }
        // here we are giving the URL of the template
        // we can instead give the template directly by changing it to:
        template: `<p>The root component is running</p>`

        So you can put the user interface directly inside the component


        props are in the export statement, you can set the type explicitly:
            title: string = 'my-app';


    Three parts of a TypeScript (.ts) file
        imports
        decorator (eg @NgModule, @Component)
        class

    for these decorator, it is a function that can receive an object as a paramater 

    Components can be thought of as comprising of three parts: Template, Metadata and Component
    Metadata
        @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',        
        styleUrls: ['./app.component.css']
        })

        declare the user interface, here the templateURL and styleUrls
        then selector; which is used for creating the element in the parent user interface
            ie render current component

    previously on the server side we used MVC (for front end we used design pattern MVVM - model, view, viewmodel)
        the template can be thought of as a view
        component as a view model (VM)
        Model (M) means with dealing with data, in our case how our app communicates with API
            -covered next week when we cover services

    

    Creating (Generating) a New Component
        ng generate component foo
        OR
        ng g c foo

        will generate new component, class is different here.
        has an empty constructor and empty ngOnInit

        ngOnInit is angular life cycle hook (equivalent to hook useEffect)

    Naming
        if we create a new component name helloWorld (note must be camelCase)
        ng generate component helloWorld

        then:
            files are names hello-world.component.(css, html, ts)
            component name is:
                export class HelloWorldComponent implements....
            selector would be:
                app-hello-world


    Using Templates in your Components        
        have used templates in lodash, in React we called it jsx syntax
        here in angular, means how (different ways) we render our properties onto the html
        inside our angular project (week6) we used:
            interpolation {{}}
            property binding []
            template statements



    Interpolation and Template Expressions
        import { Component, OnInit } from '@angular/core';

        @Component({
        selector: 'app-foo',
        templateUrl: './foo.component.html',
        styleUrls: ['./foo.component.css']
        })
        export class FooComponent implements OnInit {

        studentName: string = "Jason Bourne";
        studentPhoto: string = "https://upload.wikimedia.org/wikipedia/en/6/60/Jason_bourne_infobox.jpg";
        studentUpdated: Date = new Date();

        constructor() { }

        ngOnInit() {
        }
        }

        // here we first generate some properties (studentName, etc)
        // then we use interpolation to render component
        
        // we added to foo component three properties
        
        to render these properties onto template, use interpolation

        {{studentName}}     // is called a interpolation
        see examples of use in root component

        for date, date is a js object, so t render method .toLocaleDateString()
            previously we change to json before rendering
    
    Second method is:

    Property Binding:
        above to show an image we used interpolation {{studentPhoto}}
        <div><img [src]="studentPhoto"></div>

        property binding symbol is []
        we wrap the attribute of the element in [], this is property binding
        'right side' is not a string, it is template expression
            what is in quotation must be a property of the component or expression of the property

        above example property image was for rendering image
        for rendering a string value using property binding:
            <span [innerHTML]="propertyName"></span>        // with propertyName being the property


    studentPhotos: Array<string> = ["https://upload.wikimedia.org/wikipedia/en/6/60/Jason_bourne_infobox.jpg",
     "https://upload.wikimedia.org/wikipedia/commons/d/d1/Matt_Damon_%28cropped%29.jpg"]
    Here we create an array of objects, and pass into child component
    we add it to the root component

    <app-hello-world [photos]="studentPhotos"></app-hello-world>
        here photos should be the attribute of app-hello-world component; (ie photos should be property of hello world)
        the "right side" property of root component (the parent)

    when adding to root component we need to write as :
    @Input() photos: Array<string> 
    means photos is a property that can receive data from the parent

    now in hello-world-component.html we can include:
    <img [src]="photos[0]">


    Third method is:
    Event Binding /Template Statements

    <button (click)="toggleImage()">Toggle Image </button>
        here event binding is :
            (click)="toggleImage()"
        left side the event
        right side is the template statement

    passing event object would be:
        <button (click)="toggleImage($event)">Toggle Image</button>

    need to go to component to generate function toggleImage()

    alternative to method used in our code:
        import { Component, OnInit, Input } from '@angular/core';

        @Component({
        selector: 'app-foo',
        templateUrl: './foo.component.html',
        styleUrls: ['./foo.component.css']
        })
        export class FooComponent implements OnInit {

        studentName: string = "Jason Bourne";
        @Input() photos: Array<string>
        studentUpdated: Date = new Date();
        currentPhoto: number = 0;

        toggleImage() {
            // increment currentPhoto until we reach the end of the array, then start from 0
            this.currentPhoto = (this.currentPhoto == this.photos.length - 1) ? 0 : this.currentPhoto + 1;
        }

        constructor() { }

        ngOnInit() {
        }
}


RECAP:
How to render component:
        to get new component to 'show up' (render) need to go to root component (see app.component.html)
        use selector (in our Foo example it is app-foo)

How to create component:
            on top is import statement, bottom is the class and the middle consists of the decorator
            decorator gives the location of the template of component, and selector (how to render this component)

            again we render component as element by <app-componentName></app-componentName>     where app-componentName is the selector

            recall class is not a javascript class, it is a class for ts
                here we can set the properties for the component, example:
                    studentName: string = "Ricardo Ramirez";
                    property name: type = initial value

            ngOnInit is similar to useEffect from React

        
How to create properties inside component:
            inside class, example:
                studentName: string = "Ricardo Ramirez";
                property name: type = initial value

Using Templates in your Components        
        have used templates in lodash, in React we called it jsx syntax
        here in angular, means how (different ways) we render our properties onto the html
        inside our angular project (week6) we used:
            interpolation {{}}
                <div><img src="{{studentPhoto}}"></div>
            property binding [] /template expressions  - attribute wrapped in []
                <div><img [src]="studentPhoto"></div>           // NOTE while 'right side' looks like a string IT IS NOT A STRING but a property of the component!!! (right side is a template expression)
            event binding /template statements
                see below

        Note: when setting an element property to a non-string data value, you must use property binding
            if we, in our week 06 example have:
                <p>Student Updated: {{studentUpdated}}</p>
                instead of
                <p>Student Updated: {{studentUpdated.toLocaleDateString()}}</p>

            this would not be allowed

            if, for example we had an array called restaurants, this would not work:
                <p>Student Updated: {{restaurants}}</p>
            however we could alter it as such:
                <p>Student Updated: {{JSON.stringify(restaurants)}}</p> // as it will convert the array to a JSON string

        For event binding, in our example HelloWorld, we have a property photos a string array and in our hello-world.component.html
                <button (click)="toggleImage()">Toggle Image</button>       // here right side is called the 'template statement'; it is function that is called
                corresponding function, toggleImage, must be inside class of component


Aside, event binding is opposite of property binding.
property binding is bound from the data to the user interface
event binding is from the user interface fed into the component

Communication - passing data from parent component to child component
    previously, when passing data from parent to child we used props; in angular we dont have this

    passing data into the child:
        <app-hello-world [photos]="studentPhotos"></app-hello-world>        // right side is the property of the current component (the parent), left side is the property of the child (here it is hello world component)
        in our hello-world component.ts we want our photos to receive data, so we add the @Input()

        so @Input() allows this property to receive values from parent


*/