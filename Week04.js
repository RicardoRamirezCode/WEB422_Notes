// Week 04 Lecture

/*
Handling Events in React
    react events are named using camelCase
    with JSX you pass a function as the event handler, rather than a string

    Example:
        <button onClick={processClick}>     // note onClick is camelCase
             Click me!
        </button>


    Here we are creating a component named ClickCounter:

    import { useState } from 'react';

    function ClickCounter(props){
        // used to create react (component) state:
        const [numClicks, setNumClicks] = useState(0);         
        // numClicks -name
        // setNumbClicks -setter
        // useState(0) hook to set up initial value to 0
        

        function increaseNumClicks(e){ // 'e' is the current event object
            setNumClicks(prevClicks => prevClicks + 1);         // for setting states we have two options, 
                                                                // either directly set state or use call back function as done here
        }

        // user interface for this component - we have only a button with an event 'onClick' and a handler increaseNumClicks
        return <button onClick={increaseNumClicks}>Clicks: {numClicks}</button>
        // also we show the value on the button; Clicks : {numClicks}
    }

    export default ClickCounter;


Rendering Data
    for example we need to create component and put all sample code in component; we used RenderingData.js

    {users[0].active && <p>{users[0].user} is Active!</p>}
    here if first condition is true then second condition will render

    {users[0].active ? (
        <p>{users[0].user} is Active!</p>
    ) : (
        <p>{users[0].user} is Inactive!</p>
    )}
        // if condition true then first part evaulates, otherwise second

    Array.map()
        in our example under RenderingData.js we have an array
        and we use a map to render the data into an html table
        map is similar to forEach in js; call back function will go through all of the array elements

Using Bootstrap
    Add to <head> in public/index.html:
        <!-- Bootstrap 3.4.1 -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    
    Add in body at end in public/index.html:
        <!-- jQuery -->
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>
        <!-- Bootstrap 3.4.1 -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
        
        NOTE: if you use bootstrap you need to include jQuery. For simple functionality of bootstrap it may not be needed

    In our root component App.js we add:
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    .....

    Getting our table to show up correctly in bootstrap:
        https://getbootstrap.com/docs/4.0/content/tables/
        in our RenderingData.js where the table div is located we add:
            <table className="table table-striped">

        For each row we add a key attribute, a unique value
        Right now we have:
            users.map( user = >)
                ...
            and user is a call back parameter

        We can not only have the current user as a call back parameter, but the index as well

Returning Null
    returning null means do not render anything
        For example:
            
            if(!loading){
                return <p>Done Loading! - TODO: Show the data here</p>;
            }else{
                return null; // don't render anything - still loading
            }



"Rounting" in React
    Steps:
        1. npm install react-router-dom
        2. add components (such as Home, etc to src directory)
        3. update your main entry point index.js:
            import into main entry point index.js:
                import { BrowserRouter } from 'react-router-dom';
                as well as components from step 2
            update index.js (entry point file), add:
                ReactDOM.render(
                    <React.StrictMode>
                        <BrowserRouter>
                        <App />
                        </BrowserRouter>
                    </React.StrictMode>,
                document.getElementById('root')
                );
        4. update your App.js to use following Swith added by library we installed:
            add import for Switch and Route components:
                import { Route, Switch } from 'react-router-dom';
 
            
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/Projects'>
                    <Projects />
                </Route>
                <Route exact path='/Project'>
                    <Project />
                </Route>
            </Switch>
            
            With this switch only one component will be rendered at a time


            

    in express controller.js sets different routes
    for this course we use React Router library

    npm install react-router-dom
    set in src our routes (Home, Project, Projects)

    update index.js; need to wrap App component with BrowswerRouter
    and import { BrowserRouter } from 'react-router-dom'

    Need to update index.js using switch component and:
        import { Route, Switch } from 'react-router-dom';
        and import our components:
        import Home from './Home';
        import Projects from './Projects';
        import Project from './Project';

    Finally need to render each component:
          
        ”/” renders <Home />
        “/projects” renders <Projects />
        “/project” renders <Project />
  


    Passing parameters:
        For passing parameter we need to change Route:
        
        Example:
            <Route exact path='/Project/:id'>
              <Project />
            </Route>

        Then useParams hook

        import {useParams} from 'react-router-dom'; //placed in our Project.js
        and inside component:

    Adding Query Parameters to our Routes (use location hooks)
        For query parameters we do NOT change Route (unlike with passing parameters in above), we go to the component itself

        localhost:3000/projects?page=2&perPage=10

        add useLocation hook
            import { useLocation } from 'react-router-dom';

        add to component:
            let location = useLocation();

    Using Query Parameters:
        In our example location.search is a string, after we parse it then it will become an object
        This queryStringObject, we can not use {} as interpolation that will allow string not an object
        We can use JSON.stringify to change to a JSON object:
            <p>Query String Object in JSON: {JSON.stringify(queryStringObject)}</p>
      

        To parse return need to import:
            import queryString from 'query-string';
        Lets us convert query string into an object
        
        Then we can have:
            http://localhost:3000/projects?page=2&perPage=10
            and access the values

Linking to a Route:
    Can NOT do 'usual' links such as:
        <a href="/myRoute">My Route</a>
    as this would lead to whole page reloaded (we want to load full app at beginning not after every route change)

    Use:
        <Link to='/myRoute>My Route</Link>
        must also import Link form react-router-dom for any component that uses Link
        
    See example in App.js

Redirect:
    <Redirect to='/newRoute">
    Must import Redirect from react-router-dom
    We can add to default Route so when user enters invalid url will redirect to main page

    In our Week4-demo-app we have a HomeButton 'page' with both a hyperlink redirect and a JavaScript code example
    See HomeButton.js
        useHistory hook provided in our import from 'react-router-dom'
        history is the object to get this
    Important:
        Sometimes you do not have the ability to use html to lead user to another page, you can implement with this history.push("/")
    

Implementing Bootstrap for our Navigation Bar
    https://getbootstrap.com/docs/3.4/examples/navbar/


Creating a UI with 3rd Party Components
    https://github.com/sictweb/web422/tree/master/Code%20Examples/week4

    npx create-react-app my-app

    //created a blank app
    removed all root component
    removed all css from App.css
    removed all css from index.css

    install router support for Routing:
        npm install react-router-dom

    install bootstrap (prior assignments we embedded into html as it was page-first)
    install bootstrap for react
        npm install react-bootstrap bootstrap

    install bootrap to support react-router-dom
        npm install react-router-bootstrap              


    CSS:
    update App.css:
        span.navbar-brand:hover{
          cursor: pointer;
        }

    Bootstrap CSS
        since we use Bootstrap Components for react, must explicitly import included CSS in our App component
        import 'bootstrap/dist/css/bootstrap.min.css';

        NOTE: prior it was page first so we added to our html here it is Applciation-first so we do above instead
 
    Navigation Bar
        react-boostrap provides the react components used in example code below

            <Navbar bg="light" expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand>WEB422 - React Routing</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/products">
                            <Nav.Link>Products</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        add to root component App.js
        to make use need to add next section

    Container, Routes and Components
        add imports for all previous components
            import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
            import { LinkContainer } from 'react-router-bootstrap'
            import { Redirect, Route, Switch } from 'react-router-dom';
    
        need to wrap App container in index.js using BrowserRouter and import:
        import {BrowserRouter} from 'react-router-dom';

Fetching data From Remote API:
    In our example at this point Products is empty, and we want to fetch the data from remote API
    First we need a state to hold data we fetch from API
        example see Products.js
            const [products, setProducts] = useState();

    Then we fetch from our API
        inside useEffect we fetch data from API:
            useEffect(()=>{
                setLoading(true);
                fetch("https://reqres.in/api/unknown").then(res=>res.json()).then(products=>{
                    setLoading(false);
                    setProducts(products.data);
                })
            }, []);

    setLoading is declared earlier in Products.js and used as we wait for data to be fetched


Bootstrap Card (Bootstrap Pannel)
    Card used in Product.js is a bootstrap Card (called bootstrap panel in previous veresion)
        https://getbootstrap.com/docs/4.0/components/card/
    Our example in Product.js follows below documentation

    documentation on how to use is found here:
        https://react-bootstrap.github.io/components/cards/



*/