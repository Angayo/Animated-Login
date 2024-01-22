function backgroundanime() {
  let div = document.createElement("div");
  div.setAttribute("class", "star");
  document.body.appendChild(div);

  div.style.left = Math.random() * innerWidth + "px";

  let size = Math.random() * 12;

  div.style.fontSize = 12 + size + "px";

  let duration = Math.random() * 3;

  div.style.animationDuration = 2 + duration + "s";

  setTimeout(() => {
    document.body.removeChild(div);
  }, 5000);
}

setInterval(() => {
  backgroundanime();
}, 100);
