function iconMode(){

ctx.drawImage(img,0,0,256,256)

let data=ctx.getImageData(0,0,256,256)

let pixels=data.data

let step=8

for(let y=0;y<256;y+=step){

for(let x=0;x<256;x+=step){

let i=(y*256+x)*4

let r=pixels[i]
let g=pixels[i+1]
let b=pixels[i+2]

let brightness=(r+g+b)/3

ctx.fillStyle=brightness>120?"white":"black"

ctx.fillRect(x,y,step,step)

}

}

}
