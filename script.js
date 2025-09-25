
document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    let star = document.createElement("div");
    star.classList.add("shooting-star");
    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 3000);
  }, 5000); 
});
