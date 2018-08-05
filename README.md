# Xapo Tech Test

### Demo is deployed at
[http://xapotechtest.s3-website.ca-central-1.amazonaws.com/](http://xapotechtest.s3-website.ca-central-1.amazonaws.com/)
Using S3 serverless approach

### Node Requirement 
Use node 10

### Install
npm install

### Run 
npm start

### Production building
npm run build

### S3 deployment
npm run deploy

### Github Rate limit
To remove github rate limit. 
Go in src/config/index.js and add you personal github access token

### Test
npm test

### Technical Decision taken
UI Framework : Decided to test Grommet Ui framework ([https://github.com/grommet/grommet](https://github.com/grommet/grommet))

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

NOTES: Please create a git repository for the example and work like you would in a real project.

#### Reference 
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)