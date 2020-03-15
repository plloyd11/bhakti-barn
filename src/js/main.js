new WOW().init();

import TeacherCard from './vue/TeacherCard.js';
import Expander from './vue/Expander.js';
import Filter from './filter.js';

// Mobile Nav

$(document).ready(function() {
    $('.mobile-menu-trigger').on('click', function() {
        $('.mobile-menu--overlay').addClass('open');
    });

    $('.close-menu').on('click', function() {
        $('.mobile-menu--overlay').removeClass('open');
    });
});

$(document).ready(function() {
    $('#alert-close').on('click', function() {
        $('#alert-banner').addClass('hidden');
    });
});
