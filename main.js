import "./style.css";
import Engine from "./classes/Engine";
import { repo } from "./helpers";

new Engine();

repo("canvas").addEventListener("click", (e) => {
  repo("grid").update(e.x, e.y, 1);
});

(function animate() {
  requestAnimationFrame(animate);
  repo("context").clearRect(0, 0, innerWidth, innerHeight);
  repo("grid").forEach((i, p, value) => {
    if (value) {
      repo("context").beginPath();
      repo("context").arc(i, p, 1, 0, Math.PI * 2);
      repo("context").fillStyle = "white";
      repo("context").fill();
      repo("context").closePath();
    }

    if (value && repo("grid").value[i][p + 1] == 0) {
      repo("grid").value[i][p] = 0;
      repo("grid").value[i][p + 1] = 1;
    } else if (value && repo("grid").value[i + 1][p + 1] == 0) {
      repo("grid").value[i][p] = 0;
      repo("grid").value[i + 1][p + 1] = 1;
    } else if (
      value &&
      repo("grid").value[i + 1][p - 1] == 0 &&
      p != repo("grid").length - 1
    ) {
      repo("grid").value[i][p] = 0;
      repo("grid").value[i + 1][p - 1] = 1;
    }
  });
})();
