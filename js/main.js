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

    $('#cases-detail .close-button').on('click', function (e) {
        e.preventDefault();
        $(this).parent().removeClass('active');
    });

    $('#cases-detail .slider').slick({
        'autoplay': true
    });
});
