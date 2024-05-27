$(function(){
    mainInfo()
})
function mainInfo(){
    intro()
    gnb()
    subGnb()
    mainVisual()
    foodBusiness()
    introduceTab()
    subGnb()
}
function intro(){
    $(document).on('click','a[href="#"]',function(e){   e.preventDefault();  })
}
function gnb(){
    var $gnbli = $('#gnb > li');
    var $header = $('#header');
    $gnbli.hover(function(){        
        $header.stop().animate({height:350},400);
    })
    $header.on('mouseleave',function(){        
        $header.stop().animate({height:144},400)
    })
}
function mainVisual(){
    $bannerli = $('#mainVisual .main-banner li');
    $next = $('#mainVisual .btn-wrap .next');
    $prev = $('#mainVisual .btn-wrap .prev');
    $pagingli = $('#mainVisual .paging li');
    
    var current = 0, timerId=0 , interval=5000, size = $bannerli.length , old = 0;
    timerId = setInterval(make, interval);
    function make(){
        current ++;
        if( current > size-1 ){ current = 0 };
        $bannerli.eq(current).stop().css({left:'100%'}).animate({left:0},400);   
        $bannerli.eq(old).stop().css({left:0}).animate({left:'-100%'},400);
        $pagingli.removeClass('on');
        $pagingli.eq(current).addClass('on');
        old  = current;
    }
    $next.click(function(){
        current ++;
        if( current > size-1 ){ current = 0 };
        $bannerli.eq(current).stop().css({left:'100%'}).animate({left:0},400);   
        $bannerli.eq(old).stop().css({left:0}).animate({left:'-100%'},400);
        $pagingli.removeClass('on');
        $pagingli.eq(current).addClass('on');
        old  = current;
    })
    $prev.click(function(){
        current --;
        if( current < 0 ){ current = size-1 };
        $bannerli.eq(current).stop().css({left:'-100%'}).animate({left:0},400);   
        $bannerli.eq(old).stop().css({left:0}).animate({left:'100%'},400);
        $pagingli.removeClass('on');
        $pagingli.eq(current).addClass('on');
        old  = current;
    })
    $pagingli.click(function(){
        current = $(this).index();
        if( current != old ){
            $bannerli.eq(current).stop().css({left:'100%'}).animate({left:0},400);   
            $bannerli.eq(old).stop().css({left:0}).animate({left:'-100%'},400);
            $pagingli.removeClass('on');
            $pagingli.eq(current).addClass('on');
            old  = current;
        }
    })
}
function foodBusiness(){
    $('.food-business .mask article').width(5800);
    var $next = $('.food-business .food-btn .next');
    var $prev = $('.food-business .food-btn .prev');
    var $more = $('.food-business .mask article .list li p.more a');
    last = $('.food-business .mask article .list').last();
    
    $('.food-business .mask article').prepend(last);
    $('.food-business .mask article').css({marginLeft:'-=1420'});
    $next.on('click',function(){
        $('.food-business .mask article').animate({marginLeft:'-=1420'},400,function(){
            first = $('.food-business .mask article .list').first();
            $('.food-business .mask article').append(first);
            $('.food-business .mask article').css({marginLeft:'+=1420'});
        })
    })
    $prev.on('click',function(){
        $('.food-business .mask article').animate({marginLeft:'+=1420'},400,function(){
            last = $('.food-business .mask article .list').last();
            $('.food-business .mask article').prepend(last);
            $('.food-business .mask article').css({marginLeft:'-=1420'});
        })
    })
    $more.hover(function(){
        $(this).stop().addClass('on');
    },function(){
        $(this).stop().removeClass('on');
    })
}
function introduceTab(){
    $('.introduce .tab .size article').hide().first().show();
    var cnt  = 0;
    $('.introduce .tab ul li').click(function(){
         cnt = $(this).index();
         $('.introduce .tab .size article').hide();
         $('.introduce .tab .size article').eq(cnt).show();
         $('.introduce .tab ul li').removeClass('on');
         $(this).addClass('on');
    })
}
function subGnb(){
    $('#subMenu .sub-menu > li.sub-menu1 ul').hide();
    $('#subMenu .sub-menu > li.sub-menu2 ul').hide();
    var $subMenu1 = $('#subMenu .sub-menu > li.sub-menu1');
    var $subMenu2 = $('#subMenu .sub-menu > li.sub-menu2');
    $subMenu1.hover(function(){        
        $('#subMenu .sub-menu > li.sub-menu1 ul').stop().slideDown(400);
    },function(){
        $('#subMenu .sub-menu > li.sub-menu1 ul').stop().slideUp(400);
    })
    $subMenu2.hover(function(){        
        $('#subMenu .sub-menu > li.sub-menu2 ul').stop().slideDown(400);
    },function(){
        $('#subMenu .sub-menu > li.sub-menu2 ul').stop().slideUp(400);
    })
}