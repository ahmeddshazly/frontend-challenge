# eco.mio Frontend Challenge


#### Table of Contents

- [Description](#description)
- [Mandatory Tasks](#mandatory-tasks)
- [Optional Tasks](#optional-tasks)
- [Submission](#submission)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Commands](#commands)
- [Tools](#tools)

---

## Description

This repo contains base code for the eco.mio frontend hiring challenge.

What you are looking at is a simplified version of our web application, with the backend removed and some dummy data provided via a JSON file (`dummyData.json`).

We expect you to not spend more than 2 hours on the tasks. We do not expect you to finish implementing everything. The main goal is for you to be able to show us where your skills lie and to give us a basis for discussions later on in the hiring process.

### Mandatory Tasks

1. To emulate the tasks we face for our browser extension, we are embedding a so-called `contentscript.js` in the DOM Manipulation view (`DomManipulationView.tsx`) . Your goal is to add an element to the DOM displaying the text "Budget-to-Beat: " and the € value you find on the same page. \
There is already some code commented out that you can use as a starting point. The element should be appended from within the `contentscript.js` without modifying `DomManipulationView.tsx` and without hard-coding of the € value. \
At the end, your solution should look somewhat like this (styling does __not__ need to be exactly as shown):

    ![DOM Manipulation](/dom%20manipulation.png)
2. Add a __hover or click effect__ on the injected element in the `contentscript` providing more detailed dummy information on climate change.
3. Add a test (e.g. snapshot, end-to-end, ...) to the project in `src/tests`. `jest` is installed if you want to work with it. Run it with `npm run test` or `npm run test:e2e`, respectively.

### Optional Tasks
Time permitting, you may choose any one (or more) from the below tasks to show us what you got:
1. Create a 'History' view, allowing a user to view their past trips in tabular way. You may add some dummy data or use the one provided in `dummyData.json`
2. Create your own __theme__ and make it selectable from a button.
3. __Be creative__! Prototype a new feature, view, styling, ... that you think could be valuable to our users.

### Submission
Once you are done, please push everything to your fork and notify Mario via email.

---

## Prerequisites

To build and run the different parts of this repository, following tools need to be installed:

- `Node.js` as a runtime environment, including `npm` as a package manager
- An IDE (e.g. VSCode)
- A web browser
- __2 hours max__ of time (we mean it!)
- Coffee (optional :-))

---

## Installation

To install the project and get it started, you have to perform the following steps:

1. Fork the repository
2. Clone your fork
2. Run `npm i` in the repository folder to install the necessary dependencies
3. Run `npm run serve` to start the application on port `3000`

It runs without a backend, so you are ready to go.

---

## Further Helpful Information

---

### Project Structure

To give you a bit of an overview of the project we provide here an explanation of the structure. The src folder of the project is structured as follows:

    src
    ├── assets
    ├── components
    ├── customizations
    ├── types
    └── views

The subfolders serve the following purpose:

- **assets:**
  - contains static assets (e.g. fonts or images)
- **components:**
  - contains individual components. The directory is divided into parent-components or views, in which specific components are used. This helps for readability, as for example all components that are only used in the history view are grouped together in the directory components/history
- **customizations:**
  - contains customizations of Material-UI components. Each component that should be customized has its own file (e.g. CardCustimization).
- **types:**
  - contains all custom types and interface used throughout project. For example the theme is specified here and can then be used in every component.
- **views:**
  - contains all the views.

---

### Commands

This is a list of useful commands for the project and a short explanation of what these commands do, when executed in the root folder of the project:

- `npm install` installs the necessary dependencies
- `npm run install:clean` deletes and reinstalls all dependencies
- `npm run serve` serves the application on port `3000`
- `npm run test` runs all tests of the project (not yet implemented)

---

### Tools

This is a list of tools, used in the project

- `Node.js:` runtime environment for JavaScript
- `npm:` package manager for node projects
- `React:` JavaScript Libraray for building component based user interfaces
- `TypeScript:` statically typed programming language, transpiled to JavaScript
- `ESLint:` linter for JavaScript and TypeScript projects
- `Prettier:` code formatter
- `Webpack:` module bundler for JavaScript projects
- `Jest:` testing library for JavaScript projects

---

---

# Good Luck!

_And if you encounter any problem, please contact Mario via email._
