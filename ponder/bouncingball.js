const myCanvas = document.getElementById("ball_canvas");
const ctx = myCanvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

let x = 50;
let y = 50;
const radius = 10;
let dx = 1; 
let dy = 1;
const color = "orange";

function drawLogo() {
    const img = new Image();
    img.src = "ponder/dvdlogo.png";
    ctx.drawImage(img, x, y, 100, 50);
    
}

function update() {
    
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); // Clear the canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
    drawLogo(); // Draw the ball


    x += dx;
    y += dy;

    if (x + 90 > myCanvas.width || x < 0) {
        dx = -dx;
    }

    if (y + 50 > myCanvas.height || y < 0) {
        dy = -dy;
    }

    
    requestAnimationFrame(update);

}

update();