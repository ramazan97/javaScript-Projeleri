let count = 0;
const ibtn = document.getElementById("increaseBtn");
const dbtn = document.getElementById("decreaseBtn");
const counter = document.getElementById("counter");

ibtn.addEventListener("click", function () {
  count++;
  counter.innerHTML = count;
});
dbtn.addEventListener("click", function () {
  count--;
  counter.innerHTML = count;
});