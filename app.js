let model = null;

//Load model
(async () => {
    console.log("Loading model...");
    model = await tf.loadLayersModel("output/model.json");
    console.log("Loaded model...");
})();

function changeCelsius() {
    let celsius = document.getElementById("celsius").value;
    document.getElementById("lbl-celsius").innerHTML = celsius;
    if (model != null) {
        let tensor = tf.tensor1d([parseInt(celsius)]);
        let prediction = model.predict(tensor).dataSync();
        prediction = Math.round(prediction, 1);
        document.getElementById("result").innerHTML = celsius + " degrees Celsius is " + prediction + " degrees Fahrenheit";
    } else {
        document.getElementById("result").innerHTML = "Please, try again in a few moments...";
    }
}