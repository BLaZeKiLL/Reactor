# Reactor

React + Electron + Nx starter project in typescript

## Enviorment setup

Run `yarn install` to install dependencies.

> You can also use npm if so make sure to delete yarn.lock, and change 'yarn run' to 'npm run' in scripts

Run `yarn run electron:ext-install` to add react and redux dev tools extensions to your applications copy of electron

> Make sure to run this command once only, currently if ran more than once electron wont start unitl you delete applicaion cache
> Application cache location
> - Windows: C:/Users/\<user>/AppData/Roaming/\<yourAppName>/Cache
> - Linux: /home/\<user>/.config/\<yourAppName>/Cache
> - OS X: /Users/\<user>/Library/Application Support/\<yourAppName>/Cache

Run `require('devtron').install()` in electons consolse once to add devtron extension

## Starting

Run `yarn start` to serve the react app on localhost:4200 and start electron to load using http alowing hot reload for react

Run `nx serve react` to just serve react

Run `yarn run electron:start:dev` to start electron in http mode

## Building

Run `yarn run build:electron` to do a development build of electron

Run `yarn run build:web` to do a development build of react, also changin base href

Run `yarn run build:dev` to do a development build of react and electron

Run `yarn run build:prod` to do a production build of react and electron

> after build of react postbuild.js is executed which chages react script import types from 'module' to 'text/javascript' in the build index.html as file protocol doeen't supply MIME type causing error with electron

## Production

Run `yarn run electron:start:prod` to do a production build of react and electron and start electon in file mode to load react built files

Run `yarn run electron:start` to just build and start electron in file mode

## Packaging

[electron-builder](https://www.electron.build/) is used for packaging and it's config can be found in electron-builder.json

runtime dependencies should be added to dependecies array in package .json as they will be added to the final package, devDependencies won't be added

also electron-builder.json can be used to ignore and include specific files for the build

Run `yarn run package:<platform>` to package built files for the given platform

Run `yarn run electron:<platform>` to do a production build of react and electron and package for the given platform

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@reactor/mylib`.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=react` to generate a new component.

## Running unit tests

unit tests are executed via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e react` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
