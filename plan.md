# Full stack auth review

# front-end

## Component structure
* Nav bar
* Home aka Landing Page
* Login Page
* Profile Page
* Couch browser
* Add couch
* Footer?
* Cart?

## Redux
* store
* reducer
    * reducer function itself
    * initial state
        * user: null
        * couches?
    * action creators
    * action types (strings/names)
* Provider in src/index.js
* connect() in components


# Routing
* routes themselves
    * / (home)
    * /cool-couches
    * /profile
    * /cart?
* index.js BrowserRouter
* Links in NavBar
* Routes in routes.js


# back-end

# Endpoints aka routes
* GET, POST /api/couches
* /api/me
* /auth/callback

## Controllers
* couches
* auth
* user

## Server
* index.js


# database

## Tables

* couches
    * id serial primary key
    * name text
    * price int
    * image text
* users
    * id serial
    * auth0_id text
    * email text
    * name text
    * picture text

## Queries (functions for massive)

* select all couches
* find user
* create user
* create couch?


# npm packages we'll use

* express
* body-parser
* axios
* massive
* dotenv
* http-proxy-middleware
* react-router-dom
* redux
* react-redux
* 
