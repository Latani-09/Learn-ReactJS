# Learn-ReactJS
This repository is a tracking system for my journey of learning React JS

# Day 1                                   ---Mar 10
1.created React app using 
    npx create-react-app appname   cmd  
    npm start   -development mode
    npm run build    -production mode

2. Folder structure
    Had 3 folders inside app
    node_modules   |  public  |   src
    other files 
        gitignore
        package.json
        package-lock.json
        README.md

web pack will only see file and folders inside src   - have to put any js css files inside this to work  

These files must exist with exact filenames
public/index.html   this is the only file that can be used to build under public/
src/index.js



public  - to save assets 
   -If you put a file into the public folder, it will not be processed by webpack. Instead it will be copied into the build folder untouched.
   environment variable called PUBLIC_URL is used to reference assets in public folder
  ex    : <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> 
  usage :  importing stylesheets, images, and fonts from JavaScript
  using this large no of assets can be dynamically referenced

  to include a small script like pace.js outside of the bundled code.
  to include some incompatible libraries as a <script>



3. installing bootstrap
---using the CDN or Content Delivery Network
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    />  in head of index.html


---got warning messages saying package deprecated 
     npm auditfix --force   more vulnerablities
     revert to previos package json and npm install again
     git log package-lock.json
     git checkout [ID] -- package-lock.json
---then create react app is not a suitable option 
    use vite :If  app doesn’t have an existing setup for compiling JavaScript modules, set it up with Vite.

    or next js


# Next.js’ Pages Router 

# Day 02     -Mar 11
# JSX
Is a syntax extension to represent Markup
it turns into javascript objects

The Rules of JSX 
1. Return a single root element 
can wrap into on parent using div tag or fragment <>   </>

2.close all the tags
JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />

3.camelCase all most of the things
 attributes written in JSX become keys of JavaScript objects.
variable names can’t contain dashes or be reserved words like class

{ } to reference JS variable inside JSX
curly braces: A window into the JavaScript world 

{} can only be used in
--As attributes immediately following the = sign: 
--As text directly inside a JSX tag: 


# Rendering elements
reasons for a component to render:
---component’s initial render.
---The component’s (or one of its ancestors’) state has been updated.

 “Rendering” is React calling your components.

On initial render, React will call the root component.
For subsequent renders, React will call the function component whose state update triggered the render.

After rendering (calling) your components, React will modify the DOM.

For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.

React only changes the DOM nodes if there’s a difference between renders


Any screen update in a React app happens in three steps:
Trigger
Render
Commit

You can use Strict Mode to find mistakes in your components
React does not touch the DOM if the rendering result is the same as last time

# React hooks


# props
can pass:
    state
    JS values
    functions 
immutable 

# prop drilling



# state vs variable
A state variable to retain the data between renders.
A state setter function to update the variable and trigger React to render the component again.

local variable 
Local variables don’t persist between renders.
Changes to local variables won’t trigger renders
# state uplifting 
cons of state uplifting is prop drilling.

stateless Component: withou states.
# context


# errors
This is probably not a problem with npm. There is likely additional logging output above.

node --max_old_space_size=4096 node_modules/@angular/cli/bin/ng build --prod
Most of the time this error occurs javascript heap went out of the memory. 

# react dom
A React component has a one-to-one relationship to a HTML element that is displayed on the webpage and React keeps track of which HTML elements need to be updated. 

# Bundling assets
Earlier, you learned what assets are in React and the best practices for storing them in your project folders.

In this reading, you will learn about the advantages and disadvantages of embedding assets, including examples of client/server-side assets. You will also learn about the trade-offs inherent in using asset-heavy apps.

The app’s files will likely be bundled when working with a React app. Bundling is a process that takes all the imported files in an app and joins them into a single file, referred to as a bundle. Several tools can perform this bundling. Since, in this course, you have used the create-react-app to build various React apps, you will focus on webpack. This is because webpack is the built-in tool for the create-react-app.

Let’s start by explaining what webpack is and why you need it.

Simply put, webpack is a module bundler.

Practically, this means that it will take various kinds of files, such as SVG and image files, CSS and SCSS files, JavaScript files, and TypeScript files, and it will bundle them together so that a browser can understand that bundle and work with it.

Why is this important?

When building websites, you could probably do without webpack since your project's structure might be straightforward: you may have a single CSS library, such as Bootstrap, loaded from a CDN (content delivery network). You might also have a single JavaScript file in your static HTML document. If that is all there is to it, you do not need to use webpack in such a scenario.

However, modern web development can get complex.

Here is an example of the first few lines of code in a single file of a React application:

1011
import React from 'react';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import './index.css';
import { ThemeProvider } from './contexts/theme';
import { DragDropContext } from 'react-beautiful-dnd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import data from './data';
import Loading from './components/Loading';

The imports here are from fictional libraries and resources because the specific libraries are not necessary. All these different imports can be of various file types: .js, .svg, .css, and so on.

In turn, all the imported files might have their own imported files, and even those might have their imports.

This means that depending on other files, all of these files can create a dependency graph. The order in which all these files are loading is essential. That dependency graph can get so complex that it becomes almost impossible for a human to structure a complex project and bundle all those dependencies properly.

This is the reason you need tools like webpack.

So, webpack builds a dependency graph and bundles modules into one or more files that a browser can consume.

While it is doing that, it also does the following: 

It converts modern JS code - which can only be understood by modern browsers - into older versions of JavaScript so that older browsers can understand your code. This process is known as transpiling. For example, you can transpile ES7 code to ES5 code using webpack.  

It optimizes your code to load as quickly as possible when a user visits your web pages. 

It can process your SCSS code into the regular CSS, which browsers can understand. 

It can build source maps of the bundle's building blocks  

It can produce various kinds of files based on rules and templates. This includes HTML files, among others. 

Another significant characteristic of webpack is that it helps developers create modern web apps.

It helps you achieve this using two modes: production mode or development mode.

In development mode, webpack bundles your files and optimizes your bundles for updates - so that any updates to any of the files in your locally developed app are quickly re-bundled. It also builds source maps so you can inspect the original file included in the bundled code.

In production mode, webpack bundles your files so that they are optimized for speed. This means the files are minified and organized to take up the least amount of memory. So, they are optimized for speed because these bundles are fast to download when a user visits the website online.

Once all the source files of your app have been bundled into a single bundle file, then that single bundle file gets served to a visitor browsing the live version of your app online, and the entire app’s contents get served at once.

This works great for smaller apps, but if you have a more extensive app, this approach is likely to affect your site’s speed. The longer it takes for a web app to load, the more likely the visitor will leave and move on to another unrelated website. There are several ways to tackle this issue of a large bundle.

One such approach is code-splitting, a practice where a module bundler like webpack splits the single bundle file into multiple bundles, which are then loaded on an as-needed basis. With the help of code-splitting, you can lazy load only the parts that the visitor to the app needs to have at any given time. This approach significantly reduces the download times and allows React-powered apps to get much better speeds. 

There are other ways to tackle these problems. 

An example of a viable alternative is SSR (Server-side rendering).

With SSR, React components are rendered to HTML on the server, and the visitor downloads the finished HTML code. An alternative to SSR is client-side rendering, which downloads the index.html file and then lets React inject its own code into a dedicated HTML element (the root element in create-react-app). In this course, you’ve only worked with client-side rendering. 

Sometimes, you can combine client-side rendering and server-side rendering. This approach results in what’s referred to as isomorphic apps.

In this reading, you learned about the advantages and disadvantages of embedding assets, including examples of client/server-side assets. You also learned about the trade-offs inherent in the use of asset-heavy apps.