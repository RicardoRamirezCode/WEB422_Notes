// Week 1 Lecture

/**
 * 
 * Web Service:
 *      an application that runs on a web server and access programmatically
 *      means the user is not the end user but the other program(s)
 *      provides not a user interface but programming interface
 * 
 * Web App:
 *      an application that runs on a web server that is interacted by end user (through a browser for example)
 *      provides user interface
 *  Common to both is:
 *      based on HTTP protocol
 * 
 * Difference between Web Service and Web API:
 *      
 * 
 * RESTful web service (aka Web API)
 * 
 * How to create a web service (API)        (found on reqres.in website)
 * 
 * Route (pattern)  HTTP Method     Description (CRUD)      HTTP Request*********************                               
 *                                                          HTTP Body (data)    HTTP Header
 * /api/users       GET             Get all (users) - R     ---                 ---
 * /api/users       POST            Create new (user)       JSON object         Content-Type: application/json (a MIME type)
 * /api/users/:id   GET             Get one (user) - R      ---                 ---
 * /api/users/:id   PUT             Update existing (user)  JSON object         Content-Type: application/json
 * /api/users/:id   DELETE          Delete item (user)      ---                 ---
 * 
 *                      HTTP response ***********************************************************
 *                      Status Code     Data type       Data (return value)
 * /api/users           200, 404        res.json(...)   array of (User) objects
 * /api/users           201, 404        res.json(...)   new (User) object with id
 * /api/users/:id       200, 404        res.json(...)   (User) object
 * /api/users/:id       200, 404        res.json(...)   message or (User) object with new fields
 * /api/users/:id       204, 404        res.json(...)   nothing
 * 
 * RESTful API borrows/took the parameter of HTTP request (ie to create user must use POST method)
 * 
 *  note they all return a res.json(..) regardless if HTTP request has HTTP header or not
 * 
 *  note when using Postman; for POST and PUT requires json body to be provided (select raw) and need
 *      to specify content type (under Header) - Header(8) means header is already created but need to add content-type
 * 
 * Resource:
 *      is a digital asset (everything on internet, webpage, image, etc would be a resource)
 *      how to identify?
 *          by using its URI (uniform resource identifier)
 * 
 * Representation:
 *      digital asset that is formatted as a specific internet media type
 * 
 * Internet Media Type:
 *      a data format for a representation of a resource on the internet
 * 
 *  State
 *      state is the current value of a resource
 * 
 *  Data persistance
 *      for example notion that if there is a server restart your changes will persist
 * 
 *  Interaction
 *      mainly for web application/web api
 *      example: when user/or http request sends request to server, then a second request (same user) sends a request 
 *                  server is unaware it is two requests from same user (because HTTP is stateless)
 *                  method to have server remember state is session
 * 
 *  REST
 *      REpresentational State Transfer
 *      basic definition of REST API - as a way to use HTTP protocol with a standard message format t perform operations on data
 * 
 *  Web API
 *      for this course we shall define 'web API' as an API to a web app or web service
 * 
 *  Creating a Web Service
 *      see Week1-demoAPI
 *      
 *      for last example in demo we are working on an array of objects, here we can use mockaroo to create the data
 *      for mockaroo set Format to json, array with no null values
 *      server.js is our Controller, data-service.js is our Model and no View as we are creating an API
 * 
 *      in our data-service.js we need to read/import our data    
 * 
 */
