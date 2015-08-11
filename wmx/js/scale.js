(function ($w,$) {
	$w.xici = $w.xici || {};
		
    var w = $w.pageConfig || 640;
    var h = $w.pageConfig || 960;

	var wSW = $(window).width();
	var wSH = $(window).height();
	
    var scale = function () {
		
		if(typeof window.orientation == "undefined")
		{
			r = parseFloat(wSW / w);
			rh =  parseFloat(wSH / h);
		}
		else 
		{
			/*竖屏*/
			if(window.orientation==180||window.orientation==0){  
				r = parseFloat(wSW / w);
				rh =  parseFloat(wSH / h);
			}  


			
			/*横屏*/
			if(window.orientation==90||window.orientation==-90){  
				r = parseFloat(wSH / w);
				rh =  parseFloat(wSW / h);
			}  
		}
		

        r = (r > 1) ? 1 : r;
        rh = (rh > 1) ? 1 : rh;
        document.body.style.opacity = "0";
        setTimeout(function(){

        	document.body.style.webkitTransform="scale("+r+","+r+")";
 			document.body.style.transform="scale("+r+","+r+")";
 			setTimeout(function(){
 				document.body.style.height = wSH/r +"px";
 				document.body.style.opacity = "1";
 				$.xici.event.trigger("resizePage");
 			},300)
 			
        },300)
        
       // a.setAttribute("content", 'width=device-width, width=device-width; initial-scale=1.0;  minimum-scale=1.0; maximum-scale=2.0');
    }
	
    $w.addEventListener("DOMContentLoaded", scale, false);
    $w.addEventListener("orientationchange",scale ,false);
	
    scale();
	
})(window,jQuery)

