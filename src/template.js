// importing the fs module
const fs = require("fs");

function generateHTML(data) {
  // initializing team variable
  let team = ``;

  // Set i = 1 - we have only one manager at index 0 so it's handled outside of this loop
  for (let i = 1; i < data.length; i++) {
    // card for interns
    if (data[i].getRole() === "Intern") {
      team += `
      <div class="col-md-4 ">
      <div class="card col-md-12 mt-4 px-3">
          <div class="card-header bg-primary text-light">
              <h3 class="employee-name"> ${data[i].getName()} </h3>
              <h5 class="job-title"> ${data[i].getRole()}</h5>
          </div>
          <div class="card-body">
              <ul class="list-group list-group-flush ">
                  <li class="list-group-item"> ID: ${data[i].getId()} </li>
                  <li class="list-group-item"> Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a> </li>
                  <li class="list-group-item"> School: ${data[i].getSchool()}</li>
              </ul>
          </div>
      </div>
  </div>`;

      // card for engineers
    }
    if (data[i].getRole() === "Engineer") {
      team += `
      <div class="col-md-4">
      <div class="card mt-4 px-3">
          <div class="card-header bg-primary text-light">
              <h3 class="employee-name"> ${data[i].getName()} </h3>
              <h5 class="job-title"> ${data[i].getRole()} </h5>
          </div>
          <div class="card-body">
              <ul class="list-group list-group-flush ">
                  <li class="list-group-item"> ID: ${data[i].getId()} </li>
                  <li class="list-group-item">Email: <a href="mailto: ${data[i].getEmail()}">${data[i].getEmail()}</a></li>
                  <li class="list-group-item"> GitHub: <a href="https://github.com/${data[i].getGithub()}" target="_blank">${data[i].getGithub()}</a> </li>
              </ul>
          </div>
      </div>
  </div>`;
    }
  }
  // HTML Template Begins
  return ` <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Project Team Overview </title>
    
    
        <!-- Bootstrap CDN Style Sheet -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
    </head>
    
    <body>
        <header class=" bg-danger text-light text-center"> My Team </header>
    
        <!-- START CARD DECK -->
        <div class="card-deck">
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="card mt-4 px-3 d-flex">
                        <div class="card-header bg-primary text-light">
                            <h3 class="employee-name"> ${data[0].getName()}</h3>
                            <h5 class="job-title"> ${data[0].getRole()}</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush  ">
                                <li class="list-group-item"> ID: ${data[0].getId()}</li>
                                <li class="list-group-item"> Email: <a href="mailto:${data[0].getEmail()}">${data[0].getEmail()}</a>
    
                                </li>
                                <li class="list-group-item"> Office Number: ${data[0].officeNumber}</li>
                            </ul>
                        </div>
    
                    </div>
                </div>

                    ${team}
               
            </div>
        </div>
    
    
    
    
    </body>
    
    
    </html>`;
}
module.exports = generateHTML