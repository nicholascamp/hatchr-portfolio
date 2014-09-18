$.fn.parallax = function () {
    var targets = $(this);

    $(window).on('scroll', function() {
        targets.each(function() {
            var elem, speed;

            elem = $(this);
            speed = elem.attr('data-speed');
            direction = elem.attr('data-direction');

            if (!direction) {
                direction = 'to top';
            }

            var yPos;
            yPos = -($(window).scrollTop() - elem.offset().top) / speed;

            if (direction == 'to bottom')
                yPos = -yPos;

            elem.css('background-position', 'center ' + yPos + 'px');
        });
    });

    $(window).trigger('scroll');
};

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

        $('html, body').animate({
            'scrollTop': $(hash).position().top
        }, 500, function () {
            location.hash = hash;
        });
    });

    /*
     * Track Scroll
     * Detecta se o usuário está atualmente vendo o elemento em questão, se sim
     * adiciona uma classe no elemento para sinalizar
     */
    var trackScrollElems = $('.track-scroll'),
        trackScrollOffset = 200;

    $(window).on('scroll', function (e) {
        var scrollTop = $(this).scrollTop() + trackScrollOffset;
        trackScrollElems.each(function () {
            if (scrollTop >= $(this).position().top) {
                $(this).addClass('track-scroll-focused');
            }
        });
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

    $(".nano").nanoScroller();

    /*
     * Animação do caminho do processo
     */
    var processPath = $('#processo path'),
        processPathLength = processPath.get(0).getTotalLength();

    processPath.attr('stroke-dasharray', processPathLength + ' ' + processPathLength);
    processPath.attr('stroke-dashoffset', processPathLength);
    processPath.get(0).getBoundingClientRect();

    processPath.css('transition', 'stroke-dashoffset 3s linear');

    /*
     * Efeito Parallax
     */
    $('[data-speed]').parallax();

    /*
     * Envio assíncrono do formulário de contato
     */
    $('#contato form').on('submit', function (e) {
        e.preventDefault();
        var form = $(this),
            successMsg = form.parent().find('.success-message');

        form.addClass('hidden');
        successMsg.addClass('shown');
        $.post(form.attr('action'), form.serialize());
    });
});
