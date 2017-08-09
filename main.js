//Element Grabs
let items =document.getElementsByTagName("ul");
let input = document.getElementById("myInput");

//Variables
let receivedData = [];
let identifier = [];
let name = [];
let website = [];


//filter the results from the search



  fetch("http://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        if (response.status !== 200) {
          // console.log(response.status);
          return;
        }
        response.json().then(function(data) { //data is present in array
          for (let i=0; i<data.length; i++)
          receivedData.push(data[i]);
          console.log(receivedData);

          for (let j=0; j<receivedData.length; j++)
          name.push(receivedData[j].name)
          console.log(name);

          for (let n=0; n<receivedData.length; n++)
          identifier.push(receivedData[n].id)
          console.log(identifier);

          for (let x=0; x<receivedData.length; x++)
          website.push(receivedData[x].website)
          console.log(website);
        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });

// function searchFunction (){
//   if (something being entered === number from identifier){
//     return name;
//   } else if (something being entered === website from identifier) {
//     return name;
//   } else if (something being entered === name from identifier){
//     return name;
//   } else {
//     return "Something went wrong";
//   }
// }
