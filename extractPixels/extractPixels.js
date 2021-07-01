function analyze() {

	let imageInput = document.getElementById('extract_image').files[0];
	let imgSrc = window.URL.createObjectURL(imageInput);

	const img = new Image();

	cv = document.querySelector("#cv");
	c = cv.getContext("2d");

	img.onload = function() {

		let height = img.height;
		let width = img.width;
		c.drawImage(img, 0, 0, width, height);

		var imgData = c.getImageData(0, 0, width, height);
		
		pixel_str = "[";

		for (var i = 0; i < imgData.data.length; i += 4) {
			pixel_str += "[";
		    pixel_str += imgData.data[i].toString() + ", ";
		    pixel_str += imgData.data[i+1].toString() + ", ";
		    pixel_str += imgData.data[i+2].toString() + ", ";
		    pixel_str += imgData.data[i+3].toString() + "],";
		}
		pixel_str = pixel_str.slice(0, -1);
		pixel_str += "]";

		document.querySelector("#output").innerHTML = pixel_str;
	}

	img.src = imgSrc;

}