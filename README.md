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



# React hooks
