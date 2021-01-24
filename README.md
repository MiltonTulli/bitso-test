[![Netlify Status](https://api.netlify.com/api/v1/badges/9d5ecfca-7644-4ad9-992f-84a36f584c4d/deploy-status)](https://app.netlify.com/sites/bitso-challenge/deploys)

# Bitso - React js test

---

This is my solution to the Bitso react js challenge.

> The static **website** will be hosted here 👉 [https://bitso-challenge.netlify.app/](https://bitso-challenge.netlify.app/).
> Thanks to Netlify!🔥

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Screen Shot(s)

![app 1](https://github.com/MiltonTulli/bitso-test/blob/master/screenshots/app1.png)
![app 2](https://github.com/MiltonTulli/bitso-test/blob/master/screenshots/app2.png)

## Folder Structure

Folder structure options and naming conventions for software projects

    ├── public          # Public files (static content)
    ├── src             # Source files
    │   ├── components     # React stateless components
    │   ├── containers     # Connected Components
    │   ├── interfaces     # Typescript business objects
    │   ├── modules        # Redux reducers
    │   ├── utils          # Utils
    │   └── ...
    └── README.md

## Installation and Setup Instructions

## Setup 🔧

```
git clone https://github.com/MiltonTulli/bitso-test.git
cd bitso-test
yarn install
```

## Available Scripts

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn test:c`

Launches the test runner. It will generate a coverage report on the next location:

```
bitso-test/coverage/lcov-report/index.html
```

![test coverage](https://github.com/MiltonTulli/bitso-test/blob/master/screenshots/coverage.png)

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Built with 🛠️

| Lib        | URL                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------ |
| React      | [https://es.reactjs.org/](https://es.reactjs.org/)                                               |
| Typescript | [https://www.typescriptlang.org/](https://www.typescriptlang.org/)                               |
| Redux      | [https://es.redux.js.org/](https://es.redux.js.org/)                                             |
| Jest       | [https://jestjs.io/docs/en/getting-started.html](https://jestjs.io/docs/en/getting-started.html) |
| Enzyme     | [https://airbnb.io/enzyme/](https://airbnb.io/enzyme/)                                           |

## Author ✒️

> **Milton Tulli**
> milton.tulli@gmail.com
> [https://www.linkedin.com/in/miltontulli/](https://www.linkedin.com/in/miltontulli/)

## Notes/Desitions:

- I preferred not to use a component library (like material-ui, react-bootstrap, etc) since I could write most of the components. Instead I used a simply css library (nes.css) to give the app a vintage "gamer" look.
- The coverage of the tests is not complete, but it covers the main functionalities.
