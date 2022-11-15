let nums = document.querySelectorAll(".count .num");
let count = document.querySelector(".this-side");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= count.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(count));
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