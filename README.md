# Xapo Tech Test

### Node Requirement 
Use node 8

### Install
npm install

### Run 
npm start

### Test
npm test

### Description of the project

This is an evaluation project that tries to identify the coding compatibility with the team. Try to code as clean and clear as possible, taking into account reusability and legibility is more important than high performance. Having a great and polished design is not the goal of this project.
Follow these simple instructions:
The main idea of the project is to list projects owned by Facebook on Github.

The app must have a sidebar navigation with Facebook projects sorted by watchers. Clicking on one of them should fetch that project data and populate the main view with its details. Those details must include a list of project contributors.

Requirements for the project:
- Use ReactJS ;
- Provide a Readme with instructions on how to run the app.

Nice to have:
- Use Redux ;
- Use a side effect lib like redux-saga or RxJS.

Api's
GET https://api.github.com/orgs/facebook/repos to fetch all repos from facebook orgs.
GET https://api.github.com/repos/facebook/codemod to fetch specific codemod repo

NOTES: Please create a git repository for the example and work like you would in a real project.

#### Reference 
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)