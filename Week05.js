// Week 05 Lecture

/*
Processing Forms in React
    
    Review for HTML:
    in html we have different html elements that generally can be classified into textboxes and selectors
        
        text boxes consisting of single line and multiline (textarea)
        selectors consisting of single selectors and multiple selectors
            for multiple selectors we use either checkbox (used really for boolean values true/false); so for
            multiple selectors we really only use select dropdown

        Form elements vs data types (in React App):
        Element type        Form element                    Data type
        Textbox         <input type='text' />               string
        ''              <textarea></textarea>               string
        Selection       <input type='radio' /> group        string
        ''              <select> + <option>s                string
        ''              <input type='checkbox' /> group     not used
        ''              a single <input type='checkbox' />  boolean
        ''              <select multiple> + <option>s       string[]


    JavaScript Object - Review
        Property Accessors
            Dot notation 
                var person = { firstName: "John", lastName : "Doe" };
                var lname = person.lastName // "Doe"

            Bracket Notation
                var person = { firstName: "John", lastName : "Doe" };
                var lname = person["lastName"]; // "Doe"

        Copy JS Object
            -using spread ... – shallow copy (operand is ... )
                var p2 = { ...person };
            - using JSON – deep copy
                var p2 = JSON.parse(JSON.stringify(person));

    Example:

    function UserDataForm(props) {
        // for html form (last return) we must create a state to store the user inputted value(s) 
        const [userData, setUserData] = useState(null);

        useEffect(() => {
            setUserData({
                fullName: "Jason Borne"
            });
        }, []);
        // not all components have useEffect; useEffect means when component is created it is set up with initial value
        // we set initial value here (and not in useState()); used for updating existing form rather than create a new object

        const handleSubmit = (e) => {
            e.preventDefault();     // it is a front end app
            console.log('The Form Was Submitted: ' + JSON.stringify(userData));
            // in a 'real' app we need to not console.log but call API (call update method of API)
            // note event handler (handleSubmit ) is INSIDE the form below
        }

        const handleChange = (e) => {       // e is the event object
                                            // think of as the DOM object of the input box (so all of line <input type..../>)
            let target = e.target; // the element that initiated the event
            let value = target.value; // its value      // value user has inputed
            let name = target.name; // its name         // in our example it is "fullName"

            setUserData(userData => {
                // return a new object built with the properties from userData 
                // including a new property name:value.  If name:value exists, it will be 
                // overwritten, ie: let obj1 = {x:5,x:6}; console.log(obj1); // {x: 6}  
                return {...userData, [name]: value}; 
                // spread operator. means we want to copy 'value of user state before we set change'/original value, then do a shallow copy
                // then for property 'name' which is set to fullName change to 'value' not other properties
            });
        }

        if (!userData) {
            return null; // render nothing until the form data is loaded
        } else {
            return (        // return here in react is a template of the react component; react component returns JSX
                <form onSubmit={handleSubmit}>
                    <label>
                        Full Name:
                    <input type="text" name="fullName" value={userData.fullName} onChange={handleChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            );
        }
    }

    // if user makes changes then the internal state must reflect the change
    in input type line above in form we get value of user's name:
        value={userData.fullName}
    onChange, handler must change the value of the state

    // we have two event handlers above: handleSubmit and handleChange
    handleChange is for user changes; and set value inside state
    handleSubmit (required) handles submit;

    See Week4-demo-app-v2's UserDataForm component for example
    note that we added an age field yet did not have to update our handleChange; it is universal handler in our example
        this works as when we have a new handleChange what is changed is based on what is bound to 'name' property inside of JSX

    note for radio button we need to change checked={userData.housing === "residence"} in our example for it to function

    with the multiple selection (campuses) with the former handleChange it will not work

    if you do not set some default value, then when user hits submit if any field not changed by user then it will not be part of submission
        adding a default value to useEffect would ensure otherwise

    checkboxes, unlike in html we have a closing tag for 'input'; allowed here as input has become part of JSX and available for react
        event handler does not work for this, as you can 'check' box but box can not be 'unchecked'
        need to update handleChange

    file has a separate component to deal with files; need new hook useRef

    *********
    
            import { useRef } from 'react'

            function FileInput(props) {

            const fileInput = useRef(null);     // need to define const useRef
            
            // need to do update handle form submit; we just handle on submit not on change
            const handleSubmit = (e) => {
                e.preventDefault();
                
                // on submit it will check attached file
                if (fileInput.current.files.length > 0) {
                console.log(`Selected file - ${fileInput.current.files[0].name}`);
                }

            }

            return (
                <form onSubmit={handleSubmit}>
                <label>
                    Upload file:
                    <input type="file" ref={fileInput} />
                </label>
                <br />
                <button type="submit">Submit</button>
                </form>
            );

            }


Recap:
// how to process form, first is handleSubmit, second is handle change

    // event handler is inside form as attribute :
    // <form onSubmit={handleSubmit}>
    // it is not placed as attribute on 'submit button'

    // each form element has 'handleChange'

    then must bind the property of view model:
    const [userData, setUserData] = useState(null);
    with form controls

    this means everytime the data inside the view model values change it must immediately reflect on the html form
    accomplished via the form control 'value'; note radio buttons still must have values yet checkBox does not have value

    !!!!!!this is one way how we bind the view model (the data of the state) to the html form

    other way we bind is on onChange; if the value changed then through event handler onChange the data should immediately change

    
    for data value (form controls) on html form, we have three kinds of data: string, boolean (for checkbox), and string[] (for select)


**********

Hosting on Vercel
    vercel differs from heroku supports common webserver
    how to build up react app

    our demo app inside visual studio code project, all file structure, is just for our developing stage (including a large node_modules)
    it is not a final react project

    need to use a command
            npm run build
        this will create a new directory called build
        will include an html with our 'final single page' which has been optimized
        static will hold js managed into bundle  
        node_module contains many libraries for our developing stage, we do not deploy that; whatever is needed is bundled above      
        the files under our build folder are our final react project (all previous were for developement-stage)

    need to deploy to a common webserver (not for node.js, php, .net)

    initialize a git repo for your project (git init)
    create a remote repo (ie on github), commit

    log into vercel
    create new project
    import your project under 'Import Git Repository'

    under 'Install Vercel'
        select 'Only select repositories'

    under 'Import Project'
        click 'Deploy'
        deploys automatically from github
            change Environment Variable
                in our example CI = false
    

    Hosting onto Heroku
        we create a server.js:
            var express = require("express");
            var path = require("path");

            var app = express();

            var HTTP_PORT = process.env.PORT || 8080

            app.use(express.static("public"));

            // Redirect Users to "index.html" if route not accessed using client side routing
            app.use((req, res) => {
                res.sendFile(path.join(__dirname + "/public/index.html"));
            });

            app.listen(HTTP_PORT, ()=>{
                console.log("listening on port: " + HTTP_PORT);
            });

        in our public folder we treat it as a static folder and place all our React.js
        code from the 'build' directory into the 'public'directory

Using Class (ES6) in React: (instead of functional components which we have previously used)
    Class Component:
        https://reactjs.org/docs/components-and-props.html#function-and-class-components
    
    State Hook
        https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class

    Effect Hook
        https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class

    Forms
        https://reactjs.org/docs/forms.html

    Fragments
        https://reactjs.org/docs/fragments.html#short-syntax


*/