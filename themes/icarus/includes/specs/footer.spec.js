const { doc, type, defaultValue } = require('../common/utils').descriptors;

module.exports = {
    [type]: 'object',
    [doc]: 'Footer section link settings',
    links: {
        ...require('./icon_link.spec'),
        [doc]: 'Links to be shown on the right of the footer section',
        [defaultValue]: {
            'Creative Commons': {
                icon: 'fa fa-creative-commons',
                url: 'https://creativecommons.org/'
            },
            'Attribution 4.0 International': {
                icon: 'fa fa-creative-commons-by',
                url: 'https://creativecommons.org/licenses/by/4.0/'
            },
            'Download on GitHub': {
                icon: 'fa',
                url: 'https://github.com/ppoffice/hexo-theme-icarus'
            }
        }
    }
};