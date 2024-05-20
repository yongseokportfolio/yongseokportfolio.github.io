$(function(){

	init();

})//endfunction

function init() {
 bgpaint();
}


function bgpaint(){
    $('.inner-wrap').mousemove(function(e){
      var posX= e.pageX;
      var posY= e.pageY;
     $(".inner-wrap span.orange").css({"top":150-(posX/20) }); 
     $(".inner-wrap span.orange").css({"left":230-(posY/20) });
     $(".inner-wrap span.green").css({"top":578+(posY/30) }); 
     $(".inner-wrap span.green").css({"left":346+(posX/30) });
     $(".inner-wrap span.blue").css({"top":43+(posX/20) }); 
     $(".inner-wrap span.blue").css({"left":1334+(posY/20) });
     $(".inner-wrap span.brown").css({"top":550-(posX/30) }); 
     $(".inner-wrap span.brown").css({"left":1500-(posY/30) });
     $(".inner-wrap span.purple").css({"top":495+(posX/20) }); 
     $(".inner-wrap span.purple").css({"left":-148-(posY/20) });
  });
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
