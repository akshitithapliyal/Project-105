Webcam.attach('#camera');
camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:92
});
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5.version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/R6H2PEQ3G/model.json',modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}

function check(){
    img=document.getElementById("selfie_image");
    classifier.classify(img,gotresult);
}

function gotresult(error,results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_person_name").innerHTML=results[0].label;
    document.getElementById("result_person_accuracy").innerHTML=results[0].confidence.toFixed(2)*100+" %";
}
}