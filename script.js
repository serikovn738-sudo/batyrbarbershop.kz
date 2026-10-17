// Маленький скрипт: автоматически ставит текущий год внизу сайта.
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
