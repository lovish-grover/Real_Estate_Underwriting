const form = document.getElementById("earlyForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const data = new FormData(form);

fetch("https://script.google.com/macros/s/AKfycbzKbrNrilKxPirdiM0krVcpSBYOTb0y42lm0q-uzhU-xSa9Rh-xlyRAAqZub8RtD7rm/exec", {

method: "POST",
body: data

})
.then(res => {

alert("Thank you! You're on the early access list.");

form.reset();

})
.catch(err => {

alert("Something went wrong. Please try again.");

});

});