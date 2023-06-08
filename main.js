noseX = 0;
noseY = 0;

function preload(){

}

function setup(){
    canvas=createCanvas(500, 400);
    canvas.position(425,175);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function gotPoses(){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 20;
        noseY = results[0].pose.nose.y + 20;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
    image(video, 0,0,500,400);
    //image(___, noseX, noseY, __,__);
}

function takeSnapshot(){
    save('Mustache-selfie.png');
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}