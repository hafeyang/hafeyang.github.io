'use strict';

// Inject custom CSS after theme styles so overrides take precedence
hexo.extend.injector.register('head_end', function () {
    var url = hexo.extend.helper.get('url_for').bind(hexo);
    var cssPath = url('/css/custom.css') + '?v=1';
    return '<link rel="stylesheet" href="' + cssPath + '" />';
}, 'default');

// Inject social links into footer using after_render:html filter
var socialLinksHTML = [
'<div class="social-links" data-pagefind-ignore>',
'  <a href="mailto:hafeyang@gmail.com" title="Email" aria-label="Email">',
'    <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
'  </a>',
'  <a href="https://www.github.com/hafeyang" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">',
'    <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>',
'  </a>',
'  <a href="https://twitter.com/hafeyang" target="_blank" rel="noopener noreferrer" title="Twitter" aria-label="Twitter">',
'    <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
'  </a>',
'  <a href="https://facebook.com/hafeyang" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook">',
'    <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
'  </a>',
'  <a href="https://weibo.com/hafeyang" target="_blank" rel="noopener noreferrer" title="Weibo" aria-label="Weibo">',
'    <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443z"/><path d="M10.566 17.484c-1.854.406-3.532-.454-3.747-1.92-.217-1.462 1.06-2.982 2.913-3.388s3.532.454 3.748 1.92c.219 1.464-1.058 2.982-2.914 3.388z"/><path d="M7.876 14.632c.12-.567.04-1.076-.18-1.137-.22-.06-.497.354-.617.923-.12.566-.04 1.075.18 1.136.22.06.497-.353.617-.922z"/></svg>',
'  </a>',
'  <a href="https://zhihu.com/hafeyang" target="_blank" rel="noopener noreferrer" title="Zhihu" aria-label="Zhihu">',
'    <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M13.444 20.633h-2.275l-1.191-2.66h-5.49v-2.932h2.402L7.663 6.05h2.077L8.508 15.04h3.014l-.823 2.66h.857l.933-2.66h1.544l-.589 4.593zm3.658-10.08h-2.432l-.234.912h2.183l-.257.988h-2.17l-.387 1.488h2.16l-.258.987h-2.157l-.444 1.695h2.02l-.257.988h-1.9l.724-2.769h1.348l.645-1.695h-1.344l.362-1.405h1.344l.263-.988h-1.344l.279-1.08h2.457z"/></svg>',
'  </a>',
'</div>'
].join('\n');

hexo.extend.filter.register('after_render:html', function (str) {
    // Insert social links right before the footer's closing tag
    return str.replace('</footer>', socialLinksHTML + '\n</footer>');
});