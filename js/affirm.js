define(["jquery"],function(){
	
	var arr = ["0"];
	$(".check")
		.on("mouseover","li",function(){
			$(this).addClass("checked1");
		})
		.on("mouseout","li",function(){
			$(this).removeClass("checked1");
		})
		.on("click","li",function(){
			if($(this).hasClass("checked2")){
				$(this).removeClass("checked2");
				var idx2 = $(this).attr("data-id");

				$(".list").each(function(i,v){
					if($(v).attr("data-id") == idx2){
						$(v).remove();
					}
				})

			}else{
				$(this).addClass("checked2");
				var idx = $(this).attr("data-id");
				var text = $(this).text();
				console.log(text)
				var list = '<div class="list" data-id='+idx+'>'+
									'<h3>'+text+'(全国)</h3>'+
									'<dl>'+
										'<dt><img src="images/per1.png" alt=""></dt>'+
										'<dd>'+
											'马东瑞'+
										'<span><img src="images/xx.png" alt="" /></span>'+
										'</dd>'+
									'</dl>'+
								'</div>';
				
				$(".all").before(list);
			}
			

		})



})