function github_download(download_url, option) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var url = JSON.parse(xhttp.responseText).assets[option].browser_download_url;
			window.location.replace(url);
			window.location.href = url;
		}
	};
	xhttp.open("GET", "https\:\/\/api.github.com\/repos\/" + download_url + "\/releases\/latest", true);
	xhttp.send();
}
