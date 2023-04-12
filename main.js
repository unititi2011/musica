ppe=0;
pulsoesquerdox=0;
pulsoesquerdoy=0;
pulsodireitox=0;
pulsodireitoy=0;
som="";
function preload() {
    som=loadSound("music.mp3")
}
function setup() {
  canvas=createCanvas(600,500)  
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);

}
function modelLoaded() {
    console.log("poseNetinicializado");
}function modelLoaded() {
    console.log("poseNetinicializado");
}
function draw() {
image(video,0,0,600,500);  
fill("#f50202")  
stroke("#f50202")
circle(pulsoesquerdox,pulsoesquerdoy,20);
if(ppe>0.2){
    innumberpe=Number(pulsodireitoy);
removedecimais=floor(innumberpe);
volume=removedecimais/500;
document.getElementById("volume").innerHTML="Volume = "+volume;
som.setVolume(volume);
}
}
function iniciar(){
    som.play();
    som.setVolume(1);
    som.rate(1);
}
function gotPoses(results) {
if(results.length>0){
    console.log (results);
    ppe=results[0].pose.keypoints[9].score;
    pulsoesquerdox=results[0].pose.leftWrist.x;
    pulsoesquerdoy=results[0].pose.leftWrist.y;
    console.log(pulsoesquerdox);
    console.log(pulsoesquerdoy);
    pulsodireitox=results[0].pose.rightWrist.x;
    pulsodireitoy=results[0].pose.rightWrist.y;
    console.log(pulsodireitox);
    console.log(pulsodireitoy);
}
}