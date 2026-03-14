const form = document.getElementById("earlyForm");
const loader = document.getElementById("loader");
const btnText = document.getElementById("btnText");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  loader.classList.remove("hidden");
  btnText.innerText = " ";
  document.getElementById("submitBtn").disabled = true;

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    role: document.getElementById("role").value,
    feedback: document.getElementById("feedback").value,
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbyNyQI2Eh9vaXF02bU5koCjaYSQmmaKRi-TsvUL9aelCPDPRyKqyw1AI2iBtVJkqSKM/exec",
    {
      method: "POST",
      body: JSON.stringify(data),
    },
  )
    .then((res) => res.text())
    .then((response) => {
      loader.classList.add("hidden");

      btnText.innerText = "Submitted";

      successMessage.classList.remove("hidden");

      form.reset();
    })
    .catch((error) => {
      loader.classList.add("hidden");
      btnText.innerText = "Try Again";
    });
});
