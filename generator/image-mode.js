function imageMode(){

ctx.drawImage(img,0,0,canvas.width,canvas.height)

let data=ctx.getImageData(0,0,canvas.width,canvas.height)

let pixels=data.data

let step=12

for(let y=0;y<canvas.height;y+=step){

for(let x=0;x<canvas.width;x+=step){

let i=(y*canvas.width+x)*4

let r=pixels[i]
let g=pixels[i+1]
let b=pixels[i+2]

let brightness=(r+g+b)/3

ctx.fillStyle=brightness>120?"white":"black"

ctx.fillRect(x,y,step,step)

}

}

}
