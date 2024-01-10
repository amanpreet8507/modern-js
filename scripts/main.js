// Imports
import axFile from './libs/axios.js'
import toolBelt, {business as passion, construction, business} from './utils/toolbelt.js'

// From axios.js

// Using the Axios ES6 Module
// In this step we will be using the axios library that is exported using JS Modules syntax.
// Inside index.html file, make sure to add type="module" to the script tag for main.js to enable the use of JS Modules
// In your main.js file, import the default export from /libs/axios.js and give it the name axios using the ES6 module import syntax.
// Don’t forget: when importing local modules, you must put a ./ in front of the package name in your import statement and .js at the end of the filename
// Query for the DOM element with class="dog-image" and save it to a variable
// Make a get request to https://random.dog/woof.json?filter=mp4,webm using the default axios export you imported earlier
// After fetching the data from the Random Dog API, set the src attribute of dog image element to the value of the url property in the API response

const dogImage = document.querySelector('.dog-image')

const getDog = async () => {
    try{
        const response = await axFile.get('https://random.dog/woof.json?filter=mp4,webm')
    const dogUrl = response.data.url
    console.log(dogUrl);

    dogImage.setAttribute('src', dogUrl)
    } catch(error){
        console.log(error)
    }   
}

getDog()

// From toolbelt.js

// Augment your original ‘toolbelt’ import statement so that you are also importing the two named exports we just created
// Try calling the construction() function to confirm that it was imported correctly. You should see 'CLANG!' printed to the console
// Use console.log() to print the named 'business' import that you just imported. Confirm that it was imported correctly by viewing it printed in the console
// Try using the import {<export name> as <new name>} syntax to rename one of the named imports to a different name
// Try using destructuring on the 'business' object you imported, to concisely pull out the values into individual variables

console.log(toolBelt)

construction();

console.log(passion)

const {name, address, phoneNumber} = business
console.log(name)
console.log(address)
console.log(phoneNumber)
