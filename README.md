# API in Node.js

Following Scott Moss' course on Frontend Masters, here is a REST API sample with MongoDB and Express.
[API Design in Node V3](https://frontendmasters.com/workshops/api-design-node-v3/)

Some important concepts:

### API

- **A**pplication **P**rogramming **I**nterface.
- Mandate how data can be interacted with.
- Able to perform CRUD operations.

### REST

- The combination of DB resources, route paths, and HTTP verbs.

### MIDDLEWARE

- List of functions that execute, in order, before your controllers. eg: router.get('/', **[middleware]**, controller).
- Great for authenticating, transforming the request, tracking and error handling.

### MongoDB and Schemas

- MongoDb allows to create models for each REST resource we want to expose via the API.
- Schemas are instructions for the models.
- Models are objects that let us interact with MongoDB.- Models enforce the instructions on the schemas.
- Model represent the REST resources.

### Controllers

- Controllers handle what a Route + Verb combo can access from the DB. eg: router.get('/', **(req, res) =>{}** ).
- They are the final middleware.
- Implement logic to interact with DB models.

### Models

With our controllers we can use CRUD operations on our models.

- C - model.create().
- R - model.find(), model.findById().
- U - model.update(), model.findByIdAndUpdate().
- D - model.remove(), model.findByIdAndRemove().

### Authentication

- When we authenticate, we control if an incoming request can proceed or not. **Identify** first.
- Authorization is controlling if an authenticated request has the correct **permissions** to access a resource.

### JWT authentication

- Tokens passed on every request to check authorization on the server.
- A bearer token strategy that allows the API to be stateless with the user auth.
- Created by a combo of secrets on the API and a payload.
- Must be sent on every request for the API to verify the token was created with the expected secrets.
- After verification, the JWT payload is accessible to the server and can be used to authorization and identification.
