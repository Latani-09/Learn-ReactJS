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



