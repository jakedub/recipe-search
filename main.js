//Element Grabs
let items =document.getElementsByTagName("ul");
let input = document.getElementById("myInput");

//Variables
let receivedData = [];
let identifier = [];
let name = [];
let website = [];


//Fetch
  fetch("http://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        if (response.status !== 200) {
          // console.log(response.status);
          return;
        }
        response.json().then(function(data) { //data is present in array
          for (let i=0; i<data.length; i++)
          receivedData.push(data[i]);
          responsdedData(data);
          console.log(receivedData);
        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });


// function replace(){
//   let inputValue = input.value;
//   let source = "http://jsonplaceholder.typicode.com/users"
// }
