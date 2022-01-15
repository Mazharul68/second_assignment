$(document).ready(function() {
    // Navbar-menu-Active-Class Add
    $(".menu li").click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    /////////////////////////NAVBAR MENU ACTIVE JS END

    //toggle menu/navbar Scripts
    $('.menu-btn').click(function() {
        $('.header_section .menu ').toggleClass("active");
        $('.header_section i ').toggleClass("active");
    });

    ///MAIN NAVBAR JS START HERE

});