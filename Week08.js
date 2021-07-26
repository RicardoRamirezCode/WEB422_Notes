/*
Week 08 - Services
    service is a component, can be a web service, data service, for example that provides raw data, etc
    task is to provide a service(data)
    so it performs:
        a task
        does not have a user interface
        its main task is to perform data service operations

    

    Example:
        have a component called, MyComponent, and a Service
        MyComponent is going to ask for data and Service is going to generate the data and pass back
        data can be generated from a db, within the service, hardcode, etc

    In our week8 demo we have a component that will develop some static data and send it back to the client

        1. Create the structure of the data
        we created a post.ts file in our src/app
        and added:
        export class Post {
            id: number;
            userId: number;
            title: string;
            body: string;
        }

        all this has done is define the structure of the data we are going to use (send from service to component)

        2. Create the service
        now to create the service:
            ng g s DataManager

        it imports injectable, which means it can be used in other components
        then we add the import of our structure of our data
            import { Post } from './post';

        we added a method to return a static post:
            getStaticPost(): Post {
                return {
                userId: 1,
                id: 1,
                title: "Week Eight",
                body: "This is a sample of a post."
                }
            }

        3a. Service that Generates Static Data
        then in our app.component.ts we set staticPost to be of type Post (after importing Post)
            import {Post} from './post';

            staticPost: Post;

        then in our initialization we need to set this staticPost to call this service

        to call this service (in our app.component.ts) we need to develop a constructor
        since the service is injectable, we can inject in constructor of our class

        so in our app.component.ts we import:
        import { DataManagerService } from './data-manager.service';

        and write our constructor as so:
        constructor(private data: DataManagerService) {};

        as it is a property of a class, we use this.
        ngOnInit(){
            this.staticPost = this.data.getStaticPost();
        }

        3b. Service that provides data from web-server using HttpClient

        http.get() does not return a Post, http is a variable of type httpClient
        in our constructor (for DataManager) we add:
            constructor(private http: HttpClient)
        and we add an import:
            import { HttpClient} from '@angular/common/http';

        while the server will responsd a json array, this get does not get what server responds
        because it is general purpose (it can return anything)
        so we will receive it, then need to convert it/parse it to what we want

        So return type of get function is observable
        
        we need to import observable (it is part of library rxsj not angular)
            import { Observable } from 'rxjs';

        Note in:
            getLivePosts(): Observable<Post[]>{
                return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
            }

        returns something of type Observable<Post[]>

        this.livePosts = this.data.getLivePosts().subscribe(data => this.posts = data);
        here,
        this.data.getLivePosts() is observable
        when we subscribe, the data is the information that is observable
        which in our case is a an array of Posts
        and we add the code that says:
            this.posts = data   // so what you gave us is set to this.posts
        
        lastly you need to go to your app.module.ts and add to imports:
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule     <== add this
            ],

        we got it in the form of observable, we subscribe to the observerable, and pass method
        that provides the actual object and let it be equal to it     

    How to read a parameter that is passed in a link:
        this will allow use to retrieve one post versus all the posts
        so we created a Post Component
            ng g c Post
        we added a route for our example in our app-routing.module.ts
            const routes: Routes = [
                {path: 'post/:id', component: PostComponent},
                {path: 'post', component: PostComponent}, 
                {path: '', redirectTo: 'posts', pathMatch: 'full'}
                ];

        in our constructor (of Post component) we add:
                constructor(private route: ActivatedRoute)

        now we add:
        constructor(private data: DataManagerService, private route: ActivatedRoute) {}
        and:
        post: Post;
        private postSub:any;
*/