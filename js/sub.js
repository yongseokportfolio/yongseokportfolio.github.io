$(function(){

	init();

})//endfunction

function init() {
 pageScroll(".con-box"); 
}

function pageScroll(selector){
var old = 0   
var numPage = $(selector).length;  
var pageNext  = 0 ;
var pagePrev  = 0 ;
var isPlaying = 0 ;
var direction  = 0 ;   

$(selector).each(function(i){
	$(".nav").append("<li></li>");
})
var cnt  =  0
$(".nav li").on("click",function(){
	cnt  = $(this).index();
	showPage(cnt+1)
})

showPage(1);
 function showPage(current){	   		  
	     if(old == current || isPlaying == 1 ) return false;	   		     
	     isPlaying = 1;
	     
	     var h  = (current -1 ) * $(".con-box").width();
         		     
	     $("#webContent").stop().animate({left:-h},500,function(){
	       isPlaying = 0	   		     
	     })	  	   		      		     
	     old = current
	     $(".nav li").removeClass("on");
	     $(".nav li").eq(current-1).addClass("on");
	     
	   
	     pagePrev  = (current-1) < 1 ? 1: current-1;
	     pageNext = (current+1) > numPage ? numPage:current+1;
	    // console.log(current)    		    
	  }
 
	  $("html,body").on("mousewheel DOMMousewheel",function(e){
		e.stopPropagation();	   		  	
		if(e.originalEvent.detail){
			direction = e.originalEvent.detail/3;			
		}else{
			direction = e.originalEvent.wheelDelta / 120;	
		}    		  	
		
		if(direction == -1){
			showPage(pageNext)
		}else if(direction == 1){
		    showPage(pagePrev)
		}	   		  
	 })	   	
}                 

var Menu = {  
  el: {
    ham: $('.menu'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
            $('#nav').toggleClass('on');
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click');
      ;
  }
};

Menu.init();

$(function(){
	// 	이미지 클릭시 해당 이미지 모달
	$(".img-modal").click(function(){
		$(".modal").show();
		// 해당 이미지 가겨오기
		var imgSrc = $(this).children("img").attr("src");
		var imgAlt = $(this).children("img").attr("alt");
		$(".modalBox img").attr("src", imgSrc);
		$(".modalBox img").attr("alt", imgAlt);
		
		// 해당 이미지 텍스트 가져오기
		//var imgTit =  $(this).children("p").text();
		//$(".modalBox p").text(imgTit);
			
		// 해당 이미지에 alt값을 가져와 제목으로
		//$(".modalBox p").text(imgAlt);
	});
		
	//.modal안에 button을 클릭하면 .modal닫기
	$(".modal button").click(function(){
		$(".modal").hide();
	});
		
	//.modal밖에 그리고 .modal 클릭시 닫힘
	$(".modal").click(function (e) {
		if (e.target.className != "modal" && e.target.className == "modal") {
		  return false;
		} else {
		  $(".modal").hide();
		}
	});
});
