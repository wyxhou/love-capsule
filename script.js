document.addEventListener("DOMContentLoaded", () => {

  // smooth scroll
  document.getElementById("openBtn").addEventListener("click", () => {
    document.getElementById("reasons").scrollIntoView({
      behavior: "smooth"
    });
  });

  // envelope reveal
  document.querySelectorAll(".envelope").forEach(env => {
    env.addEventListener("click", () => {
      const text = env.querySelector("p");
      const span = env.querySelector("span");
      text.style.display = "block";
      span.style.display = "none";
    });
  });

  // running NO button (kept inside section)
  const noBtn = document.getElementById("noBtn");
  const container = document.querySelector(".buttons");

  noBtn.addEventListener("mouseenter", () => {
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  // typewriter
  const text = "Hi love… I made something for you 💌";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typeText").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 45);
    }
  }

  typeWriter();

});
