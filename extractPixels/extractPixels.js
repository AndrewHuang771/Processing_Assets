function analyze() {
	cv = document.querySelector("#cv");
	img1 = document.querySelector("#img1");

	c = cv.getContext("2d");
	c.drawImage(img1, 0,0,32,32);

	var imgData = c.getImageData(0, 0, 32, 32);

	// get color pixels rgba
	var count=1;
	for (var i = 0; i < imgData.data.length; i += 4) {
	    console.log("pixel red " + count + ": " + imgData.data[i]);
	    console.log("pixel green " + count + ": " + imgData.data[i+1]);
	    console.log("pixel blue " + count + ": " + imgData.data[i+2]);
	    console.log("pixel alpha " + count + ": " + imgData.data[i+3]);
	    count++;
	}
	console.log(imgData, imgData.toString());
}