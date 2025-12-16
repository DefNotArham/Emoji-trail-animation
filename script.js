const bodyEl = document.querySelector("body");
const smile = document.getElementById("smile");
const angry = document.getElementById("angry");
const funny = document.getElementById("funny");
const heart = document.getElementById("heart");
const dead = document.getElementById("dead");
const hearteye = document.getElementById("hearteye");
const tasty = document.getElementById("tasty");
const fever = document.getElementById("fever");
const sad = document.getElementById("sad");

const div = document.querySelector("div");

smile.addEventListener("click", () => {
  div.remove();
  emojiSpawn("smile");
  reloadBtn();
});

angry.addEventListener("click", () => {
  div.remove();
  emojiSpawn("angry");
  reloadBtn();
});

funny.addEventListener("click", () => {
  div.remove();
  emojiSpawn("funny");
  reloadBtn();
});

heart.addEventListener("click", () => {
  div.remove();
  emojiSpawn("funny");
  reloadBtn();
});

dead.addEventListener("click", () => {
  div.remove();
  emojiSpawn("dead");
  reloadBtn();
});

hearteye.addEventListener("click", () => {
  div.remove();
  emojiSpawn("hearteye");
  reloadBtn();
});

tasty.addEventListener("click", () => {
  div.remove();
  emojiSpawn("tasty");
  reloadBtn();
});

fever.addEventListener("click", () => {
  div.remove();
  emojiSpawn("fever");
  reloadBtn();
});

sad.addEventListener("click", () => {
  div.remove();
  emojiSpawn("sad");
  reloadBtn();
});

function reloadBtn() {
  const button = document.createElement("button");
  button.textContent = "Choose different emoji";
  button.style.cursor = "pointer";
  bodyEl.appendChild(button);
  button.addEventListener("click", () => {
    location.reload();
  });
}

function emojiSpawn(emoji) {
  bodyEl.addEventListener("mousemove", (event) => {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = mouseX + "px";
    spanEl.style.top = mouseY + "px";
    spanEl.style.backgroundImage = `url(emojis/${emoji}.png)`;
    spanEl.style.position = "absolute";
    bodyEl.appendChild(spanEl);

    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    setTimeout(() => {
      spanEl.remove();
    }, 3000);
  });
}
