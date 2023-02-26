let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
var pazartesilink = document.getElementById("pazartesi-link");
var salilink = document.getElementById("sali-link");
var carsambalink = document.getElementById("carsamba-link");
var persembelink = document.getElementById("persembe-link");
var cumalink = document.getElementById("cuma-link");
var cumartesilink = document.getElementById("cumartesi-link");
var pazarlink = document.getElementById("pazar-link");

days.forEach((day, index) => {
  if (index == new Date().getDay()) {
    console.log("Bugün " + day);
    if (day == "Pazar") {
      pazarlink.style.display = "flex";
    }
    if (day == "Pazartesi") {
      pazartesilink.style.display = "flex";
    }
    if (day == "Salı") {
      salilink.style.display = "flex";
    }
    if (day == "Çarşamba") {
      carsambalink.style.display = "flex";
    }
    if (day == "Perşembe") {
      persembelink.style.display = "flex";
    }
    if (day == "Cuma") {
      cumalink.style.display = "flex";
    }
    if (day == "Cumartesi") {
      cumartesilink.style.display = "flex";
    }
  }
});
