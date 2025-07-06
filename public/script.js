document.getElementById("feedbackForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").value;
  const course = document.querySelector("input[name='course']").value;
  const feedback = document.querySelector("textarea[name='feedback']").value;

  try {
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, course, feedback }),
    });

    const data = await res.json();
    const msg = document.getElementById("responseMsg");
    if (res.ok) {
      msg.textContent = "✅ " + data.message;
      msg.style.color = "green";
    } else {
      msg.textContent = "❌ " + data.message;
      msg.style.color = "red";
    }
  } catch (error) {
    const msg = document.getElementById("responseMsg");
    msg.textContent = "❌ Failed to submit feedback.";
    msg.style.color = "red";
  }
});
