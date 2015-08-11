;(function($){
	$(".select-show").on("click",function(){
		var that = this;
		$.each($(".select-show"),function(n,m){
			var _this = $(m);
			var _sPanel = _this.parent();
			var _sInput = _this.find("input");
			if(_sPanel.hasClass("active"))
			{
				_sInput.val(_sInput.attr("valueDemo"));
				setTimeout(function(){
					_sPanel.removeClass("active");
				},100)
			}
			else if( that == m )
			{
				if(_sInput.attr("valueId")=="")
				{
					_sInput.val("");
				}
				_sPanel.addClass("active");
			}
		})
	})
	
	$(".select-list").on("click","li",function(){
		var _this = $(this);
		var _sPanel = _this.parent().parent();
		var _sInput = _sPanel.find("input");
		_sInput.attr("valueId",_this.attr("valueId"));
		_sInput.attr("valueDemo",_this.html());
		_sInput.val(_this.html());
		setTimeout(function(){
			_sPanel.removeClass("active");
		},100)
		
	})
	
	$(".a-r").on("click",function(){
		var _this = $(this);
		_this.parent().hide();
		_this.parent().prev().show();
		_this.parent().prev().find("input[type=hidden]").val("");
        _this.parent().prev().find("input[type=file]").val("");
	})
	
	$(".a-b").on("click",function(event){
		alert("11");
		if(event.target.tagName.toLowerCase() == "input")
		{
			return ;
		}
		$(this).find("input")[0].click();
	})
	
	
	document.getElementById("file01").onchange = function(){
		myAjaxUpload.call(this);
	}
	
	document.getElementById("file02").onchange = function(){
		myAjaxUpload.call(this);
	}
	
	document.getElementById("file03").onchange = function(){
		myAjaxUpload.call(this);
	}
	
	var myAjaxUpload = function(){
		if(this.files && this.files[0])
		{
		   if(this.files[0].size > 1024*1024*5)
		   {
		   		alert("图片尺寸不能大于5M");
		   		this.value = "";
		   		return ;
		   }
           var _this = this;
           var  formdata = new FormData();
            
            formdata.append('Filedata', this.files[0], this.files[0].name);

            new $.xici.AjaxUpload({
                formData: formdata,
                uploadService:xct.uploadService,
                id: new Date().getTime(),
                success: function(respText) {

                    var json = JSON.parse(respText);

                    if (json.result.url === '')
                    {
                            alert('图片尺寸不能大于5M！');
                            return false;
                    }
					
					$(_this).parent().hide();
					$(_this).parent().next().find("img")[0].src = json.result.url+"/320";
					$(_this).parent().next().show();
					$(_this).next().val(json.result.url);
					
                },
                error: function(respText, respStatus) {
                    //alert('上传图片出错  : ' + respStatus + ' : ' + respText);
                    alert('上传图片失败，请重试');
                }
            });
		}
	}
	
	$(".b-g button").on("click",function(){
		var sTheme = document.getElementById("s_theme");
		var sAddress = document.getElementById("s_address");
		var sContent = document.getElementById("s_content");

		var fileName01 = document.getElementById("hidden01");
		var fileName02 = document.getElementById("hidden02");
		var fileName03 = document.getElementById("hidden03");

		//if(sTheme.getAttribute("valueId") == "0")
		//{
		//	alert("请选择主题！");
		//	return;
		//}
        //
		//if(sAddress.getAttribute("valueId") == "0")
		//{
		//	alert("请选择地点！");
		//	return;
		//}

		if(sContent.getAttribute("valueId") == "0")
		{
			alert("请选择你喜欢的标签贴纸（必选）");
			return;
		}
        if(sAddress.getAttribute("valueId") == "0")
        {
            alert("请选择城市");
            return;
        }
		if(fileName01.value == "" && fileName02.value == ""  && fileName03.value == "" )
		{
			alert("请上传照片");
			return;
		}

		$.ajax({
			type: 'POST',
		    url: window.submitServer,
		    dataType: "json",
            data: {
                image1: fileName01.value,
                image2: fileName02.value,
                image3: fileName03.value,
                area_id: sAddress.getAttribute("valueId"),
                area: sAddress.getAttribute("valueDemo"),
                slogan_id: sContent.getAttribute("valueId"),
                slogan: sContent.getAttribute("valueDemo"),
                activity_id: sTheme.getAttribute("valueId"),
                activity: sTheme.getAttribute("valueDemo")
            },
			success:function(data){
                if (data.code == "1") {
                    alert(data.message);
                    window.location.href = window.path + "mobileRank/";
                }
                else {
                    alert(data.message);
                }
			},
			error:function(){

			}
		})
	})
	
})(Zepto)
