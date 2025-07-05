document.getElementById("feedbackForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").value;
  const course = document.querySelector("input[name='course']").value;
  const feedback = document.querySelector("textarea[name='feedback']").value;

 const res = await fetch("http://localhost:5000/api/feedback", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name, email, course, feedback }),
});


  const data = await res.json();
  document.getElementById("responseMsg").textContent = data.message;
});
