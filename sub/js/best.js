$(function(){
    //제이쿼리
    $(function(){
        $('header .inner .pc .gnb .depth01 > a').mouseenter(function(){
            $('header .inner .pc .gnb .depth02').stop().slideUp()
            $(this).next().stop().slideDown()
        })
        $('header .inner .pc .gnb .depth01').mouseleave(function(){
            $('header .inner .pc .gnb .depth02').stop().slideUp()
        })
        $('.menu_open').click(function(){
            $('.mobile_gnb').animate({
               right : '0'
            })
                
            })
        $('.menu_close').click(function(){
            $('.mobile_gnb').animate({
               right : '-100%'
            })
            })

           $('.mobile_gnb .gnb .depth01 > a').click(function(){
            $('.mobile_gnb .gnb .depth02').stop().slideUp()
            $(this).next().stop().slideToggle()
           })
        })

})