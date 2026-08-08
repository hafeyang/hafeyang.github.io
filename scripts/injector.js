'use strict';

// Inject custom CSS after theme styles so overrides take precedence
hexo.extend.injector.register('head_end', function () {
    var url = hexo.extend.helper.get('url_for').bind(hexo);
    // Use a simple cache-busting query param
    var cssPath = url('/css/custom.css') + '?v=1';
    return '<link rel="stylesheet" href="' + cssPath + '" />';
}, 'default');
