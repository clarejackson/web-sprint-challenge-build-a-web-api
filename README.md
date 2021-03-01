# Sprint Challenge Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **how to build web services based on the REST (REpresentational State Transfer) architectural style**. During this sprint, you studied **Node.js and Express, server side routing, how to write Express middleware and how to deploy an API to Heroku**.

In your challenge this week, you will demonstrate your mastery of these skills by designing and creating a web API to manage the following resources: `Projects` and `Actions`.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers the Monday after challenge submissions. For more information on the review process [click here](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a).

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support by dropping a :wave: in your help channel when needed.

## Introduction

In meeting the minimum viable product (MVP) specifications listed below, your project should provide an API that has Create, Read, Update and Delete (CRUD) functionality for both `projects` and `actions`.

## Instructions

### Task 1: Project Set Up

- [ ] Fork and clone this repository. **If you are repeating this Course, delete your old fork from Github and re-fork and re-clone.**
- [ ] Create a new branch: `git checkout -b <firstName-lastName>`.
- [ ] Implement the project on your newly created branch, committing changes regularly.
- [ ] Push commits: `git push origin <firstName-lastName>`.
- [ ] **RUN** `npm install` to install your dependencies.

### Task 2: CodeGrade Setup

- [ ] Follow [instructions](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374) to set up Codegrade's Webhook and Deploy Key, making sure your deployment is set to your `<firstName-lastName>` branch.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [ ] Check to see that Codegrade has accepted your git submission.

### Task 3: Project Requirements (MVP)

Your finished project must include all of the following requirements:

#### NPM Scripts

A _"test"_ script already exists you can use to run tests against your code.

- [ ] Write an _npm script_ named _"start"_ that uses `node` to run the API server.
- [ ] Write an _npm script_ named _"server"_ that uses `nodemon`to run the API server.
- [ ] Install _nodemon_ as a development dependency only that would not be used in production.

#### Build an API

- [ ] Inside `api/actions/actions-router.js` build endpoints for performing CRUD operations on _actions_:
  - `[GET] /api/actions` returns an array of actions (or an empty array) as the body of the _response_.
  - `[GET] /api/actions/:id` returns an action with the given `id` as the body of the _response_.
  - `[POST] /api/actions` returns the newly created action as the body of the _response_.
  - `[PUT] /api/actions/:id` returns the updated action as the body of the _response_.
  - `[DELETE] /api/actions/:id` returns no _response_ body.

- [ ] Inside `api/projects/projects-router.js` build endpoints for performing CRUD operations on _projects_:
  - `[GET] /api/projects` returns an array of projects (or an empty array) as the body of the response.
  - `[GET] /api/projects/:id` returns a project with the given `id` as the body of the _response_.
  - `[POST] /api/projects` returns the newly created project as the body of the _response_.
  - `[PUT] /api/projects/:id` returns the updated project as the body of the _response_.
  - `[DELETE] /api/projects/:id` returns no _response_ body.

- [ ] Inside `api/projects/projects-router.js` add an endpoint for retrieving the list of actions for a project:
  - `[GET] /api/projects/:id/actions` sends an array of actions (or an empty array) as the body of the response.

- Both Projects and Actions have an optional `completed` property (see Database Schemas below). In both cases it's a boolean stored in the database as a 1 or a 0. Make sure to transform the raw `completed` values obtained from the db to `true` or `false`, before sending them back to the client.
- When adding an action, make sure the `project_id` provided belongs to an existing `project`.
- If you try to add an action with an `id` of 3 and there is no project with that `id` the database will return an error.
- Use an HTTP client like `HTTPie`, `Postman` or `Insomnia` to test the API's endpoints.
- Use Express Routers to organize your endpoints.
- The use of middlewares to avoid repetitive code is highly recommended.
- Your `server.js` file lives inside the `api` folder.
- Your `index.js` file lives at the root of the project.

### Database Schemas

The description of the structure and extra information about each _resource_ stored in the included database (`./data/lambda.db3`) is listed below.

#### Projects

| Field       | Data Type | Metadata                                                                    |
| ----------- | --------- | --------------------------------------------------------------------------- |
| id          | number    | no need to provide it when creating projects, the database will generate it |
| name        | string    | required                                                                    |
| description | string    | required                                                                    |
| completed   | boolean   | used to indicate if the project has been completed, not required            |

#### Actions

| Field       | Data Type | Metadata                                                                                         |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| id          | number    | no need to provide it when creating posts, the database will automatically generate it           |
| project_id  | number    | required, must be the id of an existing project                                                  |
| description | string    | up to 128 characters long, required                                                              |
| notes       | string    | no size limit, required. Used to record additional notes or requirements to complete the action  |
| completed   | boolean   | used to indicate if the action has been completed, not required                                  |

### Database Persistence Helpers

The project includes models you can use to manage the persistence of _project_ and _action_ data. These files are `api/projects/projects-model.js` and `api/actions/actions-model.js`. Both files publish the following api, which you can use to store, modify and retrieve each resource:

**All these helper methods return a promise. Remember to use .then().catch() or async/await.**

- `get()`: resolves to an array of all the resources contained in the database. If you pass an `id` to this method it will return the resource with that id if one is found.
- `insert()`: calling insert passing it a resource object will add it to the database and return the newly created resource.
- `update()`: accepts two arguments, the first is the `id` of the resource to update, and the second is an object with the `changes` to apply. It returns the updated resource. If a resource with the provided `id` is not found, the method returns `null`.
- `remove()`: the remove method accepts an `id` as its first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted.

The `projects-model.js` includes an extra method called `getProjectActions()` that takes a _project id_ as its only argument and returns a list of all the _actions_ for the _project_.

We have provided test data for all the resources.

**Notes:**

- You are welcome to create additional files for middlewares, but **do not move or rename existing files** or folders.
- Do not make changes to your `package.json` except to add additional dependencies and scripts.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 4: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

**IMPORTANT:** Work on stretch goals on a **different branch**. You can branch off `<firstName-lastName>` by executing `git checkout -b stretch`.

- [ ] Deploy the API to Heroku.
- [ ] Configure the API to support environment variables.
- [ ] Use middleware for validation of incoming data.

## Submission format

- [ ] Submit via Codegrade by pushing commits to your `<firstName-lastName>` branch on Github.
- [ ] Create a pull-request to merge `<firstName-lastName>` branch into main.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade on Monday following the Sprint Challenge for reviewer feedback.
- [ ] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. The core features of Node.js and Express and why they are useful.

Node.js lets developers use Javascript outside of the browser, and this allows the same language to be used for both the client and server side. Other core features are that it is single-threaded, asynchronous, and there is an npm repository with access to so many libraries in the form of npm modules.
Express has lots of features: simple, unopinionated, extensible, light-weight, comparable with connect middleware, packaged into easy-to-use api, abstracts away common tasks using its intuitive nature. It can be used to build entire web applications, serve SPA’s, build RESTful web services that work with JSON, serve static content, like HTML files, images, audio files, PDFs, and more, and finally, power real-time applications using technologies like Web Sockets or WebRTC. 

1. Understand and explain the use of Middleware.

Middleware is shared code that adds additional functionality to our Express applications. The code runs through several different functions (in the order we apply them) and we can return different results based on different conditionals. For example, a middleware may be set up to validate an entry and if it doesn't meet the requirements it will return the error code with the reason to the client side, then continues on. If it does meet the requirements, it's passed on to the next middleware/function in the line.

1. The basic principles of the REST architectural style.

Client-server archetecture, stateless architecture with each request standing on its own, cacheable for storing and faster retrieval of data, layered system, code on demand meaning the api can return the resource requested and the code to act on it and uniform interfaces are easier for the user to choose how they interact without confusing the api.

1. Understand and explain the use of Express Routers.

Routing is one of Espress’s main features; it is a way to map the incoming request to servers from the client to the request handling function based off of the url and type of http method used. The use of routers helps us to keep our code clean and a place to define the CRUD operations within our server-side application.

1. Describe tooling used to manually test the correctness of an API.

A REST client like Insomnia or Postman can be used to manually test our API as a client will use it. It can be used to create a CRUD operation request that would be using the endpoints from the server side to test the successful and error responses.