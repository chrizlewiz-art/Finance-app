const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {
  const app = document.querySelector(".app");

  app.innerHTML = `
    <h1>Finance App</h1>
    <p>Manage your finances easily.</p>

    <div class="card">
      <h2>Get Started</h2>
      <p>Subscribe for ₦10,000 to unlock your Finance App account.</p>

      <button id="subscribeBtn">Subscribe — ₦10,000</button>
    </div>
  `;

  document.getElementById("subscribeBtn").addEventListener("click", function () {
    alert("Subscription selected. Payment setup will be added next.");
  });
});
