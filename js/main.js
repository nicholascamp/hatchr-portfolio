$(document).ready(function () {
    //*menu*//
    var nav = $('nav'),
        navTopPos = nav.position().top - nav.outerHeight();

    $(window).scroll(function () {
        if ($(this).scrollTop() > navTopPos) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });

    var logoPaths = $('header h1 path');
    logoPaths.each(function (i, p) {
        var length = p.getTotalLength(),
            path = $(p);

        path.attr('stroke-dasharray', length + ' ' + length);
        path.attr('stroke-dashoffset', length);
        path.get(0).getBoundingClientRect();
    });

    logoPaths.css('transition', 'stroke-dashoffset 4s ease-in-out, fill 6s ease-in-out');
    logoPaths.attr('fill', '#ffffff');
    logoPaths.attr('stroke-dashoffset', 0);

    //*modal*//
    $('a[name=modal]').click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('#mask').css({
            'width': maskWidth,
            'height': maskHeight
        });

        $('#mask').fadeIn(1000);
        $('#mask').fadeTo("slow", 0.5);


        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        $(id).css('top:0;', winH / 2 - $(id).height() / 2);
        $(id).css('left', winW / 2 - $(id).width() / 2);

        $(id).fadeIn(2000);


    });

    $('.window .close').click(function (e) {
        e.preventDefault();

        $('#mask').hide();
        $('.window').hide();
    });

    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });
    //*carroussel*//
    $(function () {

        // $('#demo5').scrollbox({
        //     direction: 'h',
        //     distance: 200
        // });
        $('#demo5-backward').click(function () {
            $('#demo5').trigger('backward');
        });
        $('#demo5-forward').click(function () {
            $('#demo5').trigger('forward');
        });

    });



});
