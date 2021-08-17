/*

Introduction to JWT (Java Web Token)

Upto now we have done this structure:
    Client -> Req -> WebServer
        client is sending requests to the web server

    WebServer -> Rep -> Client
        Client sends replies to the client

    For example:
        /api/vehicles
            if this is the request
        the server would/could respond in a json format the list of vehicles


    The issue above is security, the server should be responding to a reconginzed client (one that has already
        logged in before)



Applying Security to the Web-Server

Methods:
    using session variables
    cookies (may not work all the time - do not work on mobile browsers)
    

Storing Data In a Secure Way On the Server-Side
    In our case we will use library bcryptjs to encrypt and decrypt data
    One of the components (service) of the server consists of two methods:
        registerUser
        checkUser
    
    Example:
        assume a form in our client which asks for username and password
        in webserver we check user has entered valid information, if true then we start encrypting and dumping them into database

        We will call our service user-service with our two methods mentioned before
        see Week11 demo api
    
    So storing and retrieving from db was done via bcrypt



    We also have another type of service, a data service; in our example we have static data we send to user
    It produces data, a bunch of json representing vehicles
    When a (logged-in) client requests data, the server transmit an array of data


Securing Communication Between the Web-Server and Client

    we will use JWT (Java Web Token), this course is just an introduction
    In simplicist terms:
    in order to have transmission save and secure, as soon as client is validated; server will generate a token
    and send that token to client.
    client will now use that token in requests, and server will use it to recognize client

    if user is not logged in, there is not JWT
    a non-logged in user sends a request of data on server, first server will check for jwt so web-server
    will not allow request

    for user logged in, they (client) will receive jwt and requests now will be stamped with jwt

    
So to recap, this is the algorithm followed:

    1 Client sends log-in data to 'server'
    2 Server uses 'user-service' for authentication
    3 if authenticated:
        web token is generated and sent to client
        client needs to append this token to further requests
    4 for authentication, server seeks for the token in this requests received from client


    for server code that is signing the user, generate jwt see server.js from this week

    first, object of type JWTOptions
    its used in a more complex object, called JWTStrategy
    
    these two objects will generate a Passport (used for authenication)
    so Passport has object JWTStrategy which in turn has object JWTOptions

    in our code example we build a strategy onto of our jwtOptions and a callback function
    with one of params of that being the structure of the information with (_id, userName,
        fullName, and role in our example)

    then we set Passport to use this strategy


    when user logs in
        first we check user with userService
        then if fine, then we generate a token
        and send back to the client

    now on requests, we use passport.authenticate; with first param being same as what we used for 
    generation at start:
    jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");

*/