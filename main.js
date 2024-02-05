import "./style.css";
import Engine from "./classes/Engine";
import Collection from "./classes/Collection";
import Repository from "./classes/Repository";

new Engine();

const grid = new Collection(innerWidth, innerHeight);
Repository.canvas.addEventListener("click", (e) => {
  grid.update(e.x, e.y, 1);
  console.log(e.x, e.y);
});

(function animate() {
  requestAnimationFrame(animate);

  Repository.context.clearRect(0, 0, innerWidth, innerHeight);

  grid.forEach((i, p, value) => {
    if (value) {
      Repository.context.beginPath();
      Repository.context.arc(i, p, 1, 0, Math.PI * 2);
      Repository.context.fillStyle = "white";
      Repository.context.fill();
      Repository.context.closePath();
    }

    if (value && grid.value[i][p + 1] == 0) {
      grid.value[i][p] = 0;
      grid.value[i][p + 1] = 1;
    } else if (value && grid.value[i + 1][p + 1] == 0) {
      grid.value[i][p] = 0;
      grid.value[i + 1][p + 1] = 1;
    } else if (value && grid.value[i + 1][p - 1] == 0 && p != grid.length - 1) {
      grid.value[i][p] = 0;
      grid.value[i + 1][p - 1] = 1;
    }
  });
})();
