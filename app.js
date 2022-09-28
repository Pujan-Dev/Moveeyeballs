document.addEventListener("mousemove", (e) => {
  const mX = e.clientX;
  const mY = e.clientY;

  const anchor = document.getElementById("img");
  const rekt = anchor.getBoundingClientRect();
  const anchory = rekt.left + rekt.width / 2;
  const anchorx = rekt.top + rekt.height / 2;

  const angledeg = angle(mX, mY, anchorx, anchory);
  console.log(angledeg);
  const eyes = document.querySelectorAll(".eye");

  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angledeg}deg)`;
    anchor.style.filter = `hue-rotate(${angledeg})`;
  });
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
