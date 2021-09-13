const init = require('./index');


const finalArray = [];

function generatehtml(response) {
  for (let i = 0; i < response.length; i++) {
    switch (response[i].role) {
      case 'Manager':
        finalArray.push(`<div class="card m-2" style="width: 18rem;">
          <div class="card-header">
            Manager: ${response[i].name}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${response[i].id}</li>
            <li class="list-group-item"><a href = "mailto:${response[i].email}">Email</a></li>
            <li class="list-group-item">Office Number: ${response[i].officeNumber}</li>
          </ul>
        </div>`);
      break;
      case 'Engineer':
        finalArray.push(`<div class="card m-2" style="width: 18rem;">
          <div class="card-header">
            Engineer: ${response[i].name}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${response[i].id}</li>
            <li class="list-group-item"><a href = "mailto:${response[i].email}">Email</a></li>
            <li class="list-group-item"><a href="${response[i].github}">Github</li>
          </ul>
        </div>`)
      break;
      case 'Intern':
        finalArray.push(`<div class="card m-2" style="width: 18rem;">
          <div class="card-header">
            Intern: ${response[i].name}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${response[i].id}</li>
            <li class="list-group-item"><a href = "mailto:${response[i].email}">Email</a></li>
            <li class="list-group-item">School: ${response[i].school}</li>
          </ul>
        </div>`)
      break;
    }
  }

    return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
      </head>
    
      <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div>
            <div class="container">
              <div class="row">
                ${finalArray.join('')} 
              </div>   
            </div>     
        </div>
    
        <!-- jQuery first --> 
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <!-- Popper.js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <!-- Bootstrap JS -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </body>
    </html>`
  }


module.exports = generatehtml;

