function CheckSound() {

    navigater.mediaDevices.getUserMedia({audio:true});

    Classfier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/S6wifztS_/model.json',modelReady);
    
}

function modelReady() {

    Classfier.classify(gotResults);
    
}

function gotResults(error,results) {

    console.log("gotResults");
    
}