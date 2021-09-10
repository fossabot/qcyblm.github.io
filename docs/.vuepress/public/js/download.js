function github_download_error(error_link) {
	console.log("无此文件，正在跳转" + error_link);
	window.open(error_link, '_blank').focus();
	//window.location.replace(error_link);
}
function github_download(repositories, option) {
	var xhttp = new XMLHttpRequest();
	var error_link = "https://github.com/" + repositories + "/releases";
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			try {
				var content = JSON.parse(xhttp.responseText);
				var url = content.assets[option].browser_download_url;
				var name = content.assets[option].name;
				console.log("正在下载 " + name + " 请稍等……");
				window.location.replace(url);
			} catch (error) {
				github_download_error(error_link);
			}
		}
	};
	xhttp.onload = function () {
		if (this.readyState != 4 && this.status != 200) {
			github_download_error(error_link);
		}
	};
	xhttp.onerror = function () {
		github_download_error(error_link);
	};
	xhttp.ontimeout = function (e) {
		github_download_error(error_link);
	};
	xhttp.open("GET", "https://api.github.com/repos/" + repositories + "/releases/latest", true);
	xhttp.timeout = 2000;
	xhttp.send();
}
