const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
  load ++;
  if (load > 99) {
    clearInterval(int);
  }
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(num, in_min, in_max, out_min, out_max) {
  let numerator = (num - in_min) * (out_max - out_min)
  let denominator =  (in_max - in_min) 
  return numerator / denominator + out_min;
}