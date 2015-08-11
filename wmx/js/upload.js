;(function($,root){
    $.xici = $.xici || {};
    $.xici.AjaxUpload = function(option){
		if (!window.FormData) 
		{
				alert('手机版本太老了，不支持上传图片');
				return;
		}

		var _ = this;
		var xhr = new XMLHttpRequest();
		xhr.open("post", option.uploadService, true);
		xhr.setRequestHeader("X-UPLOAD-FROM", "xnb");
		xhr.setRequestHeader("X-UPLOAD-TOKEN", $.cookie("xnb_token"));
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status === 200) 
			{
				option.success && option.success.call(_, xhr.responseText, xhr.status);
			} 
			else if (xhr.readyState === 4) 
			{
				option.error && option.error.call(_, xhr.responseText, xhr.status);
			}
		};
		xhr.send(option.formData);
}
})(Zepto,xct)