# Engi
Your Engineer Buddy!

## Purpose of this application
A place to get vetted notes by professionals for Software Engineering!

## Technology Stack
MERN

## How does it work?
Engi is a Node.js Express application that uses Mongoose to connect to MongoDB.  The following dependencies were used:

```
"dependencies": {
    "axios": "^0.25.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.2",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.1.8",
    "passport": "^0.5.0",
    "passport-jwt": "^4.0.0"
  }
```

## Screenshots
### Front Page
![Front Page](./img/engi-front-page.png/)
### Log In
![Log In](./img/engi-login.png/)
### About
![](./img/engi-about.png)

## WIREFRAME
![Wireframe](./img/engi-wireframe.png)

## ERD
![ERD](./img/engi-erd.png)

## USER STORIES
### As a user I want to...
1. Log in.
2. View engineering notes.
3. Make new notes.
4. See my notes.

### Additional details
- Who this is for: Software Engineers
- What this is for: To have a reference for engineering information.
- Why: To make Software engineers more effective.

## Code Snippets
Using The Engi API in the React App
```
componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/frontend`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data.frontendArray,
                });
            })
            .catch((error) => {
                console.log('problem with api', error);
            })
    }
```