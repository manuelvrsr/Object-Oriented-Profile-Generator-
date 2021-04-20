const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");



class employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    
}





inquirer.prompt([
      
    {
        type: 'list',
        message: 'what is the employees title?',
        name: 'title',
        choices:[ 'manager', 'engineer','intern',]

      },
     
      
    
])
if ( response.title === 'manager'){

    inquirer.prompt([
       
        {
            type: 'input',
            message: 'what is your name?',
            name: 'name',    
          },
      
       
        {
            type: 'input',
            message: 'what is the office number?',
            name: 'office',    
          },
          {
            type: 'input',
            message: 'what is your id?',
            name: 'id',    
          },
          {
            type: 'input',
            message: 'what is your email?',
            name: 'email',    
          },

         
          
        
    ])
    

}
else if(response.title === 'engineer' ){
    inquirer.prompt([
        {
            type: 'input',
            message: 'what is your name?',
            name: 'name',    
          },
      
     
          {
            type: 'input',
            message: 'what is your id?',
            name: 'id',    
          },
          {
            type: 'input',
            message: 'what is your email?',
            name: 'email',    
          },
          {
            type: 'github',
            message: 'what is your github?',
            name: 'github',    
          },


         
          
        
    ])
}
else if(response.title === 'intern' ){
    inquirer.prompt([
        {
            type: 'input',
            message: 'what is your name?',
            name: 'name',    
          },
      
     
        {
          type: 'input',
          message: 'what is your id?',
          name: 'id',    
        },
        {
          type: 'input',
          message: 'what is your email?',
          name: 'email',    
        },
        {
          type: 'input',
          message: 'what school do you go to?',
          name: 'school',    
        },


       
        
      
  ])
}


.then ((response) => {
    console.log(response);

    var title = response.title;
    var id = response.id;
    var email = response.email;
    var github = response.github;
    var school = response.school;
    var name = response.name;
    var office = response.office;


   

    var readmeFile =`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css">
</head>
<body>
    <header class="header"><h1>my team</h1></header>
    
    <div class="center">

 
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${name}
              <h4>${title}</h4>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${id}</li>
              <li class="list-group-item">${email}</li>
              <li class="list-group-item">${github}${school}${office}</li>
            </ul>
          </div>

    </div>
    
  <script src="./script.js"> </script>
</body>
</html>
    
    `
    



    fs.writeFile('index.html', readmeFile , (err) => 
    err ? console.error(err) : console.log('success')
    
    );

})