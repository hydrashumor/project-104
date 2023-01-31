Webcam.set({
    width:350,
    height:200,
    image_format: 'png',
    png_quality:90
});

webcam = document.getElementById("webcam");
Webcam.attach( '#webcam' );
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 verison:', ml5.version);