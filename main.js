noseX = 0;
noseY=0;
unfunny="";
hat="";
suit="";


function preload(){
    unfunny = loadImage('https://i.postimg.cc/MKJrhrhn/unfunny-mustache.png');
    hat = loadImage('https://i.postimg.cc/7YnLXQcM/hat-2-1.png');
    suit = loadImage('https://i.postimg.cc/CKbgshbX/PLEASE.png');
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
image(video, 0, 0, 300, 300);
image(unfunny, noseX-26, noseY+5, 60, 30);
image(hat, noseX-55, noseY-150, 120, 100);
image(suit, noseX-125, noseY+30,260,250);
}

function take_snapshot(){
    save('myFilterImage.png')
}
function modelLoaded(){
    console.log("POSENET is intitialized!");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x=" + noseX);
    console.log("nose y=" + noseY);


 }
}
