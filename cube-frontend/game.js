//     const display = document.querySelector("canvas")
//     const ctx = display.getContext("2d")
    
//     // ctx.fillStyle = "red"
//     // ctx.beginPath();
//     ctx.fillRect(100, 130, 200, 200)
//     // ctx.fill()
//     // ctx.stroke()
// 

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// console.log(middle)
canvas.width = 871;
canvas.height = 600;
ctx.fillStyle = "#FFFFFF"
ctx.fillRect(380, 500, 100, 100);


// window.addEventListener("keydown", function(e) {
//     e.
// })

// let x = 200;
// let dx = 1;
// let y = 200;
// let dy = 1;

// function animate() {
//     requestAnimationFrame(animate);
//     ctx.clearRect(0,0, innerWidth, innerHeight)
//     ctx.fillStyle = "#FFFFFF"
//     ctx.fillRect(x, y, 100, 100);

//     if(x > 750 || x < 200) {
//         dx = -dx;

//     }

//     if(y > 500 || y < 70) {
//         dy = -dy;

//     }
//     x += dx;
//     y += dy;
// }

// animate();

