var mouseEvent="empty";
var lastpositionx , lastpositiony;

canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    linewidth=document.getElementById("linewidth").value;
    mouseEvent="down";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="up";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="leave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentmouseX=e.clientX-canvas.offsetLeft;
    currentmouseY=e.clientY-canvas.offsetTop;
    if (mouseEvent=="down"){
        ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=linewidth;
ctx.moveTo(lastpositionx,lastpositiony);
ctx.lineTo(currentmouseX,currentmouseY);
ctx.stroke();
    }
    lastpositionx=currentmouseX;
    lastpositiony=currentmouseY;
}
function clearA(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
var lasttouchX,lasttouchY;
var width=screen.width;
var newwidth=screen.width-70;
var newheight=screen.height-300;
if(width<992){
    document.getElementById("my_canvas").width=newwidth;
    document.getElementById("my_canvas").height=newheight;
    document.body.style.overflow="hidden";
}
    canvas.addEventListener("touchstart",mytouchstart);
    function mytouchstart(e){
        color=document.getElementById("color").value;
        linewidth=document.getElementById("linewidth").value;
        lasttouchX=e.touches[0].clientX-canvas.offsetLeft;
        lasttouchY=e.touches[0].clientY-canvas.offsetTop;
    }
    canvas.addEventListener("touchmove",mytouchmove);
    function mytouchmove(e){
        currenttouchX=e.touches[0].clientX-canvas.offsetLeft;
       currenttouchY=e.touches[0].clientY-canvas.offsetTop;
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=linewidth;
       ctx.moveTo(lasttouchX,lasttouchY);
       ctx.lineTo(currenttouchX,currenttouchY);
       lasttouchX=currenttouchX;
       lasttouchY=currenttouchY;
    }

