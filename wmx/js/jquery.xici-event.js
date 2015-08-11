/*
	add by xlsu 
		event manager
*/
;(function($){
    $.xici = $.xici||{};
	$.xici.event = {
		store:{},
		bind:function(name,fun){
			if(!this.store[name])
			{
				this.store[name] = [];
			}
			this.store[name].push(fun);
		},
		trigger:function(name,params){
			if(this.store[name])
			{
				for (var i = 0; i < this.store[name].length; i++) {
					this.store[name][i](params);
				};
			} 
		}
	}
})(jQuery)
