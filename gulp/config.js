'use strict';

module.exports = {

    'scripts': {
        'src' : 'assets/app/**/*.js',
        'dest': 'public/build/js'
    },

    'images': {
        'src' : 'app/images/**/*',
        'dest': 'build/images'
    },

    'views': {
        'watch': [
            'assets/app/partials/**/*.html'
        ],
        'src': 'assets/app/partials/**/*.html',
        'dest': 'assets/app'
    },

    'dist': {
        'root'  : 'public/build'
    },

    'browserify': {
        'entries'   : ['./assets/app/main.js'],
        'bundleName': 'main.js',
        'sourcemap' : true
    },

    'concat': [
        {
            src: [

            ],
            dest: ''
        }
    ]

};
