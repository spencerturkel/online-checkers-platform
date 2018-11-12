# Online Checkers Platform

This is the front-end of https://onlinecheckersplatform.com.
It is a single-page application which may be served as a static website.

It is implemented using Vue.JS, along with the Vue Router.
The project structure was generated by the Vue CLI.

## Project setup

Install the latest version of Node.JS.
Then, run the following command from a terminal:

```
npm install
```

This will install all the packages required to build the project.

### Compiles and hot-reloads for development

```
npm run serve
```

This command will serve the website locally at `http://localhost:8080`.
You must also run the API project at `http://localhost:5000`.

### Compiles and minifies for production

```
npm run build
```

The application will be built into the `dist` folder.
The contents of this folder may be served as a static website.

Using Travis CI, the contents of this folder are automatically hosted on
GitHub Pages after every update to the `master` GitHub branch.

### Testing

The project supports unit testing (included by default using the Vue CLI),
as well as end-to-end testing which simulates user interaction against a headless
Firefox instance.

We did not actually write more than one trivial test of each kind for the front-end,
since nearly all "business logic" is implemented on the back-end API,
and it was simpler to manually verify that the front-end interacts with
the back-end API properly.

#### Unit Tests

```
npm run test:unit
```

This command runs unit tests, which are `.spec.ts` files in the `src` folder.

#### End-To-End Tests

```
npm run test:e2e:standalone
```

This command would run end-to-end tests which simulate user interaction
using a headless instance of Firefox.
The tests are scripted in the `tests` folder.
