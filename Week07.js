/*
Week 07

What is the advantages of using module based software or frameworks? What is the advantage of Angular?  -- Why not use html and css alone? What do we gain by using Angular (or React or component based web programming)?
    We have our 'home page' and can divide our page into different sections, each managed by a component/module. If we want to refresh page (send request to server), only one component should be updated; then only that component will be refreshed by server.
    Ajax also tried to solve this, why refresh whole page when only part needs to be updated.

    Prevents redundancy - reloading/refreshing only what is needed
    Software resusablity - when you develop software/module/code, this component can be used in different projects/ by different people; using libraries in C++, importing class in Java are examples in other languages
    Reduce the load of the web-server - web server does not need to render whole thing for the client, it sends all data to client and it is the client that is rendering content of the webpage
        browser downloads libraries for angular, it handles it behind the scene (server just dumps it on client side and client side renders it itself)

Conditional (ternary) operator in Typescript:
    Example:
        <td [style.background-color]="showBackground ? greyBackground: null">Column 1</td>

Directives:
    are some expressions by which you can modify the DOM tree

    Examples:
        <!-- should use 'let user of users'-->
        <tr *ngFor="let i of users">
            <td>{{i.firstName}}</td>
            <td>{{i.email}}</td>
            <td>{{i.age}}</td>
            <td>{{i.language}}</td>
            <td>{{i.active}}</td>

            <!--Only works if i.active is boolean-->
            <td *ngIf = "i.active">Active</td>
            <td *ngIf = "!i.active">Inactive</td>
        </tr>

Event handling:
    in JS we create a button and onClick is equal to name of event handler; here it is similar

    Example:
        <button (click)="clickHandler($event)">Click Me</button>

        clickHandler(msg:any) {
            console.log("Button Click Detected");
            console.log(msg);
        }
        msg is an object of type click and has multiple properties we can extract



Communication Between Parent and Child

    suppose there is an event inside of a child component, for example a button click
    if we want the event that happens, and is handled in child component, to be fired and the parent to know of event
    ie want to fire event on child component, but want parent component to hear it and handle it

    we have written a child component, and added a button; to commmunicate with parent we need to 'fire event manually'
    to communicate between parent and child, we do this by using:
        input and output directives

    we create an output directive and we create an event, and we propagate/send/transmit to parent
    the parent will receive that event manually and handle it

    first we go to child component.ts, in handler we define a directive that sends a message to the child to the parent
        in class we use:
        @Output() btnClicked = new EventEmitter();  // means we want to define something that should be sent out; name of variable we want to send we call btnClicked
        Make sure to import from @angular/core

    // here we can create events; with this event this object is fired; and message/object is passed
    this.btnClicked.emit("Button is clicked on child component");

    this is catchable, we can retrieve this value/event
    we can catch in our parent
    for the parent to catch we add the following to our app.component.html
        <app-child (btnClicked)="parentHandler($event)"></app-child>
        where btnClicked is the variable we created

    in our app.component.ts we add a handler:
        parentHandler(msg: any) {
            console.log("I am the parent recieving a message from the child component");
            console.log(msg);
        }


    To handle sending from parent to child:
        <app-child msg="Message from parent to child component"></app-child>

        In the child component we need to 'catch' this

    extra documentation:
        https://angular.io/guide/inputs-outputs

Routing in Angular:
    we created several components, about, home, page-not-found
    note, without routing rules defined, any thing we type into url will take us to 'main page'

    routing rules : deals with whatever we 'put' into the url and what occurs depending on what they enter

    note as we create components, they are added automatically to app.module.ts

    our rules are defined in the app-routing.module.ts

        const routes: Routes = [
            {}

        ];
        Routes is an array consisting of routing objects

        if user did not define any path:
            {path: '', redirectTo: '/home', pathMatch: 'full'}

        if user enters something else:
            {path: '**', component: PageNotFoundComponent}

    extra documentation:
        https://angular.io/api/router/Route


*/