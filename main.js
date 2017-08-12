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
                <div class="box">
                <p><span>Name:</span>${data[i].name}</p>
                <p><span>ID: </span>${data[i].id}</p>
                <p><span>Username: </span>${data[i].username}</p>
                <p><span>Email: </span>${data[i].email}</p>
                </div>
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
