(function($w,$){
	document.body.addEventListener("touchstart",function(){});

	var lis = document.querySelectorAll("l-a");

	for(var i=0;i<lis.length;i++)
	{
		lis[i].addEventListener("touchstart",function(){
			this.classList.add("active");
		})

		lis[i].addEventListener("touchend",function(){
			this.classList.remove("active");
		})
	}

	


	// var path = window.path || "";
	// $(".home").on("click",function(){
	// 	window.location.href=path +"mobileIndex/";
	// })
	// $(".rule").on("click",function(){
	// 	window.location.href=path +"mobileHelp/";
	// })
	// $(".signup").on("click",function(){
	// 	window.location.href=path +"mobileJoin/";
	// })
	// $(".ranking").on("click",function(){
 //        window.location.href=path +"mobileRank/";
	// })
	

})(window,jQuery)