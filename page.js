function setup() {
  const canvasDiv = document.getElementById('canvasDiv');
  const canvas = createCanvas(350,350,WEBGL);
  canvas.parent(canvasDiv);
}

function draw() {
  background('#515f41');

  
  normalMaterial();
 


  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(150, 150, 150);
  pop();

 
}

function canvasHover(){
  const popWindow = document.getElementById("popWindow");
  popWindow.classList.remove("hidden");
}

function canvasHoverLeave(){
  const popWindow = document.getElementById("popWindow");
  popWindow.classList.add("hidden");
}

function imgHover(imgId){
  const imgDiv = document.getElementById(imgId);
  imgDiv.classList.remove("hidden");
}

function imgHoverLeave(imgId){
  const imgDiv = document.getElementById(imgId);
  imgDiv.classList.add("hidden");

}

