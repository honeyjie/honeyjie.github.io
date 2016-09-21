$(function(){
	//keydown keyup keypress blur focus 
	//focus keydown keypress blur keydown keypress
	//1.鼠标放入文本框获得焦点[focus] 判断val是否为空，若是，显示置灰按钮;	若不是，则不做处理
	var $content = $("#comment-content");
	var $button = $("#public");
	var $str_num = $("span[data_string]");
	var val = $content.val();
		$content.focus(function(){
		if (!val) {
			$button.css({"display":"block"});
			// button.removeClass("button-on");

		}
	});
	$content.keyup(function(){
		val = $content.val();
		if (val){
			$button.css({"display":"block"});
			$button.addClass("button-on");
			$str_num.css({"display":"block"});
			//统计字数
			var string1 = $content.val();
			var string2 = wordNum(string1);
			$content.next().children().text(string2);
		}else {
			$button.css({"display": "none"});
			$str_num.css({"display":"none"});
			$content.next().children().text("");
		}

	});

$(function(){
	$(".comment .button-on").live("click",function(){
		var now = new Date();
		var day = now.getFullYear()+"年"+(now.getMonth()+1)+"月"+now.getDate()+"日";
		console.log(day);
		var val = $("#comment-content").val();
		//console.log(val);
		$.post("/comment_content", { 
			comment_content: val,
			comment_day: day
		}, function(data,textStatus){
			var comment = data.comment_content;
			var appendstr = "<li><span>"+day+"</span><a>"+comment+"</a></li>";
			$("#comment-list ul").prepend(appendstr);
		},"json");
			$("#comment-content").val("");
			$(".comment button").toggle();
			$("[data_string]").toggle();
			$("#comment-list").trigger("click");
	});
});
$(function(){
	/*$("#comment-list").click(function(){
		$("#comment-list li").each(function(i,el){
			//el.css("animation-play-state","playing");
			//-webkit-animation-delay
			el.style.webkitAnimationPlayState = "running";
			var time = 300 + "px";
			time += 300;
			el.style.webkitAnimationDelay = time;

		});
	});
	*/
	
	$("#comment-list").click(function(){
		$("#comment-more").css("display","none");
			
			//高度随机 Math.random();200px;
			var time;
			var h;
			var duration;
			var total_h = $("#comment-list").height();
			var size;
			var a,b,c = "";
			var color = "";
		for (var i = 0; i < $("#comment-list li").length; i++) {
			var el = $("#comment-list li a");
			h = Math.random()*total_h;
			time = Math.random()*10000;
			duration = Math.random()*10000 + 1000;
			size = Math.random()*(24-12)+ 12;
			var color_str = "0123456789abcdef";
			var a= Math.floor(Math.random()*16);
			var b= Math.floor(Math.random()*16);
			var c= Math.floor(Math.random()*16);
			var arr = color_str.split("");
			el[i].style.webkitAnimationPlayState = "running";
			el[i].style.webkitAnimationDelay = time + "ms";
			el[i].style.webkitAnimationDuration = duration + "ms";
			el[i].style.top = h + "px";
			el[i].style.fontSize = size + "px";
			el[i].style.color = "#"+arr[a]+arr[b]+arr[c];
		}
	})	
	return false;
})

//post方法用body取值,get方法用query取值！！！
$(function(){
	//keydown keyup keypress blur focus 
	//focus keydown keypress blur keydown keypress
	//1.鼠标放入文本框获得焦点[focus] 判断val是否为空，若是，显示置灰按钮;
	//2.键盘按下字符键不放，[keydown,keypress]均响应。但keydown还会在按shift等非字符键时效应；
	//3.键盘按下的键放开，[keyup]
		//判断字符长度，当不为空时，显示字数和点亮的按钮。为空时按钮置灰
	//4.当焦点离开文本框时，[blur]
	var A = ["keydown"];
	$(A).each(function(i,el){
		$("#test").bind( A[i] ,function(){
			alert(A[i]);
		});
	});	
});
function wordNum(A){
	var len = A.length;
	var str1 = "";
	var str2 = "";
	for (var i = 0; i < len; i++) {
		if(A.charCodeAt(i) <= 128 && A.charCodeAt(i) >=0){
			str1 += A[i];//包含空格
		} else {
			str2 += A[i];
		};
	}
	var len_cn = str2.length;
	var len_en = str1.trim().split(/\s*\s/).length;//对分离的英文字符串去除前后空格
	var Len =  len_cn + len_en;
	// console.log(len_en,len_cn);
	// console.log(str1,str2);
	return Len;
}
// var result = wordNum("I am 熊洁    你呢 ，    s s  、、    ");
// // console.log(result);
// // console.log(str1);
// // console.log(str2);
// var len1 = str2.length;
// // var len2 = "I am ,   .   。   ？Xiong Jie？ 。 ".replace(/\b/g, "|");//b表示单词边界
// // console.log(len2);
// var len4 = str1.match(/\b/g);
// // console.log(len4);
// var len3 = $.trim(str1).split(/\s*\s/).length;//计算英文单词字数

// console.log(len3);
// // var len3 = "1 ,2     ,3    ,    4 ,   ".split(/\s*,\s*/);
// // console.log(len3);

// // console.log(len1,len2);
// console.log("1".split("1"));
});