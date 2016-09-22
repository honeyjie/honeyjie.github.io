$("#send1").click(function(){
	console.log($("#username").val());
	$.post("/content",{username: $("#username").val(),content: $("#content").val()},function(data,textStatus){
		var username = data.username;
		var content = data.content;
		var txtHtml = "<div>"+username+"\n"+content+"</div>";
		//console.log(data);
		$("#resText").html(txtHtml);
	},"json");
});

$("#send").click(function(){
	//console.log($("#username").val());
	$.post("/content",$("#form1").serialize(),function(data,textStatus){
	var content = data.content;
	var username = data.username;
	var txtHtml = "<div>"+username+"\n"+content+"</div>";
	//console.log(data);
	$("#resText").html(txtHtml);
	},"json");

});

$("#lo1").click(function(){
	$.getScript("/js/1.js")
		.done(function(script,textStatus){
			console.log(script,textStatus);
		})
		.fail(function(jqxhr,settings,exception){
			console.log(jqxhr,settings,exception);
		})
		//$(this).animate( {backgroundColor: "purple"},1000)
			       //.animate( {backgroundColor: "green"},1000);
});

$("#lo1").click(function(){
	$.getJSON("/js/1.json",{"one":"1","two":"2"},function(data){
		console.log(data);
		$("#error").html("Hello"+data.name+"lovely"+data.age);
	});
		
		//$(this).animate( {backgroundColor: "purple"},1000)
			       //.animate( {backgroundColor: "green"},1000);
 });


$("#lol").click(function(){

	$("#loading").ajaxStart(function(){
        $(this).show();
    }).ajaxStop(function(){
        $(this).hide();
	});
	$.ajax({
		type: "POST",
		url: "/2",
		data: {name: "Lime"},
		dataType: "json",
		success: function(data,textStatus){	
			console.log(data)}
	});
});

	//cookie
$(function(){
	var cookie_name = "cookie_name";
	var cookie_password = "cookie_password";
	if ($.cookie(cookie_name)){
		$("#user1").val($.cookie(cookie_name));
	};
	$("#check1").click(function(e){
		if (this.checked){
			$.cookie(cookie_name,$("#user1").val(),{expires:1});
		}else{
			alert("您需要记住吗？")
		};
	});
})

	

//var xmlHttpReq = null;

/*$("#bt").click(function(){
	$("#res").load("/content p",{"name":"Lime","age":"18"},function(res,status,xhr){
	if ( status == "error" ) {//参数直接对应返回内容，状态和对象！！！
   		var msg = "Sorry but there was an error: ";
   		
    	$( "#error" ).html( msg + status + " " + res);
	}
  	//alert("Hi");
  	$("#error").html(status + " " + res);
  	console.log(res);
  		//???参数为什么不能随意写？
		/*if (status =="success") {//success,error,notmodified,tomeout
			$("p").html(xhr.rese);
		}else {
			$("p").html(status + " "+ xhr.rese);
		}
	});
});
*/
	/*

function handleResponse(){
	//$("#res").html(xmlHttpReq.responseText);
	$("#res").load("/content p",{"name":"Lime","age":"18"},function(rese,status,xhr){
		if ( status == "error" ) {
	   		var msg = "Sorry but there was an error: ";
	   		
	    	$( "#error" ).html( msg + xhr.status + " " + xhr.res);
  		}
  	//alert("Hi");
  	$( "#error" ).html(xhr.status + " " + xhr.rese);//???参数为什么不能随意写？
		/*if (st =="success") {//success,error,notmodified,tomeout
			$("p").html(xml.re);
		}else {
			$("p").html(st+" "+ xml.re);
		}
		
		$("#new").html(xhr.response);
	});


}

function Ajax() {
	xmlHttpReq = new XMLHttpRequest();
	//xmlHttpReq.onreadystatechange = handleResponse;
	//var arr = ["error","load","loadend","loadstart","progress"];
	//$(arr).each(function(index,el){
	//	var typ ="on"+el;

	xmlHttpReq.onreadystatechange = handleResponse;

	xmlHttpReq.open("GET", "/content");
	xmlHttpReq.send(null);
}
*/
/*不要把JQ与js弄混淆了
console.log("1");
$(function(){
	console.log("2");
	$("#lol").click(function() {
	console.log($("#lol"));	
		$("#res").load("/content");
	});
})
*/
