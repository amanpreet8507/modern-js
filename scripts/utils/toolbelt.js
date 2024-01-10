// Create an array of strings that contains all 
// your favorite household tools (feel free to use 
// emojis!), and use the export default syntax to 
// make that value the default export of your module

const toolsArr = ['Kettle', 'Rice Cooker', 'Coffee Maker', 'Toaster']

// 1 Create a named function called construction(). All this function should do is console.log the string 'CLANG!'
// 2 Export this function as a named export

export function construction() {
    console.log('CLANG!')
}

// 3 Create an object called ‘business‘ to describe the properties of your construction business. It should have key-value pairs for your business name, address, and phone number
// 4 Export this ‘business‘ object as a named export

export const business = {
    name: 'BrainStation',
    address: 'Vancouver',
    phoneNumber: '123456'
}

export default toolsArr;