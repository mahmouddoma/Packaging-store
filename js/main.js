let num = document.querySelectorAll(".counter .num");
let counter = document.querySelector(".counter-content");
// @ts-ignore
let started = false;

window.onscroll = function () {
  if (window.scrollY >= counter.offsetTop) {
    if (!started) {
      num.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
window.scroll({
  top: 3500, 
  left: 0, 
  behavior: 'smooth'
});