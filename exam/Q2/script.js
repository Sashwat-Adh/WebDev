let lines = "";
for (let i = 5; i >= 1; i--) {
  lines += " ".repeat(5 - i) + "*".repeat(i) + "\n";
}
document.getElementById("pattern").textContent = lines;