export default () => {
	function addCopy(e) {
		let copyTxt = ""
		e.preventDefault(); // 取消默认的复制事件
		copyTxt = window.getSelection(0).toString()
		copyTxt = `${copyTxt}\n————————————————\n标题：${document.title}\n原文链接：${location.href}\n著作权归 青春永不落幕 所有。遵循 MIT 版权协议，商业转载请联系作者获得授权，非商业转载请注明出处。`
		const clipboardData = e.clipboardData || window.clipboardData
		clipboardData.setData('text', copyTxt);
	}
	document.addEventListener("cut", e => {
		addCopy(e)
	});
	document.addEventListener("copy", e => {
		addCopy(e)
	});
}
