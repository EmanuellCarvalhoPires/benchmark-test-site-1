document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const btnAction = document.getElementById("btnAction");
  const counterText = document.getElementById("counterText");
  let count = 0;

  // Alternador de tema
  toggle.addEventListener("click", () => {
    const isDark = document.body.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.body.removeAttribute("data-theme");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  });

  // Contador interativo
  btnAction.addEventListener("click", () => {
    count++;
    counterText.textContent = `Ações: ${count}`;
    console.log(`[Benchmark Lab] Evento disparado: #${count}`);
  });
});
