// Week 3 Lecture

/*
React:
    JavaScript library for building user interfaces
    react comes from Facebook
    Angular come from Google
    both are open source

    previously we worked with the DOM; changes made via vanilla javascript and jQuery
    react differs in we build the user interface using components

    prior to react we called our aplication 'page-first'; when creating we had html first then embed css and js
    into html

    with component first we have js module, then in that we template/markup the user interface embed into js code, and css into js code

    page-first design into app-first design

Components
    a Javascript code container; container contains template (markup) and javascript code for logic and data
    components can hold other components

    all components are contained inside a root component


Getting Started with React

    use a statement/command provided by library create-react-app
    use npx ; a package/program runner

    1. First run cli:
    npx create-react-app my-app
    // will create a folder named 'my-app'

    2. if you want to start project
        cd my-app
        npm start
            // note npm start will automatically open in web browser
            // will display root component

        node_module folder will be created; same as before for libraries
        public folder - holds index.html page (which is single page for for front end web app (SPA - single page application) )
                        our SPA all beings from div with id root
        
        src folder - holds index.js (entry point for program); here we call reactdom to render App (root)component into document.getElementById('root')
                    index.css (available for all our applications)
                    app.js - has function App (uses uppercase to indicate it is a function used to create component)

    // Entry point of our components
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')

        // this means we render this (root) component (namely App) into the getElementById ('root')



        
Introduction to React Components
    note prior we used required to import, here we use 'import'

    Creating our own component
        1. In src directory create an js file named same as component name (Hello.js)
        2. we wrote the function, returned embedded markup
        3. we used export
        4. to use in App.js we need to then import

        To make it 'show up' we render the component onto another component, in our example the only option is the root component
            in the App.js we used <hr /> to create a horizontal bar then <Hello />
    
);



Introduction to JSX
    a syntax extension to JavaScript

    const element = (
        <p className="greeting">
            Hello, world!
        </p>
    );
        becomes
    const element = React.createElement(
        'p',
        {className: 'greeting'},
         'Hello, world!'
        );



        // here the markup we call a JSX; class needs to be renamed className !!!!!!

Embedding Expressions in JSX
        here we embed javascript into the markup
        function Hello() {
            const name = 'Josh Perez';
            return (                            // note we wrapped in () - not needed in newer version for multi-line markup
                <p>Hello {name}!</p>            // note unlock handlebars where we used {{}} here we use a single {}
            );
        }

        // note above we returned a single element
        // for multiple element put in a single element <div>


JSX is an expression as well
    means you can use JSX inside of if statements, and for loops, assign to variables, accept as arguments, and return it from functions

    Example:
       function getGreeting(user) {
        if (user) {
             return <p>Hello, {formatName(user)}!</p>;
            }
        return <p>Hello, Stranger.</p>;
        }
 

Accepting 'Props'
        communication between (parent and child) components using 'props'
        a way to hold data inside the component (conceptually components can be thought being like JavaScript functions)

        Example:
            function Hello (props) {
                return (
                    <p>Hello {props.fName} {props.lName}!</p>
                );
            }

            allows us to provide fName and lName values to components using:
                <Hello fName="Jason" lName="Perez" />


Introducing 'Hooks'
    called lifecycle hooks similar to constructor/destructors
    it is run at a special moment of the class object life cycle
    
    in Clock.js we created a clock that will take a prop and render the time; passed data of current time
    but we want a live clock; so we use state (we commented out the props for the next section)

    for our clock we have two hooks: useState and useEffect
    
Adding "state"    
    is it a way to store data within the component that is synchronized with UI of the component
   
    
    useState will be run when the Clock is generated
    second hook is useEffect - the moment component is mounted to parent component

        in our clock example, we have two special moments in our useEffect; the callback function will defined
            when component is removed from UI (or parent component)


*/