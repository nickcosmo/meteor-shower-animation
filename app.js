let html = "";

const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
let diag = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));

for (let i = 0; i < 1000; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let deltaX;
  let deltaY;
  let myDiag;
  let ratio;
  if (x <= centerX && y <= centerY) {
    //quadrant1
    deltaX = x;
    deltaY = y;
    myDiag = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    ratio = 1 - myDiag / diag;
    html += `<div class=meteor style="top:${y}; left:${x}; opacity:${ratio}; transform:scale(${ratio});"></div>`;
  } else if (x > centerX && y <= centerY) {
    //quadrant2
    deltaX = window.innerWidth - x;
    deltaY = y;
    myDiag = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    ratio = 1 - myDiag / diag;
    html += `<div class=meteor style="top:${y}; left:${x}; opacity:${ratio}; transform:scale(${ratio});"></div>`;
  } else if (x <= centerX && y > centerY) {
    //quadrant3
    deltaX = x;
    deltaY = window.innerHeight - y;
    myDiag = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    ratio = 1 - myDiag / diag;
    html += `<div class=meteor style="top:${y}; left:${x}; opacity:${ratio}; transform:scale(${ratio});"></div>`;
  } else {
    //quadrant3
    deltaX = window.innerWidth - x;
    deltaY = window.innerHeight - y;
    myDiag = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    // const bigX = (centerY*(deltaX))/deltaY;
    // diag =  Math.sqrt(Math.pow((bigX-centerX), 2) + Math.pow((deltaY-centerY), 2));
    ratio = 1 - (myDiag / diag);
    html += `<div class=meteor style="top:${y}; left:${x}; opacity:${ratio}; transform:scale(${ratio});"></div>`;
  }
}

document.getElementById("main").innerHTML = html;

const meteors = document.querySelectorAll(".meteor");

setInterval(() => {
  const random = Math.floor(Math.random() * 500);
  meteors[random].classList.add("meteor-active");
}, 200);
