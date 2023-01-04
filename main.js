Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerhtml='<img id="captured_image" src="'+data_uri+'"/>'
    });
}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://storage.googleapis.com/tm-model/nJCGpK2vC/model.json',moldelLoaded)

function moldelLoaded(){
    console.log("Model Loaded")
    
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResult)
}

function getResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}