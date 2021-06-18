// Week 2 Lecture

/**
 *  jQuery and Bootstrap
 *      can think of as front end libraries as only used in front-end app
 * 
 *  lodash
 *      library to process data
 *      can be used front end or back end, wherever data process is needed
 * 
 *  jQuery
 *      can do document traversal, manipulation, event handling
 *      can be done with plain javascript but jQuery can be easier
 *      jQuery works well across browsers
 * 
 *  NOTE: for bootstrap if you need the full features of bootstrap you must also embed jQuery
 * 
 *  CSS
 *      The bootstrap 3.4.1 compiled/minified CSS file from the bootstrapcdn.com CDN - https://www.bootstrapcdn.com/legacy/bootstrap/
 *      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">



 *  JavaScript

    The jQuery 3.4.1 slim, minified JS file from the code.jquery.com CDN - https://code.jquery.com/

     <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>

    The bootstrap 3.4.1 minified JS file from the bootstrapcdn.com CDN - https://www.bootstrapcdn.com/legacy/bootstrap/

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>


    Use for Bootstrap:
        previously we used media queries to handle css for different devices
        bootstrap will help with this, only need one web app and will apply to different screens


    The ‘$(function() { });’ or ‘$(document).ready(function(){ });’ functions
        starting point of your jQuery Code
        are equivalent for functionality

        In javascript the equivalent code would be:
            window.onload = function() {};
            and would be event when all html document loaded into the browser
            also starting point of your javascript code; usually you define you event handlers in here

        For jQuery it differs as its for the DOM loaded into the browser, this means it loads a little faster than previous 

    Selecting / Accessing Elements Using Class & ID Selectors

        id Selector - selects a single element with given id attribute
            $ ("#my-table");

        class Selector = selects all elements with given class
            $(".table-heading");

        

        $("tr.highlight").each(function(index){
            $(this).css({"background-color":"#eff6f7"}); // color the "highlight" rows gray
        });

        for this we need an environment that supports jQuery

        for an example in Week2-webApp we can demo jQuery code as current page supports jQuery
            to work run Week2-webapi-v6 so Week2-webApp can access data
            can hit F12 to view console and see as we click on a row it outputs the object

        then we can insert the jQuery code from before into the console
            for each table-row that contains class attribute with highlight value will be selected
            then for each of these elements of the jQuery dom object
            we set background color to new value

            $(this) stands for current object/element

        $("tr").each(function(index){
            $(this).css({"background-color":"#eff6f7"}); // color the "highlight" rows gray
        });
        // running above changed each row [removed hightlight as we do not have that class in our example]


        $("tr").css({"background-color":"#0ff6f7"});
        // running above code will change background color as previous example;
        // $("tr") will return an array and we alter it's background colour
        // means for loop not needed

        however if you use:
            document.querySelectorAll("tr")
            then you do need a for loop


        So to recap for jQuery it will return an array but you do not need to use a for loop!!!!


    Watching for Events (Creating an event handler using jQuery)
        jQuery provides functionality via on() method

        .on(events [, selector] [, data], handler)

        $(".my-table tbody").on("click", "tr", function(){ // watch the tbody element contained within an element with class "my-table" and execute code whenever new (or existing) <tr> elements are clicked
             console.log("table row clicked!");
        });

        above reads as : for all tr (table row) which is inside tbody and tbody element is within an element which has class
            attribute 'my-table'; for all these elements on event click, when element is clicked callback function will be called

        for our example this week
        $(".container tbody").on("click", "tr", function(){ // watch the tbody element contained within an element with class "my-table" and execute code whenever new (or existing) <tr> elements are clicked
             console.log("table row clicked!");
        });

        // note we always have div class = container

        can also be re-written 
        $(".container tbody tr").on("click", function(){ // watch the tbody element contained within an element with class "my-table" and execute code whenever new (or existing) <tr> elements are clicked
             console.log("table row clicked!");
        });

        When page loads into web-browser (when DOM loads in project) inner will be automatically called

        $(function()) {
            $(".container tbody").on("click", "tr", function(){ // watch the tbody element contained within an element with class "my-table" and execute code whenever new (or existing) <tr> elements are clicked
                 console.log("table row clicked!");
            });
        }

        Example:
            difference between:
                $("div")        - select all div in webpage
                $("<div>")      - creator 

            so we can do:
                var elem = $("<div id='newDiv'>A new div element</div>")

                $("body").append(elem); // adds elem to bottom/after of body
                $("body").html(elem);   // whole page body replaced by elem

            $("body").html("");     // will clear page
            $("body").empty();      // will clear page

    Updating Elements
        $("body").html("");     // will clear page
        $("body").empty();      // will clear page
        $("#content").empty();  // remove all child nodes of set of matched elements from DOM
        $("#content").append("<span>Another New Div!</span>");
                        // Insert content, specified by the parameter, to the end of each element in the set of matched elements.
                        if inner uses double-quotes try to use single quotes on outer instead
        $("#content").attr("data-id");
                        // Get / Set the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.

    // getter: read markup inside an element
        $("#content").html();

    // setter: replace markup html inside element using new markup
        $("#content").html(<span>new markup </span>);

    Handling Form Data
        submitting form
        for any "form" element which is within an element which has class "forms" on submit we...

        $(".forms").on("submit", "form", function(e){
            e.preventDefault();             // prevent default as wehen we click button to 
                                            submit form html by default will try to look for server action inside of form element
            console.log("form Submitted!");
        });

    
    ***************************
    Lodash
        Underscore refers to javascript library for handling data, espcially an array of objects
        lodash is a fork of Underscore

    lodash can also be used in backend, can install using npm

    to include lodash in front end app (embed in html)
        <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"></script>
        added at end of html (lets us run lodash in console since embedded )
    
    asside, if you use let to declare variable in console in browser it will only let you run it once, then on 
    next run it will 'remember' value and give a conflict
    to avoid instead of let us var


    let users = [
        { 'user': 'fred',    'active': false, 'age': 40 },
        { 'user': 'pebbles', 'active': false, 'age': 1  },
        { 'user': 'barney',  'active': true,  'age': 36 }
    ];


    Array Methods:

    _.chunk(array, [size=1])
        for an array, split elements into chunks of size n

    _.findIndex(array, [predicate=_.identity], [fromIndex=0])
        Returns the index of the first element predicate returns truthy for, instead of the element itself.

        let findIndex1 = _.findIndex(users, function(user) { 
             return user.user == 'fred'; 
        }); // => 0

    _.take(array, [n=1])
        Creates a slice of array with n elements taken from the beginning.

        let take1 = _.take(users,2) // => objects for ['fred, pebbles']


    String Methods:
        
    _.escape([string=''])
        Converts the characters “&”, “<”, “>”, ‘”’, and “’” in string to their corresponding HTML entities.
        So we pass a string and it converts:

        let escape1 = _.escape('fred, barney, & pebbles'); // => 'fred, barney, &amp; pebbles'

    _template([string=''], [options={}])
        use by passing string, inside string we have special characters <% and %> which is special markup
        
        Examples:
        // Use the "interpolate" delimiter to create a compiled template.
        let template1 = _.template('hello <%= user %>!');
        let template1Result = template1({ 'user': users[0].user });  // => 'hello fred!'

        // Use the HTML "escape" delimiter to escape data property values.
        let template2 = _.template('<b><%- value %></b>');
        let template2Result = template2({ 'value': '<script>' }); // => '<b>&lt;script&gt;</b>'

        // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
        let template3 = _.template(`<ul> 
                                    <% _.forEach(users, function(user) { %>
                                     <li><%- user %></li>
                                    <% }); %>
                                </ul>`);

        let template3Result = template3({ 'users': ['fred', 'barney'] }); // => '<ul><li>fred</li><li>barney</li></ul>'

        // Use the "evaluate" delimiter to execute JavaScript and generate HTML from our "users" collection.
        let template4 = _.template(`<ul> 
                                        <% _.forEach(users, function(user) { %> 
                                            <li><%- user.user %></li> 
                                        <% }); %>
                                    </ul>`);

        let template4Result = template4({ 'users': users }); // => '<ul><li>fred</li><li>pebbles</li><li>barney</li></ul>'








 *   
 */