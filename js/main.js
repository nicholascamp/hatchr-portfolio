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
});
