define(["jquery"],function($){
	if(window.location.href.indexOf("index.html")==-1) return;
	var a=null;
	//手机号码验证
	$(".phone").on("blur",function(){
		var regphone=/^1[3,5,7,8]\d{9}$/g;
		var phone=$(this).val();
			if(!regphone.test(phone)){
				$(this).parent().next().text("格式有误，请重新书写！")
			}else{
				a++;
				$(this).parent().next().remove();
			}
	})

	//密码
	$(".pass")
		.on("focus",function(){
			$(this).parent().next().text("建议输入6-12位字符！")
		})
		.on("blur",function(){
			var regpass=/[\d0-1a-zA-Z]{6,12}/g;
			var pass=$(this).val();
				if(!regpass.test(pass)){
					$(this).parent().next().text("格式有误，请重新书写！")
				}else{
					a++;
					$(this).parent().next().remove();
				}
		})
	//确认密码
	$(".passsure").on("blur",function(){
		var pass=$(".pass").val();
		var passsure=$(this).val();
			if(pass==passsure){
				a++;
				$(this).parent().next().remove();
			}else{
				$(this).parent().next().text("密码不相符，请确认密码！");
			}
	})
	//图片验证码
	$(".img-code").on("blur",function(){
		var img_code=$(this).val();
		var imgreg=/[0-1a-zA-Z]{4}/g;
			if(!imgreg.test(img_code)){
				$(this).parent().next().text("验证码有误！");
			}else{
				a++;
				$(this).parent().next().remove();
			}

	})

	//短信验证码
	$(".phone_code").on("blur",function(){
		var phone_code=$(this).val();
		var preg=/\d{6}/g;
			if(!preg.test(phone_code)){
				$(this).parent().next().text("验证码有误！");
			}else{
				a++;
				$(this).parent().next().remove();
			}

	})


	//全部成立可以提交
	$(".subBtn").on("click",function(){
		if(a==5){
			alert("提交")
		}
	})
})