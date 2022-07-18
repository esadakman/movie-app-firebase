# Movie App

## Objective

Build a Movie App using ReactJS.

## Description

- Project aims to create a Movie App.
- In this project, I designed a Movie App with many features. I provided the movie information with the api I got from the `https://www.themoviedb.org/documentation/api` site. And I used Firebase for authentication.
- The user can log in and register with both their email address and their Google account.
- Access to movie details is restricted for visitors who do not log in.

## Project Link

#### You can reach my project from [here](https://firebase-movie-app-tmdb.netlify.app/) 👈

## Project Skeleton

```
Movie App (folder)
|
|----readme.md
SOLUTION
├── public
│     └── index.html
├── src
│    ├── auth
│    │     └── firebase.js
│    ├── components
│    │       ├── globalStyles
│    │       │     ├── Flex.jsx
│    │       |     ├── Global.styled.jsx
│    │       │     ├── Navbar.styled.jsx
│    │       │     └── theme.jsx
│    │       ├── Footer.jsx
│    │       ├── ModalYoutube.jsx
│    │       ├── MovieCard.jsx
│    │       └── Navbar.jsx
│    ├── context
│    │     └── AuthContext.js
│    ├── pages
│    │       ├── styles
│    │       │     ├── Main.styled.jsx
│    │       │     ├── MovieDetail.styled.jsx
│    │       │     └── NotFound.styled.jsx
│    │       ├── Login.jsx
│    │       ├── Main.jsx
│    │       ├── MovieDetail.jsx
│    │       ├── NotFound.jsx
│    │       └── Register.jsx
│    ├── router
│    │     └── Router.js
│    ├── App.js
│    ├── App.css
│    └── index.js
├── package.json
├── .env
└── yarn.lock
```

### At the end of the project, following topics are to be covered;

- HTML
- CSS
- JS
- ReactJS
- Axios
- Firebase
- Styled Components
- Material-UI

To run this project;

- Signup `https://firebase.google.com/` and create new app in firebase.
- Use `https://firebase.google.com/docs/auth/web/start` and create `Authentication` operations.
- Signup `https://www.themoviedb.org/documentation/api` and get API key for getting data from `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`, for searching movies `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=` and for movie details `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`.
- Create a .env file and set your
  -- REACT_APP_FIREBASE_API_KEY,
  -- REACT_APP_FIREBASE_AUTH_DOMAIN,
  -- REACT_APP_FIREBASE_PROJECT_ID,
  -- REACT_APP_FIREBASE_STORAGE_BUCKET,
  -- REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  -- REACT_APP_FIREBASE_APP_ID and
  -- REACT_APP_MEASUREMENT_ID for firebase access and
  -- REACT_APP_API_KEY for TMDB API access:

- After these you can run the project as usual =>

```
$ git clone https://github.com/esadakman/movie-app-firebase.git
$ cd ../movie-app-firebase
$ npm install / yarn
$ npm start / yarn start
```

### Preview of the Project
