//-------------Linking to the Inquirer Page (package)
const inquirer = require('inquirer');
//-------------Linking to fs:
const fs = require('fs');

//-------------Template for the HTML page along with creating the Array:
const generateHtml = ({ name, location, linkedin, github, contact}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <h1>Portfolio Generator</h1>
    <div>Your Name: ${name}</div>
    <div>Your Location: ${location}</div>
    <div>Linkedin Proifile URL: ${linkedin}</div>
    <div>GitHub URL: ${github}</div>
    <div>Preferred Contact Method: ${contact}</div>
</body>
</html>`;

//-------------Inquirer Form for the User to Fill Out:
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your Location?',
      name: 'location',
    },
    {
        type: 'input',
        message: 'What is your Linkedin URL?',
        name: 'linkedin',
    },
    {
      type: 'input',
      message: 'What is your GitHub URL?',
      name: 'github',
    },
    {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'SMS'],
    },
  ])
//-------------Passes Data and Writes to the HTML file (note all within the Inquirer form function):
  .then((response) => {
    const htmldata = generateHtml(response);
        fs.writeFile('index.html', htmldata, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });