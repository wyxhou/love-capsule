body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(to bottom, #ffe6f0, #fff0f5);
  text-align: center;
  overflow-x: hidden;
}

/* HERO */
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.hero h1 {
  font-size: 2.5rem;
  color: #ff4d88;
}

button {
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  background: #ff4d88;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.05);
}

/* REASONS */
.reasons {
  padding: 80px 20px;
}

.envelope-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.envelope {
  width: 150px;
  height: 120px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
}

.hidden {
  display: none;
  font-size: 0.9rem;
}

/* GALLERY */
.gallery {
  padding: 80px 20px;
}

.photos {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.photos img {
  width: 200px;
  border-radius: 12px;
  transform: rotate(-2deg);
  transition: 0.3s;
}

.photos img:hover {
  transform: rotate(0deg) scale(1.05);
}

/* FINAL */
.final {
  padding: 100px 20px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* FLOATING HEARTS */
.hearts::before {
  content: "💗 💖 💕 💞 💓";
  position: fixed;
  top: -50px;
  left: 0;
  width: 100%;
  font-size: 24px;
  animation: floatHearts 12s linear infinite;
  opacity: 0.4;
}

@keyframes floatHearts {
  0% { transform: translateY(0); }
  100% { transform: translateY(110vh); }
}
