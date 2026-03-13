const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")

canvas.width=1200
canvas.height=800

let img=null
let mode="image"

document.getElementById("upload").onchange=e=>{

const file=e.target.files[0]

const reader=new FileReader()

reader.onload=function(event){

img=new Image()

img.onload=function(){
draw()
}

img.src=event.target.result

}

reader.readAsDataURL(file)

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

if(!img) return

if(mode==="image") imageMode()
if(mode==="icon") iconMode()
if(mode==="cluster") clusterMode()

}
