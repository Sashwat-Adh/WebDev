const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {
  btn.disabled = true;
  msg.textContent = "Creating account...";

  setTimeout(() => {
    msg.textContent = "Account created successfully!";
  }, 2000);
});