//Element Grabs
let input = document.getElementById("myInput");
let container = document.getElementsByClassName("container")

//Variables
let receivedData = [];
let identifier = [];
// let name = [];
let website = [];
let api= "http://jsonplaceholder.typicode.com/users?"
let query = "=";
let email= [];


//Fetch
fetch("http://jsonplaceholder.typicode.com/users?=" + input)
    .then(function(response) {
        if (response.status !== 200) {
          return;
        }
        response.json().then(function(data) { //data is present in array
          for (let i=0; i<data.length; i++)
          receivedData.push(data[i]);
          console.log(data);
        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });

input.addEventListener("keypress", itemKeyPress);

function ask(){
  let input = document.getElementById("myInput");
  let url = api + query + input.value;
  let result = document.createElement("div");
  let newName = document.createElement("h1");
  result.innerHTML= `
  <h1>${input.value}</h1>
  <div class="name"></div>`
  console.log(result);
}

function itemKeyPress(event){
  if (event.which === 13){
    ask.call(this);
  }
}

//Function that goes through and filters based on the values present in the table. Returns only those present matching the values
// function filter(){
//   let filterValue=document.getElementById("myInput").value.toUppercase();
//   let table=document.getElementById("myTable");
//   let cells=table.querySelectorAll("td.items");
//   for (let i = 0; i < cells.length; i++) {
//     let a = cells[i].getElementsByTagName("a")[0];
//     if (a.innerHTML.toUppercase().indexOf(filterValue) > -1){
//       cells[i].style.display = "";
//     } else {
//       cells[i].style.display = "none";
//     }
//   }
// }
