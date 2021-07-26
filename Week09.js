/*
Week 09
Topics:
Forms in Angular
Sync between Model and View

Synchronization between two components
    two components: components.ts (the model) and component.html (the view)
    assume we have a form in our component.html, with a variety of inputs and a submit button

    inside the component.ts, we have inside a model:
    Student with studentName, studentID, and courses

    we want the contents of the input boxes to be synchronized with the model we have in our ts file
    we want them overwritten immediately, NO submit button needed

    first we need our model
        ng generate component Student
    then build our model in student.ts

    to make a connection we need to use ng model

    <input type="text" [(ngModel)]="studentName">
    so this is a reference to studentName

    also need to inmport in app.modules.ts
    imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule 
        ],
    
    Now if we change it in the field, dynamically it is now the changed name. In our static code it is still the same value for name.

    To show this:
    <form #f='ngForm' (ngSubmit) = "onSubmit(f)" > this makes f a reference to this form

    <div *ngIf="f.submitted">
        <strong >Value: </strong> {{f.value | json}}
        
    </div>
        // here above it will change as we are typing, it is automatically synch and updated



    Handling errors:
        Name: <input type="text" required autofocus name = "name" [(ngModel)]="studentName" #name = "ngModel"> {{name.errors | json}}
*/