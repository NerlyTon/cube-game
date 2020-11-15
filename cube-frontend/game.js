//     const display = document.querySelector("canvas")
//     const ctx = display.getContext("2d")
    
//     // ctx.fillStyle = "red"
//     // ctx.beginPath();
//     ctx.fillRect(100, 130, 200, 200)
//     // ctx.fill()
//     // ctx.stroke()
// 

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');
// console.log(middle)
canvas.width = 871;
canvas.height = 600;
ctx.fillRect(50, 100, 300, 100);
ctx.fill('red')