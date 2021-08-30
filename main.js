     Webcam.set({
         width: 350,
         height: 260,
         image_format: "png",
         png_quality: 100
     });
     Webcam.attach("#camera");

     camera = document.getElementById("camera");

     function take_snapshot() {
         Webcam.snap(function (data_uri) {
             document.getElementById("result").innerHTML = '<img src=' + data_uri + ' id="img">';
         });
     }

     console.warn('ml5 verson', ml5.version);

     classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Cv7pL5BI3/model.json', modelLoaded);

     function modelLoaded() {
         console.log("Modal Loaded")
     }