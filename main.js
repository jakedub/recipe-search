// //Element Grabs
// let inputElement = document.getElementById("myInput");
// let container = document.getElementsByClassName("container")
// let api= "http://jsonplaceholder.typicode.com/users?="
//
// function fetchStuff(){
// fetch(api)
//     .then(function(response) {
//         if (response.status !== 200) {
//           return;
//         }
//         response.json().then(function(Object) {
//           //data is present in array
//           console.log(Object);
//
//           let inputValue=inputElement.value;
//           // console.log(inputValue);
//           for (i in Object){
//               console.log("I am here");
//             if(inputValue===Object[i].name){
//               console.log(inputValue===Object[i].name);
//             }
//           }
//         });
//       }
//     )
//     .catch(function(err) {
//       console.log("Fetch Error :-S", err);
//     });
// }
//
// inputElement.addEventListener("keypress", itemKeyPress);
// function itemKeyPress(event){
//   if (event.key == 'Enter'){
//     fetchStuff();
//     inputElement.value = "";
//   }
// }



let container = document.querySelector(".container")
let inputElement = document.getElementById("myInput");

//set event listener to trigger search only after 'enter' is pressed.
inputElement.addEventListener("keypress", function(event) {
  if (event.key == "Enter") {
    fetchStuff();
  }
});

//fetch
function fetchStuff() {
  fetch("http://jsonplaceholder.typicode.com/users?=")
      .then(function(response) {
          if (response.status !== 200) {
            return;
          }

         //successful fetch function
          response.json().then(function(data){
            let returnResponse = document.createElement("div");
            let input2 = inputElement.value;
            for (let i=0; i<data.length; i++){
              if (input2===data[i].name){
                console.log(data[i].name);
                returnResponse.innerHTML = `
                <p></p>
                <img src="http://via.placeholder.com/100" alt="Image Missing">
                <p><span>Name:</span>${data[i].name}</p>
                <p><span>ID: </span>${data[i].id}</p>
                <p><span>Username: </span>${data[i].username}</p>
                <p><span>Email: </span>${data[i].email}</p>
                `;
                container.appendChild(returnResponse);
            }}
            console.log(data);
          });
        }
      )

     //error
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
}
