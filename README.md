# Learn-ReactJS
This repository is a tracking system for my journey of learning React JS

# create app                                  ---Mar 10
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

# JSX      -Mar 11

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
# create forms                --march 27
we can create two components (inputs) in react form 
controlled & uncontrolled
Controlled mean the input is in synced using state on every update(type delete check uncheck) where it is saved and controlled by onchange attribute/function
uncontrolled mean input is only synced when submitting form
useRef hook is used. 
this helps to validate inputs before submitting it.

# form validaton   --march 28


# context
Question 2
Assuming that the default theme for the application is ‘light’, what should be the default value passed to the createContext call? 
undefined 
null 
The string "light"
--the default value is not relevant and can be any value. It’s only useful for testing components in isolation or as a default value when a context consumer does not have a Provider further up in the tree.

