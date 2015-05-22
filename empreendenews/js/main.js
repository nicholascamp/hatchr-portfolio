(function ($) {
    var subscribeForm = $('#subscribe-form'),
        subscribeDo = $('#subscribe-do'),
        subscribeSuccess = $('#subscribe-success');

    subscribeForm.on('submit', function (e) {
        e.preventDefault();
        var form = $(this);

        $.post(
            form.attr('action'),
            form.serialize()
        )
        .always(function () {
            location.hash = 'success';
            location.reload();
        });
    });

    if (location.hash === '#success') {
        subscribeDo.hide();
        subscribeSuccess.show();

        // Facebook conversion pixel
        (function() {
          var _fbq = window._fbq || (window._fbq = []);
          if (!_fbq.loaded) {
            var fbds = document.createElement('script');
            fbds.async = true;
            fbds.src = '//connect.facebook.net/en_US/fbds.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(fbds, s);
            _fbq.loaded = true;
          }
        })();
        window._fbq = window._fbq || [];
        window._fbq.push(['track', '6020043392659', {
            'value':'0.00',
            'currency':'BRL'
        }]);
    }
})(jQuery);
