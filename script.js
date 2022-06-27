setInterval(rain, 500);

function rain() {
  let barre = document.createElement("hr");

  barre.style.right = Math.random() * window.innerWidth + "vh";
  barre.style.animationDelay = Math.random() * 2 + "ms";
  barre.style.opacity = Math.random();
  barre.style.width = Math.random() * 10 + "px";
  document.body.appendChild(barre);
}



