let ball = document.getElementById("cursor-ball");

// let xDiff = ball.parentElement.querySelector(".content").clientWidth + 16;
// let yDiff = ball.parentElement.querySelector(".content").clientHeight + 16;

export const setMouseMove = () => {
  ball.style.position = "relative";

  document.querySelector(".ball-btn").addEventListener("mouseenter", () => {
    console.log("mutat");
    ball.classList.add("trans_025");
    ball.style.visibility = "visible";
    let btnWidth = ball.parentElement.clientWidth / 15;
    ball.style.transform = `scale(${btnWidth + 8})`;
  });

  document.querySelector(".ball-btn").addEventListener("mouseleave", () => {
    console.log("rejt");
    ball.style.transform = "scale(0)";
  });

  document.querySelector(".ball-btn").addEventListener("mousemove", (e) => {
    let xDiff = ball.parentElement.querySelector(".content").clientWidth;
    let yDiff = ball.parentElement.querySelector(".content").clientHeight;
    // console.log(`pos: ${e.x}:${e.y} / offset: ${e.offsetX}:${e.offsetY}`);
    console.log(xDiff, yDiff);
    // console.log(e);
    ball.style.left = `${e.x - xDiff}px`;
    ball.style.top = `${e.y - yDiff}px`;
  });
};
