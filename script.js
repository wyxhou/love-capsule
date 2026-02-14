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
      env.querySelector("p").style.display = "block";
      env.querySelector("span").style.display = "none";
    });
  });

  // running NO button
  const noBtn = document.getElementById("noBtn");
  const container = document.querySelector(".buttons");

  noBtn.addEventListener("mouseenter", () => {
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
  });

  // typewriter
  const text = "Hi love… I made something for you 💌";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typeText").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 42);
    }
  }
  typeWriter();

  // 💗 CONFETTI
  const yesBtn = document.querySelector(".yes");
  const loveMessage = document.getElementById("loveMessage");

  const canvas = document.createElement("canvas");
  canvas.id = "confetti-canvas";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let confetti = [];

  function createConfetti() {
    confetti = [];
    for (let i = 0; i < 160; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 3 + 2,
        color: ["#ff4d88", "#ff7aa8", "#ffd1e6", "#ffffff"][Math.floor(Math.random()*4)]
      });
    }
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
      c.y += c.d;
      if (c.y > canvas.height) c.y = -10;
    });
  }

  let running = false;

  function startConfetti() {
    if (running) return;
    running = true;
    createConfetti();

    const end = Date.now() + 5000;

    function frame() {
      drawConfetti();
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        running = false;
      }
    }

    frame();
  }

  yesBtn.addEventListener("click", () => {
    loveMessage.classList.add("show");
    startConfetti();
  });

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

});
