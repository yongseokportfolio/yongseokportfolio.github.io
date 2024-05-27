$(function(){
    mainVisual()
    intro()
})

function intro(){
    $(document).on('click','a[href="#"]',function(e){   e.preventDefault();  })
}

function mainVisual(){
    $bannerli = $('#mainVisual .main-banner li');
    $next = $('#mainVisual .btn-wrap .next');
    $prev = $('#mainVisual .btn-wrap .prev');
    
    var current = 0, timerId=0 , interval=5000, size = $bannerli.length , old = 0;
    timerId = setInterval(make, interval);
    function make(){
        current ++;
        if( current > size-1 ){ current = 0 };
        $bannerli.eq(current).stop().css({left:'100%'}).animate({left:0},400);   
        $bannerli.eq(old).stop().css({left:0}).animate({left:'-100%'},400);
        old  = current;
    }
    $next.click(function(){
        current ++;
        if( current > size-1 ){ current = 0 };
        $bannerli.eq(current).stop().css({left:'100%'}).animate({left:0},400);   
        $bannerli.eq(old).stop().css({left:0}).animate({left:'-100%'},400);
        old  = current;
    })
    $prev.click(function(){
        current --;
        if( current < 0 ){ current = size-1 };
        $bannerli.eq(current).stop().css({left:'-100%'}).animate({left:0},400);   
        $bannerli.eq(old).stop().css({left:0}).animate({left:'100%'},400);
        old  = current;
    })
}