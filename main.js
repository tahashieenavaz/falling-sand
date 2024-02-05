import "./style.css";
import Engine from "./classes/Engine";
import { arc, arcIf, grid, repo, sleep } from "./helpers";

new Engine();

repo("canvas").addEventListener("click", (e) => {
  grid().update(e.x, e.y, 1);
});

(async function animate() {
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 200);

  repo("context").clearRect(0, 0, innerWidth, innerHeight);

  grid().forEach((i, p, value) => {
    arcIf(Boolean(value), i, p, 10);
  });

  grid().forEachRow((row, i) => {
    for (let p = 0; p < row.length; p++) {
      if (row[p] && grid().at(i + 1, p) == 0) {
        grid().update(i, p, 0);
        grid().update(i + 1, p, 1);
      }
    }
  });
})();
