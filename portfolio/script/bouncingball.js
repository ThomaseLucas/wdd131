// Get the canvas element from HTML and set up 2D drawing context
const myCanvas = document.getElementById("ball_canvas");
const ctx = myCanvas.getContext("2d");

// Fill the canvas with black background initially
ctx.fillStyle = "black";
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

// Position variables for the bouncing logo
let x = 50;  // Starting x position
let y = 50;  // Starting y position

// Movement variables (unused but kept for reference)
const radius = 10;
let dx = .75;  // Speed in x direction (horizontal)
let dy = .75;  // Speed in y direction (vertical)
const color = "orange";

// Function to draw the DVD logo at current x,y position
function drawLogo() {
    const img = new Image();
    img.src = "images/dvdlogo.png";
    // Draw image at (x,y) with width=100 and height=50
    ctx.drawImage(img, x, y, 100, 50);
}

// Main animation function that runs every frame
function update() {
    // Clear the entire canvas
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    
    // Redraw black background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
    
    // Draw the logo at its current position
    drawLogo();

    // Update position by adding movement speed
    x += dx;
    y += dy;

    // Bounce off left and right walls
    // Check if logo hits right edge (x + logo width) or left edge (x)
    if (x + 100 > myCanvas.width || x < 0) {
        dx = -dx;  // Reverse horizontal direction
    }

    // Bounce off top and bottom walls
    // Check if logo hits bottom edge (y + logo height) or top edge (y)
    if (y + 50 > myCanvas.height || y < 0) {
        dy = -dy;  // Reverse vertical direction
    }

    // Request next animation frame (creates smooth 60fps animation)
    requestAnimationFrame(update);
}

// Start the animation
update();