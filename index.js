// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown")
const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
{ 
type:"input", 
name:"title",
message:"whats the title of your application?"
},
{ 
    type:"input", 
    name:"description",
    message:"Please describe your application."
 },
 { 
    type:"input", 
    name:"installation",
    message:"Please give installtion instructions for your app."
 },
 {
    type: "list",
    name: "license",
    message: " Please choose a license associated with your app.",
    choices:["MIT","Boost","CreativeCommons","none"]
 },

 {
    type: "input",
    name: "usage",
    message:"what is the use for this application?"
 },
 {
    type: "input",
    name: "contibutions",
    message:"who contributed to this application?"
 },

 {
    type: "input",
    name: "test",
    message:"how was this tested?"
 },

{
    type: "input",
    name: "githubLink",
    message:"please input a link to your gutHub "

}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO:
// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data)
        fs.writeFileSync("test.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
