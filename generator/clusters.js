function clusterMode(){

ctx.fillStyle="black"

ctx.fillRect(0,0,canvas.width,canvas.height)

for(let i=0;i<300;i++){

let x=Math.random()*canvas.width
let y=Math.random()*canvas.height

ctx.fillStyle="white"

ctx.fillRect(x,y,4,4)

}

}
