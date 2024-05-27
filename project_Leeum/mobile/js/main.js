$(function(){

    $('.all-menu').click(function(){
        $('#nav').toggleClass('on'),
        $('#gnb').toggleClass('on')
    })

})
$(function(){                
    $('#gnb li a').click(function(){
        var ulnext = $('#gnb li ul').next();
        $('#gnb li ul').not(ulnext).slideUp();
        $('#gnb li a').not(this).removeClass('on');
       $(this).toggleClass('on')
       $(this).next().stop().slideToggle();
    })
})
$(document).on('click','a[href="#"]',function(e){
    e.preventDefault();
})