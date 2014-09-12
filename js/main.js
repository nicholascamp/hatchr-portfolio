$(document).ready(function () {
    /*
     * Menu principal
     * Se torna fixo no topo quando fora do viewport
     */
    var nav = $('nav'),
        navTopPos = nav.position().top;

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > navTopPos - nav.outerHeight()) {
            nav.addClass('fixed');
        } else {
            nav.removeClass('fixed');
        }
    });

    if (location.hash) {
        $(window).trigger('scroll');
    }

    /*
     * Menu principal
     * Rolamento suave (e carinhoso) ao clicar nos menus
     */
    var navAnchors = $('nav a');

    navAnchors.on('click', function (e) {
        e.preventDefault();
        var target = $(this),
            hash = target.attr('href');

        location.hash = hash;

        $('html, body').animate({
            'scrollTop': $(hash).position().top
        }, 500);
    });

    /*
     * Animação de escrita manual da logomarca
     */
    var logoPaths = $('#logo path');

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

    /*
     * Telas de detalhamento de cases
     */
    $('#cases article').on('click', function (e) {
        e.preventDefault();
        var caseID = $(this).attr('data-case');
            caseDetail =  $('#cases-detail [data-case=' + caseID + ']');

        caseDetail.addClass('active');
    });

    $('#cases-detail .case-close-button').on('click', function (e) {
        e.preventDefault();
        $(this).closest('[data-case]').removeClass('active');
    });

    $('#cases-detail .slider').slick({
        'autoplay': true,
        'dots': true,
        'speed': 500
    });
});
