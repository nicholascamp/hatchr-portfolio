(function () {
    var subscribeDo = document.getElementById('subscribe-do'),
        subscribeSuccess = document.getElementById('subscribe-success');

    if (location.hash === '#success') {
        subscribeDo.style.display = 'none';
        subscribeSuccess.style.display = 'block';

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
})();
